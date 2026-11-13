import { ArrowDown, ArrowUpRight, InstagramIcon, MapPin } from './Icons';

const image = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=76`;
const mapsUrl = 'https://share.google/8w5QrhLdWfMvnVCI0';
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Game+Space+eSports+Cafe,+Plot+471,+Adenwala+Road,+Matunga+East,+Mumbai+400019';

const setups = [
  { title: 'PC gaming', note: 'Settle in for casual sessions or competitive play.', image: 'photo-1542751371-adc38448a05e' },
  { title: 'PS5 setups', note: 'Get together for console gaming with friends.', image: 'photo-1606144042614-b2417e99c4e3' },
  { title: 'A place for gamers', note: 'Built by gamers, run by gamers, for gamers.', image: 'photo-1511512578047-dfb367046420' },
];

export default function Storefront() {
  return <>
    <div className="info-banner">Game Space® eSports Cafe <span>·</span> Open 365 days</div>
    <header className="info-header">
      <a href="#home" className="info-wordmark" aria-label="Game Space eSports Cafe home">GAME SPACE<span>eSPORTS CAFE</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#setups">Setups</a><a href="#reviews">Reviews</a><a href="#visit">Find us</a></nav>
      <a className="info-social-link" href="https://www.instagram.com/gamespace_cafe/" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight className="inline-icon"/></a>
    </header>

    <main id="home">
      <section className="info-hero" aria-labelledby="info-title">
        <div className="info-hero-photo" role="img" aria-label="Players enjoying an esports gaming event" />
        <div className="info-hero-copy"><p className="info-kicker">BUILT BY GAMERS · SINCE 2002</p><h1 id="info-title">Find your<br />next <i>game.</i></h1><p>PC and PS5 setups for casual sessions, competitive play, and everything in between.</p><a className="info-button" href="#visit">PLAN YOUR VISIT <ArrowDown className="inline-icon"/></a></div>
        <span className="info-hero-caption">MATUNGA EAST · MUMBAI</span>
      </section>

      <section className="info-intro" id="about"><div><p className="info-kicker">A LITTLE ABOUT US</p><h2>Built by gamers.<br />Made for <i>play.</i></h2></div><div className="info-intro-copy"><span className="info-rule"/><p>Game Space® eSports Cafe is a gaming cafe in Matunga East, Mumbai, featuring PC and console setups for casual and competitive play. Since 2002, it has been a place for gamers to meet, play, and make memories.</p><a href="https://www.instagram.com/gamespace_cafe/" target="_blank" rel="noreferrer" className="info-text-link">FOLLOW @GAMESPACE_CAFE <ArrowUpRight className="inline-icon"/></a></div></section>

      <section className="info-why" id="why-us"><div className="info-why-intro"><p className="info-kicker">YOUR GAME, YOUR WAY</p><h2>Casual to <i>competitive.</i></h2><p>Whether it’s a quick game with friends or a focused session, find your setup at Game Space.</p></div><div className="info-reasons"><article><span>01</span><div><h3>PC setups</h3><p>Get in the game with dedicated PC gaming setups.</p></div></article><article><span>02</span><div><h3>PS5 and console play</h3><p>Pick up a controller and play together.</p></div></article><article><span>03</span><div><h3>Gaming since 2002</h3><p>A local gaming cafe built around a love of play.</p></div></article></div></section>

      <section className="info-collections" id="setups"><div className="info-section-heading"><div><p className="info-kicker">STEP INTO THE GAME</p><h2>Choose your setup.</h2></div><p>PC + PS5 · Matunga East</p></div><div className="info-card-grid">{setups.map((item, index) => <article className="info-card" key={item.title}><div className="info-card-image"><img src={image(item.image, 800)} alt="" loading="lazy"/><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.note}</p></article>)}</div></section>

      <section className="info-delivery" id="experience"><div className="info-delivery-image" role="img" aria-label="Gaming setup ready for a session"/><div className="info-delivery-copy"><p className="info-kicker">A LOCAL GAMING LANDMARK</p><h2>Play more.<br />Make <i>memories.</i></h2><p>From childhood gaming days to new rivalries with friends, Game Space has been part of Mumbai’s gaming scene since 2002.</p><div className="delivery-mark"><span>’02</span><div><strong>Game Space® eSports Cafe</strong><small>Built by gamers, run by gamers, for gamers</small></div></div></div></section>

      <section className="info-location" id="visit"><div><p className="info-kicker">FIND US IN MATUNGA EAST</p><h2>Ready to<br />press <i>start?</i></h2><p>Visit us at Radha Bhuvan, opposite King’s Circle Garden. Call the cafe if you have questions before you head over.</p><a className="info-text-link" href="tel:+91224094444">CALL 022 2409 4444 <ArrowUpRight className="inline-icon"/></a></div><div className="location-panel"><address><MapPin className="location-pin"/><strong>Game Space® eSports Cafe</strong><span>Plot #471, Radha Bhuvan, Shop #9, Ground Floor</span><span>H, Adenwala Road, opposite King’s Circle Garden</span><span>Matunga East, Mumbai, Maharashtra 400019, India</span></address><div className="location-hours"><span>CAFE HOURS</span><strong>Monday–Saturday · 8:00 am–11:00 pm</strong><strong>Sunday · 9:00 am–11:00 pm</strong><p>Open 365 days. Hours provided from the cafe’s Google listing.</p></div><div className="location-map"><iframe title="Map showing Game Space eSports Cafe in Matunga East, Mumbai" src="https://www.google.com/maps?q=Game+Space+eSports+Cafe,+Plot+471,+Adenwala+Road,+Matunga+East,+Mumbai+400019&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a href={directionsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight className="inline-icon"/></a><small>Plot #471, Radha Bhuvan, Shop #9, H Adenwala Road, Matunga East.</small></div></div></section>

      <section className="info-reviews" id="reviews"><div className="info-reviews-heading"><div><p className="info-kicker">GAMERS SAY IT BEST</p><h2>Good games.<br />Great memories.</h2></div><a className="google-review-count" href={mapsUrl} target="_blank" rel="noreferrer"><strong>4.0</strong><span>414 Google reviews<br/>Read them on Google <ArrowUpRight className="inline-icon"/></span></a></div><div className="review-quotes"><blockquote><span>“</span><p>This place is part of my core childhood memories.</p><cite>Kartik Suvarna</cite><a href={mapsUrl} target="_blank" rel="noreferrer">VIEW ON GOOGLE <ArrowUpRight className="inline-icon"/></a></blockquote><blockquote><span>“</span><p>Had a lot of great times there playing Warcraft 3 with my clan.</p><cite>Nachiket Karnik</cite><a href={mapsUrl} target="_blank" rel="noreferrer">VIEW ON GOOGLE <ArrowUpRight className="inline-icon"/></a></blockquote></div><p className="review-disclaimer">Rating, review count, and excerpts are from the cafe’s Google listing and may change.</p></section>

      <section className="info-social"><div><p className="info-kicker">STAY IN THE GAME</p><h2>See you<br />out <i>there.</i></h2><p>Follow <strong>@gamespace_cafe</strong> for more from Game Space® eSports Cafe.</p></div><div className="community-cards"><a className="community-card instagram-card" href="https://www.instagram.com/gamespace_cafe/" target="_blank" rel="noreferrer"><InstagramIcon className="community-icon"/><strong>Instagram</strong><small>@gamespace_cafe</small><ArrowUpRight className="community-arrow"/></a><a className="community-card whatsapp-card" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin className="community-icon"/><strong>Find us on Google</strong><small>Open the cafe listing</small><ArrowUpRight className="community-arrow"/></a></div></section>
    </main>

    <footer className="info-footer"><div className="info-footer-top"><a href="#home" className="info-wordmark">GAME SPACE<span>eSPORTS CAFE</span></a><p>PC + PS5 setups.<br/>Casual and competitive play.</p><div className="info-footer-links"><a href="#about">About</a><a href="#setups">Setups</a><a href="#reviews">Google reviews</a><a href={directionsUrl} target="_blank" rel="noreferrer">Directions <ArrowUpRight className="inline-icon"/></a><a href="https://www.instagram.com/gamespace_cafe/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight className="inline-icon"/></a></div></div><div className="info-footer-bottom"><span>© {new Date().getFullYear()} Game Space® eSports Cafe</span><span>Matunga East · Mumbai</span><div><a href="/policies/privacy">Privacy</a><a href="/policies/terms">Terms</a></div></div></footer>
  </>;
}
