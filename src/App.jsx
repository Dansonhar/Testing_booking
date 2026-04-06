import { useState, useEffect, useRef } from 'react';

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Scroll-reveal hook ────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Static data ───────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Trial', href: '#booking' },
  { label: 'Reviews', href: '#reviews' },
];

const BENEFITS = [
  {
    icon: '🏋️',
    title: 'Personal Coaching',
    desc: 'Every session is led by a certified trainer who designs a plan specifically for your body, goals, and fitness level.',
  },
  {
    icon: '⚡',
    title: 'Fast Results System',
    desc: 'Our science-backed training methodology is engineered to deliver visible progress within your very first 30 days.',
  },
  {
    icon: '🛡️',
    title: 'Beginner Friendly',
    desc: 'Zero experience needed. Our environment is welcoming and judgment-free — built for people who are just getting started.',
  },
  {
    icon: '🔬',
    title: 'Premium Equipment',
    desc: 'Train on commercial-grade machines, free weights, and recovery tools found in the world\'s most elite facilities.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'We measure body composition, strength, and endurance every step of the way so you can see every gain clearly.',
  },
];

const GALLERY = [
  { id: '1534438327276-14e5300c3a48', label: 'Training Floor', wide: true },
  { id: '1571019613454-1cb2f99b2d8b', label: 'Personal Training', wide: false },
  { id: '1526506118085-60ce8714f8c5', label: 'Cardio Zone', wide: false },
  { id: '1548690312-e3b507d8c110', label: 'Weight Room', wide: false },
  { id: '1574680096145-d05b474e2155', label: 'Group Sessions', wide: false },
  { id: '1583454110551-21f2fa2afe61', label: 'Recovery Area', wide: false },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    age: 28,
    goal: 'Weight Loss',
    text: 'I lost 8kg in my first 2 months. The trainers here are incredible — they pushed me just the right amount and the environment felt safe and supportive from day one.',
    stars: 5,
    avatar: 'SM',
  },
  {
    name: 'Daniel K.',
    age: 34,
    goal: 'Muscle Building',
    text: 'I\'ve trained at 4 different gyms. Nothing comes close to this place. The equipment is elite, the trainers are genuinely knowledgeable, and I\'ve made more progress here in 3 months than in 2 years elsewhere.',
    stars: 5,
    avatar: 'DK',
  },
  {
    name: 'Priya L.',
    age: 24,
    goal: 'General Fitness',
    text: 'As someone who was completely terrified of walking into a gym for the first time — this place changed everything for me. Everyone is so welcoming and I genuinely feel like I belong here.',
    stars: 5,
    avatar: 'PL',
  },
  {
    name: 'Marcus T.',
    age: 41,
    goal: 'Weight Loss',
    text: 'The free trial was all it took. Within 30 minutes I knew this was where I wanted to train. Six months later, I\'m down 15kg and I actually love working out now.',
    stars: 5,
    avatar: 'MT',
  },
];

const FITNESS_GOALS = [
  { value: '', label: 'Select your fitness goal' },
  { value: 'weight-loss', label: 'Lose Weight & Burn Fat' },
  { value: 'muscle', label: 'Build Muscle & Strength' },
  { value: 'general', label: 'General Fitness & Health' },
  { value: 'endurance', label: 'Improve Endurance & Stamina' },
  { value: 'flexibility', label: 'Flexibility & Mobility' },
];

const TIME_SLOTS = [
  { value: '', label: 'Select preferred time' },
  { value: '6am-8am', label: '6:00 AM – 8:00 AM' },
  { value: '8am-10am', label: '8:00 AM – 10:00 AM' },
  { value: '10am-12pm', label: '10:00 AM – 12:00 PM' },
  { value: '12pm-2pm', label: '12:00 PM – 2:00 PM' },
  { value: '4pm-6pm', label: '4:00 PM – 6:00 PM' },
  { value: '6pm-8pm', label: '6:00 PM – 8:00 PM' },
];

const INITIAL_FORM = { name: '', phone: '', email: '', date: '', time: '', goal: '' };

