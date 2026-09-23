import SiteHeader from '../components/SiteHeader';import SiteFooter from '../components/SiteFooter'

const team=[
  ['Pratik Patel','Founder & CEO','/pratik-patel.jpg','Driven by a passion for community, sports, and long-term value creation.','LEAD · BUILD · SCALE'],
  ['Nilpesh Patel','Co-Founder','/nilpesh-patel.jpg','Bringing operational excellence and strategic growth to every opportunity.','OPERATE · OPTIMIZE · GROW'],
  ['Jugal Chokshi','Co-Founder','/jugal-chokshi.jpg','Focused on project execution, partnerships, and community impact.','EXECUTE · COLLABORATE · DELIVER'],
  ['Krunal Patel','Strategic Partner & Investor','/krunal-patel.jpg','Bringing strategic insight and investment expertise to fuel sustainable growth.','STRATEGIZE · INVEST · EXPAND'],
  ['Alpit Shah','Strategic Partner & Investor','/alpit-family.jpg','Committed to long-term value and building strong future opportunities.','CONNECT · INVEST · BUILD']
]

export default function Leadership(){
  return <main className="leadership-modern">
    <SiteHeader/>
    <section className="leadership-banner">
      <div className="leadership-banner-image">
        <div className="leadership-banner-copy"><span>PEOPLE</span><span>PARTNERSHIP</span><span>PROGRESS</span></div>
      </div>
    </section>
    <section className="leadership-modern-grid">
      <div className="wrap">
        <div className="leadership-cards">
          {team.map(([name,role,photo,desc,tag])=>
            <article className="leadership-card" key={name}>
              <div className="leadership-portrait">
                <img src={photo} alt={name} loading="lazy"/>
              </div>
              <div className="leadership-card-body">
                <h2>{name}</h2>
                <p className="leadership-role">{role}</p>
                <span className="leadership-rule"/>
                <p className="leadership-desc">{desc}</p>
                <small>{tag}</small>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
    <section className="leadership-closing"><div className="wrap"><p>ONE TEAM · SHARED VISION</p><h2>Partnership is part of <em>the platform.</em></h2></div></section>
    <SiteFooter/>
  </main>
}