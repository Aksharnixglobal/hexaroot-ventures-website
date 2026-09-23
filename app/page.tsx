import Image from 'next/image'
import './globals.css'

const partners = [
  ['PP', 'Pratik Patel', 'Founder & CEO'],
  ['NP', 'Nilpesh Patel', 'Co-Founder'],
  ['JC', 'Jugal Chokshi', 'Co-Founder'],
  ['KP', 'Krunal Patel', 'Strategic Partner & Investor'],
  ['AS', 'Alpit Shah', 'Strategic Partner & Investor'],
]

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a href="#home" className="brand" aria-label="HexaRoot Ventures home">
            <Image className="brand-logo" src="/hexaroot-logo.webp?v=2" alt="HexaRoot Ventures" width={170} height={58} priority />
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#project">Featured Project</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Let's Talk ↗</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">HEXA<span>ROOT</span> VENTURES • TEXAS</p>
            <h1>Invest.<br /><em>Build.</em><br />Scale.</h1>
            <p className="hero-lead">
              Creating enduring value through thoughtfully selected properties,
              development opportunities, and ventures built for the long term.
            </p>
            <div className="hero-actions">
              <a className="button gold" href="#project">Explore Our Development ↗</a>
              <a className="button ghost" href="#portfolio">View Portfolio ↓</a>
            </div>
          </div>

          <div className="hero-card">
            <Image className="hero-logo" src="/hexaroot-logo.webp?v=2" alt="HexaRoot Ventures" width={390} height={390} priority />
            <p>ROOTED IN OPPORTUNITY</p>
            <strong>Built for tomorrow.</strong>
          </div>
        </div>
        <div className="hero-meta"><span>DFW / NORTH TEXAS</span><span>REAL ESTATE • DEVELOPMENT • VENTURES</span></div>
      </section>

      <section id="about" className="statement">
        <div className="wrap two">
          <div>
            <p className="eyebrow dark">OUR PHILOSOPHY</p>
            <h2>Rooted in opportunity.<br /><em>Built for tomorrow.</em></h2>
          </div>
          <div className="statement-text">
            <p>HexaRoot Ventures is a Texas-based venture company focused on identifying opportunities, developing assets, and building businesses with a long-term perspective.</p>
            <p>We believe the strongest ventures begin with a strong foundation — the right land, the right partners, the right strategy, and disciplined execution.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="wrap">
          <div className="section-title">
            <div><p className="eyebrow dark">OUR PORTFOLIO</p><h2>Building across<br /><em>multiple opportunities.</em></h2></div>
            <p>Our platform is designed to grow thoughtfully, with each venture developed according to its opportunity, timing, and long-term potential.</p>
          </div>
          <div className="cards">
            <article className="card sports"><div><small>01 / CURRENTLY BUILDING</small><h3>Sports & Cricket<br />Infrastructure</h3><p>Our flagship North Texas development centered on cricket, recreation, community, and future growth.</p><a href="#project">Discover Project ↗</a></div></article>
            <article className="card real"><div><small>02 / GROWING</small><h3>Real Estate &<br />Land Development</h3><p>Property acquisition, development, and long-term asset strategy.</p><b>EXPANDING</b></div></article>
            <article className="card hospitality"><div><small>03 / FUTURE OPPORTUNITY</small><h3>Food &<br />Hospitality</h3><p>Future ventures centered on quality experiences and sustainable operations.</p><b>COMING SOON</b></div></article>
          </div>
        </div>
      </section>

      <section id="project" className="featured">
        <div className="wrap">
          <div className="feature-head"><p className="eyebrow">FEATURED DEVELOPMENT</p><span>01 — NORTH TEXAS</span></div>
          <div className="feature-grid">
            <div className="master">
              <div className="master-art"><span>HEXA</span><b>ROOT</b><i>SPORTS DEVELOPMENT</i></div>
            </div>
            <div className="feature-copy">
              <small>23+ ACRES • NORTH TEXAS</small>
              <h2>A place where<br /><em>opportunity takes shape.</em></h2>
              <p>HexaRoot Ventures is developing a sports infrastructure project centered around cricket, recreation, community, and future growth opportunities.</p>
              <div className="stats">
                <div><strong>23+</strong><span>ACRES</span></div>
                <div><strong>04</strong><span>PLANNED CRICKET GROUNDS</span></div>
                <div><strong>TX</strong><span>NORTH TEXAS</span></div>
              </div>
              <p className="note">Site plans, development phases, renderings, and project updates will be introduced as the development progresses.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="leadership">
        <div className="wrap">
          <div className="lead-hero">
            <div>
              <p className="eyebrow">OUR TEAM</p>
              <h2>Building Together<br /><em>for a Bigger Tomorrow.</em></h2>
              <p>A team of experienced professionals united by a common vision — to create lasting value through strategic investments, community development, and world-class sports infrastructure.</p>
            </div>
            <div className="lead-pillars"><span>PEOPLE</span><span>PARTNERSHIP</span><span>PROGRESS</span></div>
          </div>
          <div className="leaders">
            {partners.map(([initials, name, role]) => (
              <article className="leader-card" key={name}>
                <div className="leader-avatar">{name === 'Pratik Patel' ? <img src="/pratik-patel.webp" alt="Pratik Patel" /> : <i>{initials}</i>}</div>
                <h3>{name}</h3><p className="leader-role">{role}</p>
                <span className="leader-line"></span>
                <p className="leader-desc">{name === 'Pratik Patel' ? 'Driven by a passion for community, sports, and long-term value creation.' : name === 'Nilpesh Patel' ? 'Bringing operational excellence and strategic growth to every opportunity.' : name === 'Jugal Chokshi' ? 'Focused on project execution, partnerships, and community impact.' : name === 'Krunal Patel' ? 'Bringing strategic insight and investment expertise to fuel sustainable growth.' : 'Committed to long-term value and building strong future opportunities.'}</p>
                <small>{name === 'Pratik Patel' ? 'LEAD · BUILD · SCALE' : name === 'Nilpesh Patel' ? 'OPERATE · OPTIMIZE · GROW' : name === 'Jugal Chokshi' ? 'EXECUTE · COLLABORATE · DELIVER' : name === 'Krunal Patel' ? 'STRATEGIZE · INVEST · EXPAND' : 'INVEST · INNOVATE · CREATE IMPACT'}</small>
              </article>
            ))}
            <article className="leader-strength">
              <p className="eyebrow">OUR STRENGTH</p>
              <h3>Different<br /><em>Expertise.</em><br />A Shared Vision.</h3>
              <div><span>PEOPLE</span><span>PURPOSE</span><span>PROGRESS</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contact-grid">
          <div><p className="eyebrow dark">LET'S TALK</p><h2>Let's build<br /><em>what's next.</em></h2></div>
          <div>
            <p>For partnerships, development conversations, investment opportunities, or general inquiries, connect with HexaRoot Ventures.</p>
            <a className="email" href="mailto:contact@hexarootventures.com">contact@hexarootventures.com ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <a href="#home" className="footer-brand"><Image className="footer-logo" src="/hexaroot-logo.webp?v=2" alt="HexaRoot Ventures" width={130} height={60} /></a>
          <span>Invest. Build. Scale.</span>
          <span>© {new Date().getFullYear()} HexaRoot Ventures</span>
        </div>
      </footer>
    </main>
  )
}
