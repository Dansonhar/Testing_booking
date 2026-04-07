import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const mobile = () => window.innerWidth < 768;

// ─── Particle Field ────────────────────────────────────────────────────────────
// Floating green particles with mouse parallax and scroll fade.
// Used behind the hero and final CTA.

export function ParticleField({ className = '', scrollFade = true }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    // ── Setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 120);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile() });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ── Main particles ──
    const count = mobile() ? 500 : 1400;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3]     = (Math.random() - 0.5) * 80;
      pos[i3 + 1] = (Math.random() - 0.5) * 80;
      pos[i3 + 2] = (Math.random() - 0.5) * 50;
      vel[i3]     = (Math.random() - 0.5) * 0.008;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.008;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.004;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x22c55e,
      size: mobile() ? 0.14 : 0.09,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── Glow particles (larger, fewer) ──
    const glowN = mobile() ? 12 : 35;
    const glowGeo = new THREE.BufferGeometry();
    const glowPos = new Float32Array(glowN * 3);
    for (let i = 0; i < glowN; i++) {
      glowPos[i * 3]     = (Math.random() - 0.5) * 55;
      glowPos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      glowPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
    const glowMat = new THREE.PointsMaterial({
      color: 0x4ade80,
      size: 0.22,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Points(glowGeo, glowMat);
    scene.add(glow);

    // ── Interaction ──
    let mx = 0, my = 0, scrollY = 0;
    const onMouse = (e) => { mx = (e.clientX / w - 0.5) * 2; my = (e.clientY / h - 0.5) * 2; };
    const onScroll = () => { scrollY = window.scrollY; };
    if (!mobile()) window.addEventListener('mousemove', onMouse);
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Loop ──
    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();

      // Float each particle
      const p = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        p[i3]     += vel[i3];
        p[i3 + 1] += vel[i3 + 1];
        p[i3 + 2] += vel[i3 + 2];
        if (p[i3] > 40) p[i3] = -40;
        if (p[i3] < -40) p[i3] = 40;
        if (p[i3 + 1] > 40) p[i3 + 1] = -40;
        if (p[i3 + 1] < -40) p[i3 + 1] = 40;
      }
      geo.attributes.position.needsUpdate = true;

      // Gentle spin
      points.rotation.x = t * 0.012 + scrollY * 0.00012;
      points.rotation.y = t * 0.018;
      glow.rotation.x = t * 0.008;
      glow.rotation.y = -t * 0.012;

      // Mouse parallax on camera
      camera.position.x += (mx * 3 - camera.position.x) * 0.015;
      camera.position.y += (-my * 2 - camera.position.y) * 0.015;
      camera.lookAt(0, 0, 0);

      // Scroll-driven fade
      if (scrollFade) {
        const fade = Math.max(0, 1 - scrollY / (h * 1.2));
        mat.opacity = 0.45 * fade;
        glowMat.opacity = 0.6 * fade;
      }

      renderer.render(scene, camera);
    };
    loop();

    // ── Resize ──
    const onResize = () => {
      w = mount.clientWidth;
      h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      if (!mobile()) window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      geo.dispose(); mat.dispose();
      glowGeo.dispose(); glowMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [scrollFade]);

  return <div ref={mountRef} className={`three-layer ${className}`} />;
}

// ─── Floating Geometry ──────────────────────────────────────────────────────────
// Wireframe icosahedron + inner dodecahedron + orbiting ring of particles.
// Rotates on scroll, scales based on viewport proximity.

