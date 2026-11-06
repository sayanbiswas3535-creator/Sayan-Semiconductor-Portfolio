const experience = [
  { role: "Product & Content Marketing Lead", company: "iVP Semiconductor", period: "Mar 2026 – Present", metric: "₹8+ Cr pipeline · 5+ launches · 15+ OEM interviews", detail: "Established the product marketing function from the ground up across power semiconductors and IoT connectivity. Led GTM planning for 5+ launches, contributing to ₹8+ Cr qualified pipeline, 30+ customer engagements and 10+ design opportunities. Conducted 15+ OEM discovery interviews; built 10+ customer-facing enablement assets and enabled a three-partner distributor ecosystem." },
  { role: "Associate Manager, Principal Lines", company: "Millennium Semiconductors", period: "Nov 2025 – Feb 2026", metric: "10+ design wins · 75+ OEM accounts · ₹123 Cr portfolio", detail: "Led channel-side product marketing and business development across Quectel, Digi International, Inpaq and Semtech. Supported 75+ OEM accounts across EV, industrial automation, smart cities and connected devices, with a ₹123 Cr annual billing portfolio and ₹180 Cr design-in pipeline. Delivered 10+ confirmed customer design wins through solution positioning, technical engagement and commercial negotiations." },
  { role: "Product Manager II", company: "Silicon Labs", period: "Apr 2022 – Oct 2025", metric: "10+ design wins · 23% YoY growth · 300+ SKUs", detail: "Owned outbound global GTM for the EFR32FG28 Sub-GHz SoC, securing 10+ confirmed design wins during 23% YoY product-line growth. Led positioning, pricing and competitive strategy for a 300+ SKU, $1B+ MCU and wireless SoC portfolio. Led the EFR32FG25 Wi-SUN platform launch for smart metering and smart-city infrastructure. Converted feedback from 100+ customer engagements into a roadmap decision to right-size security features for price-sensitive segments, lowering BOM cost. Produced 15+ launch assets." },
  { role: "Engineer", company: "L&T Technology Services", period: "Aug 2018 – Sep 2020", metric: "18% component cost reduction · 35% fewer field recalls · 6+ products", detail: "Worked in embedded product engineering across hardware design, cost optimization and product validation. Reduced component costs by 18% through BOM optimization, value engineering and alternate sourcing. Reduced field recalls by 35% through failure analysis, test-methodology redesign and cross-functional quality improvements. Supported 6+ products from development through customer acceptance and coordinated 50+ engineers and project leads across design, test and supply chain." }
];

const capabilities = [
  ["Connectivity", "Wireless SoCs and MCUs, Wi-SUN, Bluetooth, Wi-Fi, Zigbee, Matter, cellular IoT and embedded connectivity."],
  ["Power semiconductors", "MOSFETs, IGBTs, solid-state relays, DC-DC converters and LDOs."],
  ["Product strategy & GTM", "Positioning, portfolio strategy, competitive benchmarking, product launches, technical content and sales enablement."],
  ["India electronics ecosystem", "Semiconductor market development, application-led messaging and ecosystem engagement."]
];

const caseStudies = [
  ["EFR32FG28 Sub-GHz GTM & design wins", "Silicon Labs", "Global outbound GTM ownership for a Sub-GHz SoC: differentiated positioning, competitive messaging and sales enablement, supporting 10+ confirmed design wins during 23% YoY product-line growth.", "Add approved launch collateral, target segments and non-confidential design-win examples."],
  ["Wi-SUN platform launch & customer-led roadmap", "Silicon Labs", "Led the EFR32FG25 Wi-SUN launch for smart metering and smart-city infrastructure. Feedback from 100+ customer engagements informed a security-feature right-sizing roadmap decision for price-sensitive segments.", "Add webinar/event links, customer problem framing and approved technical collateral."],
  ["OEM design-in acceleration across four principal lines", "Millennium Semiconductors", "Supported 75+ OEM accounts across Quectel, Digi International, Inpaq and Semtech; delivered 10+ confirmed design wins through application positioning, technical engagement and commercial coordination.", "Add anonymized application examples and clarify your individual contribution to selected wins."],
  ["Building a semiconductor GTM engine", "iVP Semiconductor", "Built the product marketing function, conducted 15+ OEM discovery interviews, planned 5+ launches, created 10+ enablement assets and enabled three distributor partners; work contributed to ₹8+ Cr qualified pipeline.", "Add public product pages, approved application notes and a clear attribution note for pipeline."],
  ["Embedded hardware cost and quality improvement", "L&T Technology Services", "Applied BOM optimization, value engineering, alternate sourcing, failure analysis and test-methodology redesign to reduce component costs by 18% and field recalls by 35%, supporting 6+ products through customer acceptance.", "Add a sanitized project example describing the engineering challenge and validation approach."]
];

