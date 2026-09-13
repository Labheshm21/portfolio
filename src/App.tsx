import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Award, Check, ChevronLeft, ChevronRight, Github, Linkedin, Mail, MapPin, Menu, Pause, Play, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import labheshImg from './assets/labhesh.png';
import gallery1 from './assets/IMG-20250928-WA0009.jpg';
import gallery2 from './assets/IMG-20250928-WA0010.jpg';
import gallery3 from './assets/IMG-20250928-WA0011.jpg';
import gallery4 from './assets/IMG-20250928-WA0012.jpg';
import redHatHackathonPhoto from './assets/WhatsApp Image 2026-08-23 at 9.14.06 PM.jpeg';

const navItems = ['about', 'projects', 'experience', 'skills', 'gallery', 'contact'];
const galleryPhotos = [redHatHackathonPhoto, gallery1, gallery2, gallery3, gallery4];

const experience = [
  {
    company: 'SQE.io', role: 'Software Engineer Intern', place: 'San Francisco, CA', period: 'Oct 2025 - Jul 2026',
    summary: 'Automated internal workflows with production AI agents and standardized agent development through a reusable FastAPI platform.',
    wins: [
      'Built Python and LangChain agents for multi-step reasoning, prompt orchestration, and tool-driven actions',
      'Created shared service patterns and REST APIs to support additional agents',
      'Increased task completion by 29% and reduced unsupported responses by 36% using RAG and FAISS, with task-completion and response-groundedness evaluation',
    ],
    metric: '29%', metricLabel: 'higher agent task completion',
  },
  {
    company: 'Cover Re (Re Protocol)', role: 'Software Engineer Intern', place: 'San Francisco, CA', period: 'Dec 2025 - Mar 2026',
    summary: 'Enabled AI-assisted risk analysis by building data ingestion pipelines that connect GraphQL APIs and external data services to asset-processing systems.',
    wins: [
      'Improved input-data consistency for AI-assisted analysis by 30% across $90M+ in tracked assets',
      'Applied normalization, reconciliation, and time-series reconstruction to asset data',
      'Cut deployment overhead by 50% by automating testing and delivery with GitHub Actions CI/CD',
    ],
    metric: '30%', metricLabel: 'higher input-data consistency',
  },
  {
    company: 'Closet Mate', role: 'Software Engineer Intern', place: 'Worcester, MA', period: 'Jun 2025 - Dec 2025',
    summary: 'Built an AI virtual try-on prototype with OpenCV, pose estimation, and garment segmentation, achieving 62% alignment accuracy across 96+ clothing styles.',
    wins: [
      'Reduced AI try-on image-processing time by 35% across 2,000+ user images',
      'Optimized background removal, landmark detection, resizing, and garment overlays',
      'Cut P95 inference latency by 28% using AWS Lambda, RDS, S3, and CloudWatch while leading three developers',
    ],
    metric: '28%', metricLabel: 'lower P95 inference latency',
  },
];

