import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Portfolio from './Components/New';
import Resume from './Components/Resume';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Megan O'Brien, home">Megan O’Brien<span className="wordmark-dot">.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
        <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {[['work', 'Selected work'], ['about', 'About'], ['experience', 'Experience'], ['contact', 'Let’s connect ↗']].map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-dot" /> CONSUMER RESEARCH & INSIGHTS</p>
            <h1 id="hero-title">Curiosity<br />into <em>clarity.</em></h1>
            <p className="hero-intro">I’m Megan. I uncover the why behind consumer behavior and turn research into stories that help brands move forward.</p>
            <p className="hero-role">Associate Director, Primary Research<br /><span>OM Intelligence · Omnicom Media · New York</span></p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="https://www.linkedin.com/in/meganscobrien/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame"><img src={process.env.PUBLIC_URL + '/obrien-megan.jpg'} alt="Megan O’Brien" width="600" height="600" fetchpriority="high" /></div>
            <div className="portrait-caption"><span>HUMAN BEHAVIOR. MEANINGFUL INSIGHTS.</span><span aria-hidden="true">01 / MO</span></div>
          </div>
        </section>
        <a className="award-strip section-wrap" href="https://thearf.org/arf-events/2026-arf-member-awards/" target="_blank" rel="noopener noreferrer">
          <span className="award-icon" aria-hidden="true">✳</span>
          <div><span className="eyebrow">RECOGNITION / 2026</span><p>ARF Young Pros of the Year</p></div>
          <span className="award-detail">Recognized for leadership and contributions to the research community.</span>
          <span className="award-arrow" aria-hidden="true">↗</span>
        </a>
        <Portfolio />
        <About />
        <Resume />
        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2 id="contact-title">Good questions.<br /><em>Better conversations.</em></h2>
          <p>Have a research question, a speaking opportunity, or an idea to exchange? I’d love to hear from you.</p>
          <a className="contact-email" href="mailto:meganscobrien@gmail.com">meganscobrien@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-links"><a href="https://www.linkedin.com/in/meganscobrien/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://x.com/meganscobrien" target="_blank" rel="noopener noreferrer">X ↗</a></div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Megan O’Brien</span><span>Research with curiosity. Stories with purpose.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