export default function Home() {
  return <main>
    <nav><a className="brand" href="#">SB<span>.</span></a><div><a href="#about">About</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a><a href="#work">Case studies</a><a href="#contact">Contact</a></div></nav>
    <section className="hero">
      <p className="eyebrow">SEMICONDUCTOR · CONNECTIVITY · PRODUCT GTM</p>
      <h1>Turning complex technology into <em>market-ready products.</em></h1>
      <p className="intro">I work at the intersection of semiconductor technology, product strategy and go-to-market execution — translating engineering capabilities into clear value propositions, technical narratives and commercial enablement.</p>
      <div className="actions"><a className="primary" href="#work">Explore my work</a><a className="secondary" href="#contact">Get in touch ↗</a></div>
      <div className="hero-note"><span>PRODUCT MARKETING</span><span>WIRELESS CONNECTIVITY</span><span>POWER ELECTRONICS</span></div>
    </section>
    <section id="about" className="section split">
      <div><p className="eyebrow">01 / ABOUT</p><h2>Technology fluency.<br/><em>Commercial perspective.</em></h2></div>
      <div><p>My experience spans product engineering, product management and product marketing in the semiconductor industry. I bring a cross-functional perspective to portfolio positioning, product launches, technical storytelling and sales enablement.</p><p>This portfolio documents selected work, product knowledge and the thinking behind effective semiconductor go-to-market programs.</p><p className="note">Explore selected career outcomes, product launches and technical work across four semiconductor and engineering organizations.</p></div>
    </section>
    <section id="experience" className="section">
      <p className="eyebrow">02 / EXPERIENCE</p><h2>Career <em>timeline</em></h2>
      <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="period">{item.period}</div><div><h3>{item.role}</h3><strong>{item.company}</strong><p className="metric">{item.metric}</p><p>{item.detail}</p></div></article>)}</div>
    </section>
    <section id="expertise" className="section dark">
      <p className="eyebrow">03 / EXPERTISE</p><h2>From silicon to <em>market impact.</em></h2>
      <div className="cap-grid">{capabilities.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
    <section id="work" className="section">
      <p className="eyebrow">04 / SELECTED WORK</p><h2>Case studies & <em>proof of work.</em></h2>
      <p className="section-lead">Selected work across four employers. Detailed case studies should use approved, non-confidential evidence and clearly distinguish individual ownership from team outcomes.</p>
      <div className="case-grid">{caseStudies.map(([title, company, summary, todo], i) => <article className="case" key={title}><span>0{i+1} / {company}</span><h3>{title}</h3><p>{summary}</p><p className="note"><b>To complete:</b> {todo}</p></article>)}</div>
    </section>
    <section className="section quote"><p className="eyebrow">05 / POINT OF VIEW</p><h2>Good product marketing makes technical differentiation <em>understandable, relevant and actionable.</em></h2><p>Explore my technical insights, application perspectives and industry contributions on LinkedIn.</p><a className="secondary" href="https://www.linkedin.com/in/sayanbiswas-sb/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></section>
    <footer id="contact"><div><p className="eyebrow">LET'S CONNECT</p><h2>Have a product or market challenge?</h2><p>For product marketing, portfolio strategy and semiconductor GTM opportunities.</p></div><div className="contact-links"><p><b>Email:</b> <a href="mailto:sayan.biswas3535@gmail.com">sayan.biswas3535@gmail.com</a></p><p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/sayanbiswas-sb/" target="_blank" rel="noreferrer">linkedin.com/in/sayanbiswas-sb ↗</a></p><p><b>Location:</b> Bengaluru, India · Open to relevant opportunities</p></div><small>© {new Date().getFullYear()} Sayan Biswas · Built for clarity, credibility and discoverability.</small></footer>
  </main>;
}
