import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Award, Briefcase, Code2, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import labheshImg from './assets/labhesh.png';
import gallery1 from './assets/IMG-20250928-WA0009.jpg';
import gallery2 from './assets/IMG-20250928-WA0010.jpg';
import gallery3 from './assets/IMG-20250928-WA0011.jpg';
import gallery4 from './assets/IMG-20250928-WA0012.jpg';

const navItems = ['about', 'gallery', 'experience', 'projects', 'skills', 'education', 'contact'];
const galleryPhotos = [gallery1, gallery2, gallery3, gallery4];

const experience = [
  { company: 'SQE.io', role: 'Software Engineer Intern', place: 'San Francisco, CA', period: 'Oct 2025 - Present', summary: 'Built dependable financial infrastructure and AI-enabled automation workflows with Python, FastAPI, PostgreSQL, Docker, and AWS.', wins: ['Maintained 100% ledger integrity across financial transactions', 'Reduced transaction propagation latency by 40%', 'Engineered safeguards against race conditions and double-spend scenarios'] },
  { company: 'Cover Re (Re Protocol)', role: 'Software Engineer Intern', place: 'San Francisco, CA', period: 'Dec 2025 - Mar 2026', summary: 'Engineered backend pipelines across GraphQL APIs and RPC services for analytics and AI-assisted risk evaluation.', wins: ['Improved consistency by 30% across $90M+ in tracked assets', 'Reconstructed time-series data and normalized AI-ready risk signals', 'Cut deployment overhead by 50% with GitHub Actions CI/CD'] },
  { company: 'Closet Mate', role: 'Software Engineer Intern', place: 'Worcester, MA', period: 'Jun 2025 - Dec 2025', summary: 'Shipped a production inventory and logistics platform with React Native, Java, PostgreSQL, and an AI forecasting workflow.', wins: ['Deployed event-driven services on AWS Lambda, RDS, and S3', 'Improved stock planning with production AI predictions', 'Led a team of three developers through ambiguous roadmap work'] },
  { company: 'Venturly', role: 'Founder & Lead Engineer', place: 'Worcester, MA', period: 'Mar 2025 - Dec 2025', summary: 'Launched a milestone-based funding platform using React, Node.js, Go, PostgreSQL, and AWS.', wins: ['Validated product feasibility with 10 startup teams', 'Built auditable escrow-style transaction models', 'Achieved sub-150 ms API latency in production'] },
];

const projects = [
  { title: 'IncidentPilot', eyebrow: 'SRE + Incident Response', stack: 'Next.js / TypeScript / MCP / REST APIs', description: 'An incident-response platform correlating alerts, logs, metrics, deployments, runbooks, and customer-impact data across six operational sources.', result: 'Controlled rollback with human approval, recovery monitoring, and a projected four-minute mitigation time.', link: 'https://github.com/Labheshm21/IncidentPiolt' },
  { title: 'Enterprise Knowledge Assistant', eyebrow: 'Cloud RAG System', stack: 'Python / FastAPI / Boto3 / Docker / AWS', description: 'A production-ready knowledge service with a four-stage retrieval pipeline for processing and searching internal documentation.', result: 'Containerized delivery to EC2 via ECR and GitHub Actions, with observability and repeatable cloud automation.', link: 'https://github.com/Labheshm21/multiresearch-ai-agent' },
  { title: 'AeroMind', eyebrow: 'Multi-Agent Travel Planner', stack: 'LangGraph / LangChain / Groq / Tavily / DynamoDB', description: 'A current, personalized travel planner orchestrating three specialized agents through multi-step search and response synthesis.', result: 'Persistent cloud delivery with DynamoDB, automated AWS releases, and CloudWatch monitoring.', link: 'https://github.com/Labheshm21/flight-agent' },
];

