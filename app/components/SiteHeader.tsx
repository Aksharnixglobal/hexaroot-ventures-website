import Image from 'next/image'

export default function SiteHeader(){
  return <header className="site-header">
    <div className="nav-shell">
      <a href="/" className="brand" aria-label="HexaRoot Ventures home">
        <Image className="brand-logo" src="/hexaroot-logo.webp?v=3" alt="HexaRoot Ventures" width={170} height={58} priority />
        <span className="mobile-brand-name">HexaRoot Ventures</span>
      </a>
      <nav className="desktop-nav">
        <a href="/about">About</a><a href="/ventures">Ventures</a><a href="/projects/hexafield">Projects</a><a href="/leadership">Leadership</a><a href="/insights">Insights</a>
      </nav>
      <a className="nav-cta desktop-cta" href="/contact">Let's Talk ↗</a>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
        <nav>
          <a href="/about">About</a><a href="/ventures">Ventures</a><a href="/projects/hexafield">Projects</a><a href="/leadership">Leadership</a><a href="/insights">Insights</a><a className="mobile-menu-cta" href="/contact">Let's Talk ↗</a>
        </nav>
      </details>
    </div>
  </header>
}