// ─── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ scrolled, menuOpen, setMenuOpen }) {
  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">Q</span>
          <span className="brand-name">QFit <strong>Studio</strong></span>
        </a>

        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav__right">
          <a href="#booking" className="btn btn--accent btn--sm nav__cta">Book Free Trial</a>
          <button
            className="nav__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav__drawer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__drawer-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#booking" className="btn btn--accent btn--drawer" onClick={() => setMenuOpen(false)}>
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Premium gym training floor"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge">🔥 Limited free trial slots available this week</div>
        <h1 className="hero__headline">
          Start Your<br />
          <span className="text-accent">Fitness</span>{' '}
          Transformation<br />Today
        </h1>
        <p className="hero__sub">
          Book a <strong>FREE trial session</strong> and experience our premium training environment — zero commitment, zero cost, zero excuses.
        </p>
        <div className="hero__ctas">
          <a href="#booking" className="btn btn--accent btn--lg">
            Book Free Trial Now <IconArrow />
          </a>
          <a href="#benefits" className="btn btn--ghost btn--lg">
            See Why We're Different
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>1,200+</strong>
            <span>Active Members</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <strong>98%</strong>
            <span>Satisfaction Rate</span>
          </div>
          <div className="hero__divider" />
          <div className="hero__stat">
            <strong>8+</strong>
            <span>Years Running</span>
          </div>
        </div>
      </div>

      <a href="#benefits" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-chevron" />
      </a>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────────

function Benefits() {
  const [headRef, headVisible] = useReveal();
  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' visible' : ''}`}>
          <span className="eyebrow">Why QFit Studio</span>
          <h2>Everything you need to transform. Nothing you don't.</h2>
          <p>We built QFit around one belief: every person deserves a world-class training experience from day one.</p>
        </div>
        <div className="benefits__grid">
          {BENEFITS.map((item, i) => (
            <BenefitCard key={item.title} item={item} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ item, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`benefit-card reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="benefit-card__icon">{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

// ─── Gallery ───────────────────────────────────────────────────────────────────

function Gallery() {
  const [headRef, headVisible] = useReveal();
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' visible' : ''}`}>
          <span className="eyebrow">The Experience</span>
          <h2>A space built for serious results.</h2>
          <p>State-of-the-art facilities designed to inspire every single session.</p>
        </div>
        <div className="gallery__grid">
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ item, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`gallery__item reveal${visible ? ' visible' : ''}${item.wide ? ' gallery__item--wide' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <img
        src={`https://images.unsplash.com/photo-${item.id}?auto=format&fit=crop&w=900&q=80`}
        alt={item.label}
        loading="lazy"
      />
      <div className="gallery__caption">{item.label}</div>
    </div>
  );
}

// ─── Booking Form ─────────────────────────────────────────────────────────────