const skillGroups: [string, string[]][] = [
  ['AI Technologies', ['OpenAI SDK', 'Gemini SDK', 'LangGraph', 'LangChain', 'RAG', 'MCP', 'Agent Observability']],
  ['Languages', ['Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'SQL']],
  ['Frameworks & APIs', ['FastAPI', 'Spring Boot', 'Node.js', 'React', 'Next.js', 'React Native', 'REST', 'GraphQL', 'WebSockets']],
  ['Cloud & Data', ['AWS', 'Docker', 'GitHub Actions', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'ChromaDB']],
];

const awards = [
  { value: '$5,000', title: 'WPI I3 Lab Grant', detail: 'Secured for Venturly', accent: true },
  { value: 'Best', title: 'Prototype & Poster', detail: 'WPI I3 Lab - $500 prize', accent: true },
  { value: '3rd', title: 'Colibre Hackathon', detail: 'Worcester Polytechnic Institute' },
  { value: '2nd', title: 'National-Level Ideathon', detail: 'GSsoc' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const onScroll = () => {
      const current = [...navItems].reverse().find((id) => document.getElementById(id)?.getBoundingClientRect().top! <= 140);
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return <div className="min-h-screen bg-[#07111f] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"><button onClick={() => jump('about')} className="font-semibold">LM<span className="text-cyan-400">.</span></button><div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <button key={item} onClick={() => jump(item)} className={`text-sm capitalize transition ${active === item ? 'text-cyan-300' : 'text-slate-400 hover:text-white'}`}>{item}</button>)}</div><button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      {menuOpen && <div className="grid border-t border-white/10 bg-[#07111f] px-5 py-4 md:hidden">{navItems.map((item) => <button key={item} onClick={() => jump(item)} className="py-3 text-left capitalize text-slate-300">{item}</button>)}</div>}
    </nav>

    <main>
      <section id="about" className="relative overflow-hidden pt-16"><div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[120px]" /><div className="relative mx-auto grid min-h-[82vh] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.25fr_.75fr]">
        <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-300"><Sparkles size={15} /> AI-native software engineer</div><h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-7xl">I build intelligent products and <span className="text-cyan-300">dependable systems.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">I take AI features from data ingestion and model integration through API development, deployment, evaluation, and monitoring. My focus is LLM products, backend systems, and cloud reliability.</p><div className="mt-7 flex flex-wrap gap-2"><Strength label="Product Leadership" /><Strength label="Strategy & Execution" /><Strength label="Business Acumen" /></div><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => jump('projects')} className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200">Explore my work</button><a href="mailto:labheshmahajan01@gmail.com" className="rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/5">Get in touch</a></div><div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-300" />Fremont, CA</span><Social href="https://github.com/Labheshm21" icon={<Github size={16} />} label="GitHub" /><Social href="https://www.linkedin.com/in/labhesh-mahajan/" icon={<Linkedin size={16} />} label="LinkedIn" /></div></div>
        <div className="mx-auto w-full max-w-sm"><div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-cyan-300/10 to-slate-950 p-2 shadow-2xl shadow-cyan-950/50"><img src={labheshImg} alt="Labhesh Mahajan" className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-top" /></div></div>
      </div><div className="relative mx-auto -mt-8 max-w-6xl px-5 pb-20"><div className="mb-4 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-slate-950"><Award size={19} /></span><div><p className="text-xs font-bold uppercase tracking-[.22em] text-amber-200">Award-winning builder</p><p className="text-sm text-slate-400">Recognition for product innovation, execution, and entrepreneurial impact</p></div></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{awards.map((award) => <AwardSpotlight key={award.title} {...award} />)}</div></div></section>

      <section id="gallery" className="border-t border-white/10 bg-white/[0.025] py-24"><div className="mx-auto max-w-6xl px-5"><SectionTitle icon={<Sparkles />} label="In action" title="A few moments from the journey." /><p className="mt-4 max-w-2xl leading-7 text-slate-400">Swipe through highlights from building, presenting, and celebrating the work.</p><Swiper className="portfolio-gallery mt-10 !pb-12" modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3500, disableOnInteraction: false }} grabCursor loop spaceBetween={18} slidesPerView={1.08} breakpoints={{ 640: { slidesPerView: 1.65 }, 900: { slidesPerView: 2.35 } }}>{galleryPhotos.map((photo, index) => <SwiperSlide key={photo}><div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] p-2"><img src={photo} alt={`Portfolio highlight ${index + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-[1.15rem] object-cover transition duration-500 group-hover:scale-[1.025]" /></div></SwiperSlide>)}</Swiper></div></section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.025] py-24"><div className="mx-auto max-w-6xl px-5"><SectionTitle icon={<Briefcase />} label="Experience" title="Engineering work with measurable outcomes." /><div className="mt-12 grid gap-5">{experience.map((job) => <article key={job.company} className="grid gap-6 rounded-3xl border border-white/10 bg-[#0b1728] p-7 md:grid-cols-[.7fr_1.3fr] md:p-9"><div><p className="text-sm text-cyan-300">{job.period}</p><h3 className="mt-2 text-2xl font-semibold">{job.company}</h3><p className="mt-1 text-slate-400">{job.role}</p><p className="mt-1 text-sm text-slate-500">{job.place}</p></div><div><p className="leading-7 text-slate-300">{job.summary}</p><ul className="mt-5 grid gap-2 text-sm text-slate-400">{job.wins.map((win) => <li key={win} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{win}</li>)}</ul></div></article>)}</div></div></section>

      <section id="projects" className="py-24"><div className="mx-auto max-w-6xl px-5"><SectionTitle icon={<Code2 />} label="Selected projects" title="AI systems designed for real-world operations." /><div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="group flex min-h-[26rem] flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e1d31] to-[#091423] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30"><div className="flex justify-between"><span className="text-sm text-cyan-300">0{index + 1}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="rounded-full p-2 text-slate-600 transition hover:bg-white/5 hover:text-cyan-300"><ArrowUpRight /></a></div><p className="mt-7 text-xs uppercase tracking-[.2em] text-slate-500">{project.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold">{project.title}</h3><p className="mt-5 leading-7 text-slate-400">{project.description}</p><div className="mt-auto pt-8"><p className="border-l-2 border-cyan-300/60 pl-4 text-sm leading-6 text-slate-300">{project.result}</p><p className="mt-5 text-xs text-slate-500">{project.stack}</p><a href={project.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"><Github size={16} />View source</a></div></article>)}</div></div></section>

      <section id="skills" className="border-y border-white/10 bg-white/[0.025] py-24"><div className="mx-auto max-w-6xl px-5"><SectionTitle icon={<Sparkles />} label="Technical toolkit" title="Built for AI, backend, and cloud delivery." /><div className="mt-12 grid gap-5 md:grid-cols-2">{skillGroups.map(([group, items]) => <article key={group} className="rounded-3xl border border-white/10 bg-[#0b1728] p-7"><h3 className="text-lg font-semibold text-cyan-300">{group}</h3><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{item}</span>)}</div></article>)}</div></div></section>

      <section id="education" className="py-24"><div className="mx-auto max-w-6xl px-5"><SectionTitle icon={<GraduationCap />} label="Education" title="A foundation in distributed systems and software engineering." /><div className="mt-12 grid gap-5 lg:grid-cols-2"><EducationCard school="Worcester Polytechnic Institute" degree="M.S. in Computer Science" detail="Distributed Systems, Software Engineering - GPA 3.7 / 4.0" period="Aug 2024 - May 2026" /><EducationCard school="Mumbai University" degree="B.E. in Computer Engineering" detail="MCT's Rajiv Gandhi Institute of Technology - GPA 3.62 / 4.0" period="Aug 2020 - May 2024" /></div></div></section>

      <section id="contact" className="border-t border-white/10 bg-cyan-300 py-20 text-slate-950"><div className="mx-auto max-w-6xl px-5"><p className="text-sm font-semibold uppercase tracking-[.2em]">Let's build something dependable</p><div className="mt-4 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Have an AI or backend challenge worth solving?</h2><div className="grid gap-3 text-sm font-medium"><a className="flex items-center gap-2 hover:underline" href="mailto:labheshmahajan01@gmail.com"><Mail size={18} />labheshmahajan01@gmail.com</a><a className="flex items-center gap-2 hover:underline" href="tel:+17743129812"><Phone size={18} />+1 774-312-9812</a></div></div></div></section>
    </main><footer className="bg-[#050c16] px-5 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Labhesh Mahajan. Designed and built with intelligence.</footer>
  </div>;
}