export function FloatingGeometry() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ── Outer wireframe ──
    const outerGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outer);

    // ── Inner wireframe ──
    const innerGeo = new THREE.DodecahedronGeometry(1.6, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // ── Core glow ──
    const coreGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.25,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Orbiting particle ring ──
    const ringN = mobile() ? 100 : 250;
    const ringGeo = new THREE.BufferGeometry();
    const ringPos = new Float32Array(ringN * 3);
    for (let i = 0; i < ringN; i++) {
      const a = (i / ringN) * Math.PI * 2;
      const r = 3.8 + (Math.random() - 0.5) * 0.6;
      ringPos[i * 3]     = Math.cos(a) * r;
      ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      ringPos[i * 3 + 2] = Math.sin(a) * r;
    }
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
    const ringMat = new THREE.PointsMaterial({
      color: 0x22c55e,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Points(ringGeo, ringMat);
    scene.add(ring);

    // ── Scattered ambient particles ──
    const ambN = mobile() ? 60 : 150;
    const ambGeo = new THREE.BufferGeometry();
    const ambPos = new Float32Array(ambN * 3);
    for (let i = 0; i < ambN; i++) {
      ambPos[i * 3]     = (Math.random() - 0.5) * 20;
      ambPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      ambPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    ambGeo.setAttribute('position', new THREE.BufferAttribute(ambPos, 3));
    const ambMat = new THREE.PointsMaterial({
      color: 0x22c55e,
      size: 0.05,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const amb = new THREE.Points(ambGeo, ambMat);
    scene.add(amb);

    // ── Interaction ──
    let scrollY = 0, mx = 0, my = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse = (e) => { mx = (e.clientX / w - 0.5) * 2; my = (e.clientY / h - 0.5) * 2; };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!mobile()) window.addEventListener('mousemove', onMouse);

    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();

      // Scroll-driven rotation
      const scrollAngle = scrollY * 0.001;
      outer.rotation.x = t * 0.08 + scrollAngle * 0.5;
      outer.rotation.y = t * 0.12 + scrollAngle;
      inner.rotation.x = -t * 0.1 - scrollAngle * 0.3;
      inner.rotation.y = -t * 0.08;
      ring.rotation.y = t * 0.04 + scrollAngle * 0.2;
      ring.rotation.x = Math.sin(t * 0.2) * 0.15;

      // Proximity scale
      const rect = mount.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vpCenter = window.innerHeight / 2;
      const dist = Math.abs(center - vpCenter) / (window.innerHeight * 0.7);
      const prox = Math.max(0, 1 - dist);
      const sc = 0.5 + prox * 0.5;
      outer.scale.setScalar(sc);
      inner.scale.setScalar(sc);

      // Pulsing core
      const pulse = 1 + Math.sin(t * 2) * 0.15;
      core.scale.setScalar(pulse);
      coreMat.opacity = 0.2 + Math.sin(t * 1.5) * 0.1;

      // Pulsing wireframe
      outerMat.opacity = 0.15 + prox * 0.15 + Math.sin(t) * 0.05;

      // Mouse tilt
      camera.position.x += (mx * 1.8 - camera.position.x) * 0.025;
      camera.position.y += (-my * 1.2 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      w = mount.clientWidth;
      h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      if (!mobile()) window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      [outerGeo, outerMat, innerGeo, innerMat, coreGeo, coreMat, ringGeo, ringMat, ambGeo, ambMat].forEach(d => d.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="three-layer three-geo-layer" />;
}

// ─── DNA Helix ──────────────────────────────────────────────────────────────────
// Double helix particle strands that rotate on scroll. Used behind Benefits.

export function DNAHelix({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile() });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Build two helix strands + connecting bars
    const strandCount = mobile() ? 80 : 160;
    const helixGroup = new THREE.Group();
    scene.add(helixGroup);

    const createStrand = (offset) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(strandCount * 3);
      for (let i = 0; i < strandCount; i++) {
        const t = (i / strandCount) * Math.PI * 6;
        const y = (i / strandCount - 0.5) * 22;
        pos[i * 3]     = Math.cos(t + offset) * 2.5;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = Math.sin(t + offset) * 2.5;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: 0x22c55e,
        size: mobile() ? 0.16 : 0.1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      return new THREE.Points(geo, mat);
    };

    const strand1 = createStrand(0);
    const strand2 = createStrand(Math.PI);
    helixGroup.add(strand1, strand2);

    // Connecting bars between strands
    const barCount = mobile() ? 15 : 30;
    const barGeo = new THREE.BufferGeometry();
    const barPos = new Float32Array(barCount * 6); // 2 points per bar
    for (let i = 0; i < barCount; i++) {
      const t = (i / barCount) * Math.PI * 6;
      const y = (i / barCount - 0.5) * 22;
      barPos[i * 6]     = Math.cos(t) * 2.5;
      barPos[i * 6 + 1] = y;
      barPos[i * 6 + 2] = Math.sin(t) * 2.5;
      barPos[i * 6 + 3] = Math.cos(t + Math.PI) * 2.5;
      barPos[i * 6 + 4] = y;
      barPos[i * 6 + 5] = Math.sin(t + Math.PI) * 2.5;
    }
    barGeo.setAttribute('position', new THREE.BufferAttribute(barPos, 3));
    const barMat = new THREE.LineBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.12,
    });
    const bars = new THREE.LineSegments(barGeo, barMat);
    helixGroup.add(bars);

    let scrollY = 0, mx = 0, my = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse = (e) => { mx = (e.clientX / w - 0.5) * 2; my = (e.clientY / h - 0.5) * 2; };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!mobile()) window.addEventListener('mousemove', onMouse);

    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();

      helixGroup.rotation.y = t * 0.15 + scrollY * 0.0003;
      helixGroup.rotation.x = Math.sin(t * 0.1) * 0.1;

      // Rebuild strand positions to animate wave
      [strand1, strand2].forEach((strand, si) => {
        const p = strand.geometry.attributes.position.array;
        const off = si * Math.PI;
        for (let i = 0; i < strandCount; i++) {
          const tt = (i / strandCount) * Math.PI * 6 + t * 0.3;
          const y = (i / strandCount - 0.5) * 22;
          p[i * 3]     = Math.cos(tt + off) * (2.5 + Math.sin(t * 0.5 + i * 0.1) * 0.3);
          p[i * 3 + 1] = y;
          p[i * 3 + 2] = Math.sin(tt + off) * (2.5 + Math.sin(t * 0.5 + i * 0.1) * 0.3);
        }
        strand.geometry.attributes.position.needsUpdate = true;
      });

      camera.position.x += (mx * 2 - camera.position.x) * 0.02;
      camera.position.y += (-my * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      w = mount.clientWidth; h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      if (!mobile()) window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      scene.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) obj.material.dispose(); });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`three-layer ${className}`} />;
}

