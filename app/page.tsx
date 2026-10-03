import { ArrowUpRight, Camera, Crown, Heart, ShoppingBag, Sparkles, Star } from 'lucide-react'

const links = [
 
  
  
  {
    label: 'Instagram',
    detail: '@myrna.7',
    href: 'https://www.instagram.com/myrna.7?stkn=MTl1dmU2M3RscGlkaw%3D%3D&utm_source=qr',
    icon: Camera,
  },
  {
    label: 'TikTok',
    detail: '@myrnaiana',
    href: 'https://www.tiktok.com/@myrnaiana?_r=1&_t=ZS-9AA0HWWk9H3',
    icon: Sparkles,
  },
  
  {   label: 'Cider',
    detail: 'Your next favorite outfit is waiting',
    href: 'https://ciderhere.com/MyrnaCiderPicks',
    icon: ShoppingBag,
    featured: true,},
]

export default function Page() {
  return (
    <main className="poster-page">
      <article className="poster">
        <div className="poster-inner">
          <header className="hero">
            <div className="arch-wrap">
              <div className="arch">
                <img src="/image3.jpeg" alt="Myrna" />
              </div>
              <img src="/stickers/sticker-bow.png" alt="" className="bow-sticker" aria-hidden="true" />
            </div>
            <h1>
              Myrna
              <Heart className="h1-heart" aria-hidden="true" />
            </h1>
            <p className="tagline"><span className="tagline-large">Welcome to my world of</span><br /><span className="tagline-small">beauty, Lifestyle & travels</span></p>
          </header>
          <section className="lineup" aria-label="Princess Cider links">
            <h2><Heart aria-hidden="true" /> My links <Heart aria-hidden="true" /></h2>
            <div className="ticket-list">
              {links.map(({ label, detail, href, icon: Icon, featured }) => (
                <a className={`ticket ${featured ? 'featured' : ''}`} href={href} key={label} target="_blank" rel="noreferrer">
                  <Icon className="ticket-icon" aria-hidden="true" />
                  <span className="ticket-text"><strong>{label}</strong><small>{detail}</small></span>
                  <span className="stub"><ArrowUpRight aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}