import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Server,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Send,
  Menu,
  X,
  Trophy,
  DollarSign,
  Zap,
  Star,
  Briefcase,
  Target,
  Users
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import labheshImg from './assets/labhesh.png';
import img1 from './assets/IMG-20250928-WA0011.jpg';
import img2 from './assets/IMG-20250928-WA0012.jpg';
import img3 from './assets/IMG-20250928-WA0009.jpg';
import img4 from './assets/IMG-20250928-WA0010.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Closet Mate",
      period: "Jun 2025 – Present",
      description: "Building ClosetMate, a swipe-based shopping app using React Native and Java backend. Leading a team of 3 developers while contributing to product strategy.",
      technologies: ["React Native", "Java", "PostgreSQL", "AWS Lambda", "Docker"],
      highlights: ["Leading 3 developers", "Product strategy contributor", "Scalable architecture"]
    },
    {
      title: "Graduate Assistant",
      company: "Worcester Polytechnic Institute",
      period: "Feb 2025 – May 2025",
      description: "Developed scalable Java and Next.js exam platform, reducing manual grading time by 40% and improving accessibility for 1000+ students.",
      technologies: ["Java", "Next.js", "MySQL", "APIs"],
      highlights: ["40% time reduction", "1000+ students impacted", "99% uptime"]
    },
    {
      title: "Educator",
      company: "Blink Skills, India",
      period: "Jan 2024 – Apr 2024",
      description: "Delivered 21 lessons on React Native and Java, focusing on mobile and backend development while guiding students in building modular workflows.",
      technologies: ["React Native", "Java", "Teaching", "System Design"],
      highlights: ["21 lessons delivered", "Modular workflows", "System design focus"]
    }
  ];

  const projects = [
    {
      title: "Venturly",
      subtitle: "Crypto-powered milestone-backed funding platform",
      period: "Feb 2025 – Present",
      description: "Built a responsive React.js frontend with Solidity smart contracts, cutting average fundraising time by 50% for early-stage startups.",
      technologies: ["React.js", "Solidity", "Node.js", "Java", "PostgreSQL", "AWS"],
      achievements: ["50% faster fundraising", "100% auditability", "<150ms latency"],
      impact: "Revolutionary funding platform",
      status: "Active Development",
      link: "https://venturlyinvestments.com/"
    },
    {
      title: "Symptriage",
      subtitle: "AI-Based Disease Prediction & Medicine Recommendation System",
      period: "Dec 2024",
      description: "Full-stack healthcare platform using React.js and Java backend, integrating OpenAI API for real-time diagnosis.",
      technologies: ["React.js", "Java", "Node.js", "OpenAI API", "PostgreSQL", "Docker", "Kubernetes"],
      achievements: ["91% prediction accuracy", "Real-time diagnosis", "Secure database"],
      impact: "Healthcare innovation",
      status: "Completed",
      link: "https://symptriage.vercel.app/"
    },
    {
      title: "WhisperWave",
      subtitle: "A Realtime Chat Application",
      period: "Dec 2024",
      description: "Real-time chat application with Java backend and MySQL database, supporting 500+ concurrent users.",
      technologies: ["Java", "MySQL", "WebSockets", "Real-time"],
      achievements: ["500+ concurrent users", "200+ messages/minute", "<200ms response time"],
      impact: "Communication platform",
      status: "Completed",
      link: "https://whisperwave-ud41.onrender.com/"
    }
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Go", "Python", "JavaScript", "Java", "R", "HTML5", "CSS3", "SQL", "PHP"],
    "Frameworks": ["React JS", "React Native", "Flutter", "Angular JS", "Vue JS", "Node JS", "Flask", "Django", "TensorFlow", "PyTorch"],
    "Databases": ["MySQL", "DynamoDB", "MongoDB", "PostgreSQL", "Firebase"],
    "Tools & Platforms": ["Git & GitHub", "Jenkins", "JIRA", "Docker", "AWS", "GCP", "Azure", "Linux"]
  };

  const achievements = [
    {
      title: "Best Prototype & Poster Presentation",
      organization: "WPI's I3 Lab",
      prize: "$500",
      date: "Sept 2025",
      description: "Recognized for outstanding innovation and presentation skills",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Venturly Grant & Accelerator",
      organization: "WPI's I3 Lab & GISA Accelerator",
      prize: "$5,000",
      date: "Jun 2025",
      description: "Secured major funding for revolutionary crypto-funding platform",
      icon: DollarSign,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "3rd Place - Colibre Hackathon",
      organization: "WPI",
      prize: "Recognition",
      date: "Nov 2024",
      description: "Business & Technical Excellence in competitive hackathon",
      icon: Award,
      color: "from-bronze-400 to-orange-600"
    },
    {
      title: "2nd Place - National Ideathon",
      organization: "Girlscript Kolkata",
      prize: "National Recognition",
      date: "Mar 2021",
      description: "National-level recognition for innovative ideas",
      icon: Star,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const totalPrizeMoney = "$5,500+";

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Labhesh Mahajan
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-slate-800/50'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-4">
                <div className="text-cyan-400 font-mono text-sm tracking-wider animate-pulse">
                  Hi, my name is
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    Labhesh
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Mahajan
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 leading-snug max-w-md">
                    I craft digital experiences powered by intelligence.
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 text-lg pt-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-full border border-cyan-500/30 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                      <Code size={20} className="text-cyan-400" />
                      <span className="text-cyan-300 font-medium">Full Stack</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full border border-purple-500/30 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                      <Target size={20} className="text-purple-400" />
                      <span className="text-purple-300 font-medium">Business Strategy</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full border border-emerald-500/30 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                      <Users size={20} className="text-emerald-400" />
                      <span className="text-emerald-300 font-medium">Product Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Software Engineer specializing in building exceptional digital experiences. 
                Currently focused on AI-driven solutions at Worcester Polytechnic Institute, 
                combining technical excellence with strategic product thinking.
              </p>

              {/* Achievement Highlight */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-400" size={24} />
                  <span className="text-emerald-400 font-bold text-lg">{totalPrizeMoney}</span>
                </div>
                <span className="text-slate-300">in awards & grants secured</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-medium hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative group w-80 h-80 md:w-96 md:h-96">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={labheshImg} 
                    alt="Labhesh Mahajan"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                <div className="absolute -inset-8 rounded-full border border-cyan-400/20 animate-ping"></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 animate-bounce hover:scale-110"
            >
              <ChevronDown size={40} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  I'm a Software Engineer with a passion for building innovative digital solutions that make a real impact. 
                  Currently pursuing my Master's in Computer Science with a focus on Software Engineering at 
                  Worcester Polytechnic Institute.
                </p>
                <p>
                  My journey combines technical excellence with strategic thinking - from leading development teams 
                  to securing significant funding for breakthrough projects. I believe in creating software that 
                  doesn't just work, but transforms how people interact with technology.
                </p>
                <p>
                  With expertise spanning full-stack development, AI integration, and product strategy, 
                  I'm constantly pushing the boundaries of what's possible in the digital realm.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">1000+</div>
                  <div className="text-slate-400 text-sm">Students Impacted</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400">4</div>
                  <div className="text-slate-400 text-sm">Major Awards</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full h-64 rounded-lg"
                  >
                    <SwiperSlide className="flex items-center justify-center">
                      <img 
                        src={img1} 
                        alt="WPI Demo Day"
                        className="h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img 
                        src={img2} 
                        alt="Techie turned trail blazer award at GISA 2025"
                        className="h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img 
                        src={img3} 
                        alt="Best Team Player Award by Colibre Club"
                        className="h-full object-contain"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                      <img 
                        src={img4} 
                        alt="Team working on a project"
                        className="h-full object-contain"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className="text-center mt-4">
                    <div className="text-cyan-400 font-semibold mb-1">Team Leadership</div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                          <Briefcase size={24} className="text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 mb-4">
                            <Building size={18} className="text-slate-400" />
                            <span className="text-slate-300 font-medium text-lg">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-lg">{exp.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <span 
                              key={hIndex}
                              className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-start lg:justify-end">
                      <div className="flex items-center gap-2 text-slate-400 bg-slate-700/30 px-4 py-2 rounded-xl">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform group-hover:scale-105 h-full flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                          <Code size={20} className="text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Active Development' 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                              : 'bg-slate-600/20 text-slate-400 border border-slate-600/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-3 font-medium">{project.subtitle}</p>
                    <p className="text-slate-300 mb-4 leading-relaxed flex-1">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2">Impact Metrics</h4>
                        <div className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <Zap size={12} className="text-emerald-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded text-xs font-medium border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">{project.period}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Awards & Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-6"></div>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full border border-emerald-500/30">
              <Trophy className="text-yellow-400" size={24} />
              <span className="text-2xl font-bold text-emerald-400">{totalPrizeMoney}</span>
              <span className="text-slate-300">Total Prize Money & Grants</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${achievement.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform group-hover:scale-105">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-xl text-white leading-tight">{achievement.title}</h3>
                          {achievement.prize.includes('$') && (
                            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full border border-emerald-500/30">
                              <DollarSign size={16} className="text-emerald-400" />
                              <span className="text-emerald-400 font-bold">{achievement.prize}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-cyan-400 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-slate-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Calendar size={14} />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    {category === 'Programming Languages' && <Code size={24} className="text-cyan-400" />}
                    {category === 'Frameworks' && <Server size={24} className="text-purple-400" />}
                    {category === 'Databases' && <Database size={24} className="text-emerald-400" />}
                    {category === 'Tools & Platforms' && <Server size={24} className="text-orange-400" />}
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/50 hover:text-white transition-all duration-300 border border-slate-600/50 hover:border-slate-500/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                    <GraduationCap size={32} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Master of Science in Computer Science</h3>
                    <p className="text-slate-300 font-medium text-lg mb-2">Worcester Polytechnic Institute, College of Engineering</p>
                    <p className="text-purple-400 font-medium mb-4">Concentration: Software Engineering</p>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={16} />
                      <span>Aug 2024 – May 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                    <GraduationCap size={32} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Bachelor of Engineering in Computer Engineering</h3>
                    <p className="text-slate-300 font-medium text-lg mb-4">MCT's Rajiv Gandhi Institute of Technology, Mumbai University</p>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={16} />
                      <span>Aug 2020 – May 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Let's Connect</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Feel free to ping me about collabs, job offers, or just to say hi. 
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">Email</p>
                    <p className="text-slate-300 font-medium">lmahajan@wpi.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">Location</p>
                    <p className="text-slate-300 font-medium">Worcester, MA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="p-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg">
                    <Phone size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider">Phone</p>
                    <p className="text-slate-300 font-medium">+1 (774) 312 9812</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com/Labheshm21" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                  <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/labhesh-mahajan/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-slate-800/50 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message"
                      rows={6}
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-slate-500">
              <p>Designed & Built by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">Labhesh Mahajan</span></p>
              <p className="mt-2">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/Labhesh-Mahajan" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/labhesh-mahajan/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;