function BookingForm() {
  const [copyRef, copyVisible] = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => { const next = { ...prev }; delete next[key]; return next; });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'WhatsApp number is required.';
    if (!form.date) e.date = 'Please choose a preferred date.';
    if (!form.time) e.time = 'Please choose a preferred time.';
    if (!form.goal) e.goal = 'Please select your fitness goal.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1400);
  };

  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  })();

  if (status === 'success') {
    return (
      <section className="booking section" id="booking">
        <div className="container">
          <div className="booking__success">
            <div className="booking__success-icon">✅</div>
            <h2>You're Booked In!</h2>
            <p>
              Your free trial has been reserved for <strong>{form.name}</strong>. We'll reach out on{' '}
              <strong>{form.phone}</strong> via WhatsApp to confirm your session details.
            </p>
            <div className="booking__success-meta">
              <span>📅 {form.date}</span>
              <span>⏰ {TIME_SLOTS.find(s => s.value === form.time)?.label || form.time}</span>
            </div>
            <button
              className="btn btn--accent btn--lg"
              onClick={() => { setForm(INITIAL_FORM); setStatus(null); }}
            >
              Book Another Session
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking section" id="booking">
      <div className="container">
        <div className="booking__wrap">
          {/* Left copy */}
          <div ref={copyRef} className={`booking__copy reveal${copyVisible ? ' visible' : ''}`}>
            <span className="eyebrow">Free Trial Booking</span>
            <h2>Claim your free session today.</h2>
            <p>
              Experience our premium training environment with zero cost and zero obligation. Our trainers will personally
              walk you through the facility and design a workout just for you.
            </p>
            <ul className="booking__perks">
              {[
                '60-minute fully guided session',
                'Personalised fitness assessment',
                'No credit card required',
                'Cancel anytime before your session',
              ].map((perk) => (
                <li key={perk}>
                  <span className="perk-icon"><IconCheck /></span>
                  {perk}
                </li>
              ))}
            </ul>
            <div className="booking__urgency">
              <span className="urgency-dot" />
              <span><strong>Only 3 slots left today</strong> — slots fill fast on weekdays.</span>
            </div>
          </div>

          {/* Right form card */}
          <div className="booking__card">
            <div className="booking__card-head">
              <span className="eyebrow">Quick &amp; Easy — 60 Seconds</span>
              <h3>Reserve Your Free Trial</h3>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="f-name">Full Name <span className="req">*</span></label>
                <input
                  id="f-name" type="text" placeholder="Your full name"
                  value={form.name} onChange={set('name')}
                  className={errors.name ? 'input--err' : ''}
                  disabled={status === 'submitting'}
                />
                {errors.name && <span className="field__err">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="f-phone">WhatsApp Number <span className="req">*</span></label>
                <input
                  id="f-phone" type="tel" placeholder="+60 12 345 6789"
                  value={form.phone} onChange={set('phone')}
                  className={errors.phone ? 'input--err' : ''}
                  disabled={status === 'submitting'}
                />
                {errors.phone && <span className="field__err">{errors.phone}</span>}
              </div>

              <div className="field">
                <label htmlFor="f-email">Email Address <span className="opt">(optional)</span></label>
                <input
                  id="f-email" type="email" placeholder="you@email.com"
                  value={form.email} onChange={set('email')}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="f-date">Preferred Date <span className="req">*</span></label>
                  <input
                    id="f-date" type="date" min={minDate}
                    value={form.date} onChange={set('date')}
                    className={errors.date ? 'input--err' : ''}
                    disabled={status === 'submitting'}
                  />
                  {errors.date && <span className="field__err">{errors.date}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-time">Preferred Time <span className="req">*</span></label>
                  <select
                    id="f-time"
                    value={form.time} onChange={set('time')}
                    className={errors.time ? 'input--err' : ''}
                    disabled={status === 'submitting'}
                  >
                    {TIME_SLOTS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.time && <span className="field__err">{errors.time}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-goal">Fitness Goal <span className="req">*</span></label>
                <select
                  id="f-goal"
                  value={form.goal} onChange={set('goal')}
                  className={errors.goal ? 'input--err' : ''}
                  disabled={status === 'submitting'}
                >
                  {FITNESS_GOALS.map((g) => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
                {errors.goal && <span className="field__err">{errors.goal}</span>}
              </div>

              <button
                type="submit"
                className="btn btn--accent btn--lg btn--full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="btn__spinner">Reserving your spot…</span>
                ) : (
                  <>Claim Free Trial <IconArrow /></>
                )}
              </button>

              <p className="form__note">
                🔒 Limited slots available daily. We will contact you via WhatsApp to confirm your session. No payment required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

function Testimonials() {
  const [headRef, headVisible] = useReveal();
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' visible' : ''}`}>
          <span className="eyebrow">Real Results</span>
          <h2>People who started exactly where you are now.</h2>
          <p>Beginners, busy professionals, and comeback athletes — all transformed at QFit Studio.</p>
        </div>
        <div className="reviews__grid">
          {TESTIMONIALS.map((item, i) => (
            <ReviewCard key={item.name} item={item} delay={i * 80} />
          ))}
        </div>
        <div className="reviews__trust">
          <span className="trust-stars">★★★★★</span>
          <span><strong>4.9 / 5</strong> based on <strong>400+ reviews</strong> on Google &amp; Facebook</span>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ item, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`review-card reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="review-card__stars">
        {Array.from({ length: item.stars }).map((_, i) => (
          <span key={i} className="star-icon"><IconStar /></span>
        ))}
      </div>
      <p className="review-card__text">"{item.text}"</p>
      <div className="review-card__author">
        <div className="review-card__avatar">{item.avatar}</div>
        <div>
          <strong>{item.name}</strong>
          <span>{item.goal} · Age {item.age}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────

function FinalCTA() {
  const [ref, visible] = useReveal();
  return (
    <section className="final-cta">
      <div className="container">
        <div ref={ref} className={`final-cta__inner reveal${visible ? ' visible' : ''}`}>
          <span className="eyebrow">Start Now — It's Free</span>
          <h2>Your first step starts today.</h2>
          <p>
            Every transformation starts with a single decision. Book your free trial and let our team show you exactly what's possible.
          </p>
          <a href="#booking" className="btn btn--accent btn--xl">
            Book Free Trial <IconArrow />
          </a>
          <p className="final-cta__note">No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; 100% Free</p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="nav__brand">
          <span className="brand-mark">Q</span>
          <span className="brand-name">QFit <strong>Studio</strong></span>
        </div>
        <p>© {new Date().getFullYear()} QFit Studio. All rights reserved.</p>
        <p className="footer__note">Results may vary. Free trial is available for new members only.</p>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="site">
      <Nav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Benefits />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