const projects = [
  {
    title: 'CareCall AI', label: 'Voice appointment agent', context: 'Conversational AI',
    description: 'Built an LLM voice agent for booking, cancellation, and availability lookup by connecting Vapi tool calls to FastAPI endpoints and a SQLAlchemy/SQLite backend.',
    metric: '3 workflows', note: 'Book, cancel, check availability',
    flow: ['Vapi tool calls', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    decision: 'Improved voice-agent reliability by validating five typed data contracts and three REST endpoints, resolving routing, schema, date-handling, and database-matching failures.',
    tags: ['Python', 'Vapi', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    demoLink: 'https://youtu.be/QhTO2faiuPQ', sourceLink: 'https://github.com/Labheshm21/healthcare_voice',
  },
  {
    title: 'Twinly for Windows', label: 'Open-source AI desktop assistant', context: 'Open-source contributions',
    description: 'Added phone-call controls and failure diagnostics to an open-source AI assistant through Google Voice call loops, phone-gateway integration, and structured logging in C#/.NET.',
    metric: 'Email-to-CRM automation', note: 'Contact extraction and synchronization',
    flow: ['Email', 'Contact extraction', 'Notion CRM'],
    decision: 'Built a Notion CRM agent to extract and synchronize contacts from email, with authentication, policy controls, tool schemas, and xUnit tests.',
    tags: ['C#', '.NET', 'Electron', 'React', 'xUnit'],
    sourceLink: 'https://github.com/OjasMishra32/WindowsTwinly',
  },
  {
    title: 'IncidentPilot', label: 'SRE and incident response platform', context: 'AI operations workflow',
    description: 'Unified six sources of incident context using Next.js, TypeScript, MCP, and REST APIs to correlate alerts, logs, metrics, deployments, runbooks, and customer impact.',
    metric: '6 context sources', note: 'A unified view of each incident',
    flow: ['Incident context', 'Deployment link', 'Human approval', 'Rollback'],
    decision: 'Linked failures to recent deployments and implemented rollback tooling with human approval. Demonstrated a workflow with a four-minute mitigation target.',
    tags: ['Next.js', 'TypeScript', 'MCP', 'REST APIs'],
    sourceLink: 'https://github.com/Labheshm21/IncidentPiolt',
  },
];

const skillGroups: [string, string[]][] = [
  ['AI Technologies', ['OpenAI SDK', 'Gemini SDK', 'LangGraph', 'LangChain', 'RAG', 'FAISS', 'MCP', 'Agent Observability']],
  ['Languages', ['Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'SQL']],
  ['Frameworks & APIs', ['FastAPI', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'React Native', 'REST', 'GraphQL', 'WebSockets']],
  ['Cloud & Data', ['AWS', 'Docker', 'GitHub Actions', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'ChromaDB']],
];

const awards = [
  { value: '1st place', title: 'RAG the City Hackathon', detail: 'RAG architecture & technical innovation · Red Hat / Open Accelerator · 2026' },
  { value: '$5,000', title: 'WPI I3 Lab Grant', detail: 'Secured for Venturly' },
  { value: 'Best', title: 'Prototype & Poster', detail: 'WPI I3 Lab - $500 prize' },
  { value: '3rd', title: 'Colibre Hackathon', detail: 'Worcester Polytechnic Institute' },
  { value: '2nd', title: 'National-Level Ideathon', detail: 'GSsoc' },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');
  const [playing, setPlaying] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const gallery = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = [...navItems].reverse().find(id => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 160;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const toggleGallery = () => {
    if (!gallery.current) return;
    if (playing) gallery.current.autoplay.stop();
    else gallery.current.autoplay.start();
    setPlaying(!playing);
  };

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-bar">
          <a className="brand" href="#about" aria-label="Labhesh Mahajan home"><span className="brand-mark">lm<span>.</span></span><span className="brand-name">Labhesh Mahajan</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.filter(id => id !== 'about' && id !== 'contact').map(id => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}>{id === 'gallery' ? 'Beyond the Build' : id}</a>)}
          </nav>
          <a className="nav-contact" href="mailto:labheshmahajan01@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
          <button className="menu-toggle icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(id => <a key={id} href={'#' + id} onClick={() => setMenuOpen(false)}>{id === 'gallery' ? 'Beyond the Build' : id}</a>)}</nav>}
      </header>

      <main id="main">
        <section id="about" className="container hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="short-line" /> AI & BACKEND SOFTWARE ENGINEER</p>
            <h1>Labhesh<br /><span>Mahajan.</span></h1>
            <h2>I turn AI prototypes into<br className="desktop-break" /> systems people can use.</h2>
            <p className="hero-description">Production agents. Dependable APIs. Measurable results. I build with Python, FastAPI, and AWS, from the first workflow to deployment and evaluation.</p>
            <div className="strengths"><span>Product Leadership</span><span>Strategy & Execution</span><span>Business Acumen</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
              <a className="button button-secondary" href="mailto:labheshmahajan01@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-links">
              <span><MapPin size={15} /> Fremont, CA</span>
              <a href="https://github.com/Labheshm21" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/labheshmahajan/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
          <aside className="hero-profile" aria-label="Profile">
            <div className="portrait-frame"><img src={labheshImg} alt="Labhesh Mahajan" width="864" height="1184" fetchPriority="high" /><div className="portrait-label"><span>ENGINEER. BUILDER. TEAM LEAD.</span><ArrowUpRight size={18} /></div></div>
            <div className="profile-footnote"><GraduationLabel /><p><strong>M.S. Computer Science</strong><span>Worcester Polytechnic Institute · 2026</span></p></div>
          </aside>
        </section>

        <section className="container recognition" aria-labelledby="recognition-heading">
          <div className="recognition-heading"><Award size={18} /><h2 id="recognition-heading">Award-winning builder</h2><span>RECOGNITION & MILESTONES</span></div>
          <div className="award-grid">{awards.map(award => <article className="award-glimmer" key={award.title}><Award size={17} /><strong>{award.value}</strong><h3>{award.title}</h3><p>{award.detail}</p></article>)}</div>
        </section>

        <section id="projects" className="section container">
          <SectionHeading number="01" label="SELECTED WORK" title="Built to do the work." description="A closer look at the systems, the engineering decisions, and the code behind them." />
          <div className="project-grid">
            {projects.map((project, index) => {
              return <article className={'project-card ' + (index === 0 ? 'featured-project' : '')} key={project.title}>
                <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-context">{project.context}</span><a href={project.sourceLink} target="_blank" rel="noreferrer" className="icon-button" aria-label={'View ' + project.title + ' source code'}><ArrowUpRight size={20} /></a></div>
                <div className="project-title"><p className="eyebrow">{project.label}</p><h3>{project.title}</h3></div>
                <p className="project-description">{project.description}</p>
                <div className="project-flow" aria-label={project.title + ' workflow'}>{project.flow.map((step, stepIndex) => <span key={step}><b>{step}</b>{stepIndex < project.flow.length - 1 && <ArrowRight size={13} aria-hidden="true" />}</span>)}</div>
                <div className="project-evidence"><strong>{project.metric}</strong><span>{project.note}</span></div>
                <div className="engineering-note"><span>ENGINEERING FOCUS</span><p>{project.decision}</p></div>
                <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-links"><a href={project.sourceLink} target="_blank" rel="noreferrer"><Github size={16} /> View source <ArrowUpRight size={14} /></a>{project.demoLink && <a className="demo-link" href={project.demoLink} target="_blank" rel="noreferrer"><Play size={15} /> Watch demo <ArrowUpRight size={14} /></a>}</div>
              </article>;
            })}
          </div>
        </section>

        <section id="experience" className="section section-tinted">
          <div className="container">
            <SectionHeading number="02" label="EXPERIENCE" title="Real teams. Real outcomes." description="Production AI agents, data pipelines for risk analysis, and computer vision with measurable results." />
            <div className="experience-list">{experience.map((job, index) => <article className="experience-entry" key={job.company}>
              <div className="role-heading"><span className="role-index">0{index + 1}</span><div><h3>{job.company}</h3><p>{job.role}</p><span className="role-date">{job.period}</span><span className="role-location">{job.place}</span></div></div>
              <div className="role-body"><p>{job.summary}</p><ul>{job.wins.map(win => <li key={win}><Check size={16} aria-hidden="true" /><span>{win}</span></li>)}</ul></div>
              <div className="role-result"><strong>{job.metric}</strong><span>{job.metricLabel}</span></div>
            </article>)}</div>
          </div>
        </section>

        <section id="skills" className="section container">
          <SectionHeading number="03" label="TOOLKIT" title="From model to production." description="The tools I use to connect AI behavior with reliable software delivery." />
          <div className="skills-grid">{skillGroups.map(([category, skills], index) => <article key={category} className="skill-group"><span className="skill-index">0{index + 1}</span><h3>{category}</h3><ul className="tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
          <div id="education" className="education-strip"><p className="eyebrow">EDUCATION</p><article><h3>M.S. in Computer Science</h3><p>Worcester Polytechnic Institute</p><span>2024 - 2026 · GPA 3.7 / 4.0</span><small>Distributed Systems & Software Engineering</small></article><article><h3>B.E. in Computer Engineering</h3><p>MCT's Rajiv Gandhi Institute of Technology, Mumbai University</p><span>2020 - 2024 · GPA 3.62 / 4.0</span></article></div>
        </section>

        <section id="gallery" className="section section-tinted" aria-labelledby="gallery-title">
          <div className="container">
            <div className="gallery-heading">
              <h2 id="gallery-title">Beyond the Build</h2>
              <div className="gallery-controls">
                <span>{String(photoIndex + 1).padStart(2, '0')} / {String(galleryPhotos.length).padStart(2, '0')}</span>
                <button className="icon-button" onClick={() => gallery.current?.slidePrev()} aria-label="Previous photo"><ChevronLeft size={19} /></button>
                <button className="icon-button" onClick={toggleGallery} aria-label={playing ? 'Pause photo slideshow' : 'Play photo slideshow'}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
                <button className="icon-button" onClick={() => gallery.current?.slideNext()} aria-label="Next photo"><ChevronRight size={19} /></button>
              </div>
            </div>
            <Swiper
              className="portfolio-gallery"
              modules={[A11y, Autoplay, Pagination]}
              onSwiper={instance => { gallery.current = instance; }}
              onSlideChange={instance => setPhotoIndex(instance.realIndex)}
              pagination={{ clickable: true }}
              onAfterInit={instance => instance.autoplay.stop()}
              autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              grabCursor loop spaceBetween={20} slidesPerView={1.08}
              breakpoints={{ 640: { slidesPerView: 1.6 }, 1000: { slidesPerView: 2.25 } }}
            >
              {galleryPhotos.map((photo, index) => <SwiperSlide key={photo}>
                <figure className="gallery-card">
                  <img src={photo} alt={index === 0 ? 'Labhesh and his team holding their hackathon award at Red Hat' : 'Labhesh Mahajan portfolio event photo ' + index} loading="lazy" width="1600" height="1200" />
                  <figcaption><span>{index === 0 ? 'The team behind the win' : 'Moments from the journey'}</span><span>0{index + 1}</span></figcaption>
                </figure>
              </SwiperSlide>)}
            </Swiper>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <p className="eyebrow">LET'S WORK TOGETHER</p><h2>Your next AI idea.<br /><span>Let's make it work.</span></h2><p>Hiring for AI or backend engineering? I'd love to talk about your team, the problems you're solving, and where I can contribute.</p><a className="button button-primary" href="mailto:labheshmahajan01@gmail.com">Start a conversation <ArrowUpRight size={18} /></a>
          <div className="contact-details"><a href="mailto:labheshmahajan01@gmail.com"><Mail size={16} /> labheshmahajan01@gmail.com</a><span>Fremont, California</span></div>
        </section>
      </main>
      <footer className="container footer"><a className="brand-mark" href="#about">lm<span>.</span></a><p>© {new Date().getFullYear()} Labhesh Mahajan. Designed and built with intelligence.</p><a href="#about">Back to top ↑</a></footer>
    </div>
  );
}

function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div><p>{description}</p></div>;
}
function GraduationLabel() { return <span className="degree-mark" aria-hidden="true">WPI</span>; }

export default App;
