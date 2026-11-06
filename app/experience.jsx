'use client';

import { useEffect, useState } from 'react';
import Brand, { BrandFull, BrandSymbol } from './brand';
const services = [['01', 'Transaction coordination', 'A clear path from contract to close.', 'Executed agreement intake, transaction milestones, deadline monitoring and administrative follow-up.'], ['02', 'Documents & data', 'Every detail, in its place.', 'Organize property information, contacts, purchase agreements, addenda, signatures and supporting records.'], ['03', 'Property research', 'Better organized information.', 'Collect publicly available parcel, ownership, deed and tax records to support your transaction review.'], ['04', 'County recording support', 'Keep the paperwork moving.', 'Coordinate eligible county submissions and recording confirmations, subject to local requirements.'], ['05', 'Title & closing coordination', 'Connect the people behind the close.', 'Communicate with your title company, escrow officer, attorney and other transaction participants.'], ['06', 'Disposition closing support', 'Support for the final stretch.', 'Coordinate authorized transaction documents, due diligence items and closing requirements for investor transactions.']];
const faqs = [['Who is this service for?', 'Real estate investors, transaction teams and other authorized transaction participants who need administrative support after an agreement is executed. We confirm the permitted scope before accepting a file.'], ['Do you work nationwide?', 'We accept enquiries for transactions across the United States. Availability and the scope of work depend on applicable state law, county requirements and the professionals involved. Nationwide support is not a claim of licensure in every state.'], ['Do you find buyers or negotiate deals?', 'Our advertised disposition service is administrative closing support. Brokerage, property marketing on behalf of others, buyer or seller representation, negotiation and other activities requiring a license are outside this service unless separately performed by an appropriately licensed professional.'], ['Can you prepare affidavits or memorandums?', 'We can provide administrative processing of approved affidavits, memorandums of purchase agreement and related documents. We do not select legal instruments, determine recording rights, draft legal provisions or advise on enforceability. Required instructions and approvals must come from the client and qualified professionals.'], ['Are recording and notary fees included?', 'Service fees cover administrative support and coordination. County recording fees, notary charges and other third-party expenses are separate and may be billed separately under your written service agreement.'], ['What happens after I enquire?', 'We review the requested services, transaction location and stage. If the work is appropriate, we confirm the scope, fees, communication process and documents needed before onboarding. An enquiry does not create a service agreement.']];
export default function Experience() {
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('seen');
        obs.unobserve(e.target);
      }
    }), {
      threshold: .08
    });
    targets.forEach(x => obs.observe(x));
    return () => obs.disconnect();
  }, []);
  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setStatus('');
    try {
      const r = await fetch('/contact.php', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await r.json();
      if (!r.ok) throw Error(data.message || 'Unable to send. Please try again.');
      setStatus(data.message);
      e.target.reset();
    } catch (err) {
      setStatus(err.message === 'Failed to fetch' ? 'Unable to connect. Please try again shortly.' : err.message);
    } finally {
      setBusy(false);
    }
  }
  return <>
  <a className="skip" href="#main">Skip to content</a>
  <header>
    <a className="brand" href="/" aria-label="Legacy Estate Capital home"><Brand /></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>
      {menu ? 'Close' : 'Menu'}
      <span>☰</span>
    </button>
    <nav className={menu ? 'open' : ''} aria-label="Main navigation">
      {[['Services', '#services'], ['Our process', '#process'], ['About', '#about'], ['FAQs', '#faq']].map(([t, h]) => <a key={h} href={h} onClick={() => setMenu(false)}>{t}</a>)}
      <a className="button small" href="#contact" onClick={() => setMenu(false)}>Let’s talk <span>↗</span></a>
    </nav>
  </header>
  <main id="main">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="dot" /> NATIONWIDE REAL ESTATE SUPPORT</p>
        <h1>Your next closing.<br /><em>With clarity.</em></h1>
        <p className="intro">The details deserve a dedicated partner. Administrative transaction coordination and disposition closing support, from executed agreement to the finish line.</p>
        <div className="hero-actions">
          <a href="#contact" className="button">Discuss your transaction <span>↗</span></a>
          <a className="text-link" href="#services">Explore our services <span>↓</span></a>
        </div>
        <p className="hero-foot">Organized documents. Connected participants. Clear next steps.</p>
      </div>
      <div className="hero-art" aria-label="Architectural illustration of a home">
        <svg viewBox="0 0 640 720" preserveAspectRatio="xMidYMid slice" role="img">
          <title>Architectural home illustration</title>
          <defs>
            <linearGradient id="sky" x2="0" y2="1">
              <stop stopColor="#c4c8ae" />
              <stop offset="1" stopColor="#eee5cf" />
            </linearGradient>
            <linearGradient id="wall">
              <stop stopColor="#e0dac7" />
              <stop offset="1" stopColor="#bcb99f" />
            </linearGradient>
            <pattern id="lines" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M0 32H32" stroke="#aaa58f" strokeWidth="1" /></pattern>
          </defs>
          <path fill="url(#sky)" d="M0 0h640v720H0z" />
          <circle cx="472" cy="151" r="92" fill="#f4eedb" opacity=".6" />
          <path d="M0 570Q150 480 350 555t290-50v215H0" fill="#7b8e74" />
          <path d="M0 626Q160 582 335 620t305-35v135H0" fill="#4c6956" />
          <path d="M78 364l260-148 243 148-246 152z" fill="#26443b" />
          <path d="M105 380l230 133v167L105 548z" fill="#ccc7b3" />
          <path d="M335 513l218-125v164L335 680z" fill="url(#wall)" />
          <path d="M335 513l218-125v164L335 680z" fill="url(#lines)" />
          <path d="M98 366l240-138 229 138-30 17-199-115-210 120z" fill="#18382e" />
          <path d="M370 527l66-38v122l-66 38zM463 473l62-36v84l-62 36zM137 437l62 36v82l-62-36zM225 488l60 35v83l-60-35z" fill="#365c52" />
          <path d="M378 531l50-29v38l-50 29zM470 477l47-27v31l-47 27zM145 449l46 26v30l-46-26zM233 500l44 26v30l-44-26z" fill="#a7b8ab" />
          <path d="M335 680l218-128 55 31-221 127z" fill="#b4b7a0" />
          <path d="M405 720l105-102 130-15v117" fill="#d1ccba" />
          <path d="M47 672V485m0 50l-30-35m30 66l36-53" stroke="#4d6049" strokeWidth="7" />
          <ellipse cx="49" cy="494" rx="56" ry="78" fill="#60785a" />
          <path d="M593 620V440" stroke="#455e44" strokeWidth="8" />
          <ellipse cx="600" cy="426" rx="64" ry="107" fill="#6d8260" />
          <path d="M0 719h640" stroke="#faf5e8" />
          <path d="M70 115h90m-45-45v90M510 645h75m-37-37v74" stroke="#fff" opacity=".45" />
        </svg>
        <span className="art-caption">ILLUSTRATIVE ARCHITECTURE / LEGACY ESTATE CAPITAL</span>
      </div>
    </section>
    <div className="trust-strip">
      <span>Support across the United States*</span>
      <span>Administrative focus</span>
      <span>Defined scope & transparent fees</span>
    </div>
    <section className="section services" id="services">
      <div className="section-top reveal">
        <p className="eyebrow">THE WORK BEHIND THE CLOSE</p>
        <h2>Less chasing details.<br /><em>More moving forward.</em></h2>
        <p>Keep your transaction information, documents and participants connected with support tailored to your file.</p>
      </div>
      <div className="service-grid">{services.map(([n, t, s, d]) => <article key={n} className="service-card reveal">
          <div className="card-top">
            <span>{n}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h3>{t}</h3>
          <strong>{s}</strong>
          <p>{d}</p>
          <a href="#contact" aria-label={'Discuss ' + t}>Discuss this service <span>→</span></a>
        </article>)}</div>
      <div className="scope-note reveal">
        <span>✳</span>
        <p><strong>Clear scope. From the start.</strong> Approved affidavit and memorandum processing is administrative only. Legal advice, legal representation and activities requiring professional licensure are excluded unless performed by an appropriately licensed professional. County, notary and third-party costs are separate.</p>
      </div>
    </section>
    <section className="process section" id="process">
      <div className="process-intro reveal">
        <p className="eyebrow">A SIMPLE, CONSIDERED PROCESS</p>
        <h2>Every file.<br />A clear <em>next step.</em></h2>
        <p>We define what is needed, organize what is available and follow the administrative milestones through closing.</p>
        <a href="#contact" className="text-link light">Start the conversation <span>↗</span></a>
        <div className="process-seal" aria-hidden="true">
          <BrandSymbol />
          <span>DETAILS MATTER</span>
        </div>
      </div>
      <ol className="steps">{[['Align', 'Share your transaction location, stage and support needs. We confirm permitted services, responsibilities and fees.'], ['Organize', 'Provide your executed agreement and authorized records through the agreed document-sharing process.'], ['Coordinate', 'Track deadlines, request outstanding items and communicate with designated title, escrow and legal professionals.'], ['Close & follow through', 'Support the administrative closing requirements and organize available final documents and recording confirmations.']].map(([t, d], i) => <li className="reveal" key={t}>
          <span>0{i + 1}</span>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </li>)}</ol>
    </section>
    <section className="about section" id="about">
      <div className="about-visual reveal">
        <BrandFull />
        <p>A thoughtful approach<br />to the details that matter.</p>
      </div>
      <div className="about-copy reveal">
        <p className="eyebrow">MEET THE BUSINESS</p>
        <h2>Personal attention.<br /><em>Purposeful coordination.</em></h2>
        <p>Legacy Estate Capital is owned by Colette Louise. Our service brings administrative structure to real estate transactions so participants can see what is needed and what comes next.</p>
        <p>From public-record collection to closing follow-up, the focus is practical: organized information, clear communication and a defined scope of support.</p>
        <div className="owner">
          <span>CL</span>
          <div>
            <strong>Colette Louise</strong>
            <small>Owner · Legacy Estate Capital</small>
          </div>
        </div>
      </div>
    </section>
    <section className="coverage section">
      <p className="eyebrow reveal">LOCAL REQUIREMENTS. NATIONAL REACH.</p>
      <div className="coverage-row">
        <h2 className="reveal">Wherever your file begins,<br /><em>start with clarity.</em></h2>
        <div className="reveal">
          <p>*Nationwide enquiries are welcome. Services are subject to applicable state laws, county recording requirements and file-specific availability.</p>
          <p>We confirm the permitted scope before work begins and coordinate with the qualified professionals your transaction requires.</p>
        </div>
      </div>
    </section>
    <section className="faq section" id="faq">
      <div className="reveal">
        <p className="eyebrow">GOOD QUESTIONS. CLEAR ANSWERS.</p>
        <h2>Before we <br /><em>get started.</em></h2>
      </div>
      <div className="faq-list">{faqs.map(([q, a]) => <details key={q} className="reveal">
          <summary>
            {q}
            <span>+</span>
          </summary>
          <p>{a}</p>
        </details>)}</div>
    </section>
    <section className="contact section" id="contact">
      <div className="contact-copy reveal">
        <p className="eyebrow">LET’S MOVE YOUR FILE FORWARD</p>
        <h2>Tell us what’s next.<br /><em>We’ll talk details.</em></h2>
        <p>Share a little about your transaction and the support you need. We’ll review your enquiry and discuss whether the services fit your file.</p>
        <a className="text-link" href="mailto:colette@legacyestatecapital.com">colette@legacyestatecapital.com <span>↗</span></a>
        <div className="contact-note">
          <span>↗</span>
          <p>Please don’t send contracts, identification, banking details or sensitive documents through this form. We’ll agree on a separate sharing process if we work together.</p>
        </div>
      </div>
      <form className="lead-form reveal" onSubmit={submit} action="/contact.php" method="post">
        <div className="form-row">
          <label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
        </div>
        <div className="form-row">
          <label>Company <span>(optional)</span><input name="company" autoComplete="organization" maxLength={120} placeholder="Business name" /></label>
          <label>Transaction state<input name="state" required maxLength={50} placeholder="e.g. Texas" /></label>
        </div>
        <label>How can we help?<select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map(s => <option key={s[1]}>{s[1]}</option>)}
            <option>Multiple services / not sure yet</option>
          </select></label>
        <label>A little about your file<textarea name="message" rows={4} required maxLength={2000} placeholder="Transaction stage, timing and the administrative support you need." /></label>
        <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <label className="consent">
          <input name="consent" type="checkbox" value="yes" required />
          <span>I agree to the <a href="/privacy/">Privacy Policy</a> and request a response to this enquiry. This is not consent to marketing calls or texts.</span>
        </label>
        <button className="button" disabled={busy}>
          {busy ? 'Sending…' : 'Send enquiry'}
          <span>↗</span>
        </button>
        <p role="status" aria-live="polite" className="form-status">{status}</p>
        <small>An enquiry does not create a service agreement or guarantee availability.</small>
      </form>
    </section>
  </main>
  <footer>
    <div className="footer-top">
      <a className="brand" href="/"><Brand /></a>
      <p>The details behind<br />your next chapter.</p>
      <a className="text-link" href="#contact">Let’s talk <span>↗</span></a>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Legacy Estate Capital</span>
      <nav aria-label="Legal navigation">
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/disclaimer/">Service disclaimer</a>
      </nav>
    </div>
    <p className="fine-print">Administrative support and coordination only. Services are subject to applicable state laws. No legal advice, legal representation, brokerage, title insurance or other licensed services are promised by this website. County recording, notary and third-party expenses are separate. No closing, recording, title or investment outcome is guaranteed.</p>
  </footer>
  </>;
}
