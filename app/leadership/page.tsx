import SiteHeader from '../components/SiteHeader';import SiteFooter from '../components/SiteFooter'

const team=[['PRATIK PATEL','FOUNDER & CEO'],['NILPESH PATEL','CO-FOUNDER'],['JUGAL CHOKSHI','CO-FOUNDER'],['KRUNAL PATEL','STRATEGIC PARTNER'],['ALPIT SHAH','STRATEGIC PARTNER']]

export default function Leadership(){
  return <main className="leadership-legacy">
    <SiteHeader/>
    <section className="leadership-legacy-hero">
      <div className="wrap">
        <div className="section-title">
          <div>
            <p className="eyebrow dark">LEADERSHIP</p>
            <h1>People behind<br/><em>the vision.</em></h1>
          </div>
          <a className="text-link" href="/leadership">MEET THE TEAM ↗</a>
        </div>
      </div>
    </section>
    <section className="leadership-legacy-team">
      <div className="wrap">
        <div className="team-strip">
          {team.map(([name,role])=><div key={name}>{name}<br/><small>{role}</small></div>)}
        </div>
      </div>
    </section>
    <section className="leadership-legacy-space"/>
    <section className="dark-panel"><div className="wrap"><p className="eyebrow">ONE TEAM · SHARED VISION</p><h2>Partnership is part of<br/><em>the platform.</em></h2></div></section>
    <SiteFooter/>
  </main>
}