// ─── Wave Terrain ───────────────────────────────────────────────────────────────
// Animated wireframe plane that undulates like ocean waves. Used behind Reviews.

export function WaveTerrain({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile() });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const seg = mobile() ? 40 : 80;
    const planeGeo = new THREE.PlaneGeometry(28, 28, seg, seg);
    planeGeo.rotateX(-Math.PI * 0.5);

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    scene.add(plane);

    // Second layer for depth
    const plane2Geo = new THREE.PlaneGeometry(28, 28, Math.floor(seg / 2), Math.floor(seg / 2));
    plane2Geo.rotateX(-Math.PI * 0.5);
    const plane2Mat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const plane2 = new THREE.Mesh(plane2Geo, plane2Mat);
    plane2.position.y = -1.5;
    scene.add(plane2);

    // Floating particles above the waves
    const partN = mobile() ? 40 : 100;
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(partN * 3);
    const partVel = new Float32Array(partN);
    for (let i = 0; i < partN; i++) {
      partPos[i * 3]     = (Math.random() - 0.5) * 24;
      partPos[i * 3 + 1] = Math.random() * 4 + 1;
      partPos[i * 3 + 2] = (Math.random() - 0.5) * 24;
      partVel[i] = 0.002 + Math.random() * 0.004;
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x4ade80,
      size: 0.08,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    let scrollY = 0, mx = 0, my = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse = (e) => { mx = (e.clientX / w - 0.5) * 2; my = (e.clientY / h - 0.5) * 2; };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!mobile()) window.addEventListener('mousemove', onMouse);

    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();

      // Animate wave vertices
      const p = planeGeo.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        const x = p[i];
        const z = p[i + 2];
        p[i + 1] = Math.sin(x * 0.4 + t * 0.8) * 0.8
                  + Math.sin(z * 0.3 + t * 0.6) * 0.6
                  + Math.sin((x + z) * 0.2 + t * 1.2) * 0.4;
      }
      planeGeo.attributes.position.needsUpdate = true;

      // Second plane, offset wave
      const p2 = plane2Geo.attributes.position.array;
      for (let i = 0; i < p2.length; i += 3) {
        const x = p2[i];
        const z = p2[i + 2];
        p2[i + 1] = Math.sin(x * 0.3 + t * 0.5 + 1) * 0.6
                   + Math.cos(z * 0.4 + t * 0.7) * 0.5;
      }
      plane2Geo.attributes.position.needsUpdate = true;

      // Float particles upward
      const pp = partGeo.attributes.position.array;
      for (let i = 0; i < partN; i++) {
        pp[i * 3 + 1] += partVel[i];
        if (pp[i * 3 + 1] > 6) {
          pp[i * 3 + 1] = 0.5;
          pp[i * 3] = (Math.random() - 0.5) * 24;
          pp[i * 3 + 2] = (Math.random() - 0.5) * 24;
        }
      }
      partGeo.attributes.position.needsUpdate = true;

      plane.rotation.y = scrollY * 0.00008;
      plane2.rotation.y = -scrollY * 0.00005;

      camera.position.x += (mx * 2 - camera.position.x) * 0.015;
      camera.position.z = 12 + my * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      w = mount.clientWidth; h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      if (!mobile()) window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      scene.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) obj.material.dispose(); });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`three-layer ${className}`} />;
}