function SectionTitle({ icon, label, title }: { icon: ReactNode; label: string; title: string }) { return <div><div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[.18em] text-cyan-300">{icon}{label}</div><h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-.035em] sm:text-5xl">{title}</h2></div>; }
function EducationCard({ school, degree, detail, period }: { school: string; degree: string; detail: string; period: string }) { return <article className="rounded-3xl border border-white/10 bg-[#0b1728] p-7"><p className="text-sm text-cyan-300">{period}</p><h3 className="mt-3 text-2xl font-semibold">{degree}</h3><p className="mt-2 text-slate-300">{school}</p><p className="mt-4 text-sm leading-6 text-slate-500">{detail}</p></article>; }
function Social({ href, icon, label }: { href: string; icon: ReactNode; label: string }) { return <a className="flex items-center gap-2 hover:text-white" href={href} target="_blank" rel="noreferrer">{icon}{label}</a>; }
function Strength({ label }: { label: string }) { return <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[.12em] text-amber-200">{label}</span>; }
function AwardSpotlight({ value, title, detail, accent = false }: { value: string; title: string; detail: string; accent?: boolean }) { return <div className={`group rounded-2xl border p-5 transition hover:-translate-y-1 ${accent ? 'border-amber-300/35 bg-amber-300/[.09] shadow-lg shadow-amber-950/20' : 'border-white/10 bg-[#081322]/80'}`}><div className="flex items-start gap-3"><Award className={accent ? 'text-amber-300' : 'text-cyan-300'} size={21} /><div><p className={`text-2xl font-black tracking-tight ${accent ? 'text-amber-200' : 'text-cyan-300'}`}>{value}</p><p className="mt-1 font-semibold text-white">{title}</p><p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p></div></div></div>; }

export default App;
