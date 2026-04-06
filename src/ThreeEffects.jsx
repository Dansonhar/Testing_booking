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