// ─── Energy Ring ────────────────────────────────────────────────────────────────
// Pulsing torus knot with orbiting particles. Used behind Booking form.

export function EnergyRing({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile() });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Torus knot wireframe
    const torusGeo = new THREE.TorusKnotGeometry(2.2, 0.6, mobile() ? 60 : 120, 12, 2, 3);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // Second smaller torus
    const torus2Geo = new THREE.TorusKnotGeometry(1.4, 0.35, mobile() ? 40 : 80, 8, 3, 5);
    const torus2Mat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    scene.add(torus2);

    // Orbiting energy particles
    const orbN = mobile() ? 150 : 400;
    const orbGeo = new THREE.BufferGeometry();
    const orbPos = new Float32Array(orbN * 3);
    const orbData = [];
    for (let i = 0; i < orbN; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 2;
      const speed = 0.2 + Math.random() * 0.5;
      const yOff = (Math.random() - 0.5) * 3;
      orbData.push({ angle, radius, speed, yOff });
      orbPos[i * 3]     = Math.cos(angle) * radius;
      orbPos[i * 3 + 1] = yOff;
      orbPos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    orbGeo.setAttribute('position', new THREE.BufferAttribute(orbPos, 3));
    const orbMat = new THREE.PointsMaterial({
      color: 0x22c55e,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const orb = new THREE.Points(orbGeo, orbMat);
    scene.add(orb);

    let scrollY = 0, mx = 0, my = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse = (e) => { mx = (e.clientX / w - 0.5) * 2; my = (e.clientY / h - 0.5) * 2; };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!mobile()) window.addEventListener('mousemove', onMouse);

    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      const scroll = scrollY * 0.0005;

      torus.rotation.x = t * 0.12 + scroll;
      torus.rotation.y = t * 0.08;
      torus.rotation.z = t * 0.05;
      const pulse = 1 + Math.sin(t * 1.5) * 0.08;
      torus.scale.setScalar(pulse);
      torusMat.opacity = 0.08 + Math.sin(t * 0.8) * 0.04;

      torus2.rotation.x = -t * 0.1;
      torus2.rotation.y = t * 0.15 + scroll * 0.5;
      torus2.rotation.z = -t * 0.07;

      // Orbit particles
      const p = orbGeo.attributes.position.array;
      for (let i = 0; i < orbN; i++) {
        const d = orbData[i];
        d.angle += d.speed * 0.008;
        p[i * 3]     = Math.cos(d.angle) * d.radius;
        p[i * 3 + 1] = d.yOff + Math.sin(t * 0.5 + d.angle) * 0.5;
        p[i * 3 + 2] = Math.sin(d.angle) * d.radius;
      }
      orbGeo.attributes.position.needsUpdate = true;

      camera.position.x += (mx * 2.5 - camera.position.x) * 0.02;
      camera.position.y += (-my * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      w = mount.clientWidth; h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      if (!mobile()) window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      scene.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) obj.material.dispose(); });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`three-layer ${className}`} />;
}

// ─── Meteor Trails ──────────────────────────────────────────────────────────────
// Shooting particle streaks flying across the scene. Used behind Gallery.

export function MeteorTrails({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let w = mount.clientWidth;
    let h = mount.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !mobile() });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create meteor trails as line segments
    const meteorCount = mobile() ? 8 : 18;
    const tailLength = 20;
    const meteors = [];

    for (let m = 0; m < meteorCount; m++) {
      const positions = new Float32Array(tailLength * 3);
      const startX = (Math.random() - 0.5) * 40;
      const startY = Math.random() * 20 + 10;
      const startZ = (Math.random() - 0.5) * 15;
      const speed = 0.08 + Math.random() * 0.12;
      const angle = -Math.PI * 0.25 + (Math.random() - 0.5) * 0.3;

      for (let i = 0; i < tailLength; i++) {
        positions[i * 3]     = startX;
        positions[i * 3 + 1] = startY;
        positions[i * 3 + 2] = startZ;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.LineBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.2 + Math.random() * 0.2,
      });
      const line = new THREE.Line(geo, mat);
      scene.add(line);

      meteors.push({
        line, geo, mat,
        headX: startX, headY: startY, headZ: startZ,
        speed, angle,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed * 1.5,
      });
    }

    // Ambient dust
    const dustN = mobile() ? 60 : 200;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustN * 3);
    for (let i = 0; i < dustN; i++) {
      dustPos[i * 3]     = (Math.random() - 0.5) * 50;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x22c55e,
      size: 0.04,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });

    const clock = new THREE.Clock();
    let raf;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();

      for (const m of meteors) {
        // Move head
        m.headX += m.vx;
        m.headY += m.vy;

        // Reset when off screen
        if (m.headY < -20 || m.headX > 30 || m.headX < -30) {
          m.headX = (Math.random() - 0.5) * 40;
          m.headY = Math.random() * 15 + 12;
          m.headZ = (Math.random() - 0.5) * 15;
          // Reset all tail positions
          const p = m.geo.attributes.position.array;
          for (let i = 0; i < tailLength; i++) {
            p[i * 3] = m.headX;
            p[i * 3 + 1] = m.headY;
            p[i * 3 + 2] = m.headZ;
          }
        }

        // Shift trail positions down
        const p = m.geo.attributes.position.array;
        for (let i = tailLength - 1; i > 0; i--) {
          p[i * 3]     = p[(i - 1) * 3];
          p[i * 3 + 1] = p[(i - 1) * 3 + 1];
          p[i * 3 + 2] = p[(i - 1) * 3 + 2];
        }
        // Set head
        p[0] = m.headX;
        p[1] = m.headY;
        p[2] = m.headZ;
        m.geo.attributes.position.needsUpdate = true;
      }

      dust.rotation.y = t * 0.01 + scrollY * 0.00005;

      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      w = mount.clientWidth; h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      scene.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) obj.material.dispose(); });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`three-layer ${className}`} />;
}
