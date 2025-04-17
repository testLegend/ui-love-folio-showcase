
import React, { useState } from 'react';
import { ChevronRight, Mail, Github, Linkedin, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MarkerDots } from "@/components/ui/marker-dots";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ProjectCard } from "@/components/ui/project-card";
import { MetricCard } from "@/components/ui/metric-card";
import { ProjectDetails } from "@/components/ui/project-details";
import { HeroSection } from '@/components/ui/HeroSection';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment processing, user authentication, and inventory management.",
    image: "/lovable-uploads/05bf8120-90a5-4620-822f-61f2ad9fe5a9.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and checkout functionality",
      "Payment processing with Stripe",
      "Order tracking and history"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "3 months",
    role: "Full Stack Developer"
  },
  {
    title: "Social Media Platform",
    description: "A social networking platform with profiles, posts, comments, and real-time messaging.",
    image: "/lovable-uploads/06b97919-d2fb-4bc4-b977-f466c48ff6f0.png",
    technologies: ["React", "GraphQL", "Apollo", "PostgreSQL", "Redis"],
    features: [
      "User profiles and authentication",
      "Real-time messaging with Socket.IO",
      "News feed with infinite scrolling",
      "Photo and video sharing",
      "Community features and groups"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "8 months",
    role: "Backend Developer"
  },
  {
    title: "Mobile Fitness App",
    description: "A mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
    image: "/lovable-uploads/a0bcd973-31c1-4739-b7ef-dad53221c251.png",
    technologies: ["React Native", "Redux", "Firebase", "Node.js", "TensorFlow.js"],
    features: [
      "Workout tracking and planning",
      "Nutrition logging and meal planning",
      "Progress visualization with charts",
      "AI-powered exercise form analysis",
      "Community challenges and leaderboards"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "5 months",
    role: "Mobile Developer"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application for teams with real-time updates and file sharing.",
    image: "/lovable-uploads/9ab79394-c30f-413e-8dea-5ff486b28abe.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "AWS"],
    features: [
      "Task creation and assignment",
      "Project management and milestones",
      "Real-time updates and notifications",
      "File sharing and collaboration",
      "Reporting and analytics dashboard"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "4 months",
    role: "Full Stack Developer"
  },
  {
    title: "E-Learning Platform",
    description: "An educational platform for online courses with video content, quizzes, and progress tracking.",
    image: "/lovable-uploads/72b4d528-a506-432c-9f74-614feb3f59f8.png",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Socket.IO"],
    features: [
      "Course creation and management",
      "Video lectures and content delivery",
      "Quiz and assessment system",
      "Progress tracking and certificates",
      "Discussion forums and Q&A"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "6 months",
    role: "Lead Developer"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with a sleek cosmic design.",
    image: "/lovable-uploads/b8f0fe64-a3d7-41f4-a984-c300d900a3c7.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    features: [
      "Responsive design for all devices",
      "Interactive 3D elements and animations",
      "Project showcase with detailed case studies",
      "Contact form with validation",
      "Dark/light mode toggle"
    ],
    repoUrl: "#",
    liveUrl: "#",
    timeline: "1 month",
    role: "Frontend Developer & Designer"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProjects = () => {
    setActiveSection("projects");
    window.scrollTo({
      top: document.getElementById('projects').offsetTop,
      behavior: 'smooth'
    });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection onActionClick={handleViewProjects} />
            <section id="about" className="py-20 px-6 relative overflow-hidden">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="inline-block">
                      <div className="flex items-center px-3 py-1 text-sm rounded-full bg-accent/10 text-accent mb-4">
                        <User className="mr-2 h-4 w-4" /> About Me
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Crafting digital experiences with passion and precision
                    </h2>
                    <p className="text-muted-foreground">
                      I'm a full-stack developer and UX designer with over 7 years of experience
                      creating intuitive, responsive web applications. My approach combines technical
                      expertise with creative problem-solving to deliver exceptional user experiences.
                    </p>
                    <p className="text-muted-foreground">
                      With a background in both front-end and back-end development, I specialize in
                      building scalable solutions that meet business objectives while delighting users.
                      My work spans e-commerce platforms, social media applications, and enterprise systems.
                    </p>
                    <div className="pt-4">
                      <Button onClick={() => {
                        setActiveSection("contact");
                        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                      }} variant="outline" className="rounded-full">
                        Contact Me <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold mb-2">Technical Proficiency</h3>
                      <div className="mb-4">
                        <MarkerDots optimal={16} inRange={8} outOfRange={3} className="mb-4" />
                        <div className="flex items-center gap-x-12 flex-wrap">
                          <div className="flex items-baseline gap-2 mt-auto">
                            <h3 className="text-5xl font-bold">27</h3>
                            <span className="text-sm font-medium">technologies</span>
                          </div>
                          <div className="flex gap-4 mt-4 md:mt-0">
                            <div>
                              <div className="text-secondary text-sm font-medium mb-1">16 Optimal</div>
                              <div className="text-yellow-400 text-sm font-medium mb-1">8 In range</div>
                              <div className="text-accent text-sm font-medium">3 Out of range</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mt-6">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Frontend Development</span>
                            <span className="text-primary">95%</span>
                          </div>
                          <ProgressBar value={95} max={100} color="primary" size="md" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Backend Development</span>
                            <span className="text-secondary">90%</span>
                          </div>
                          <ProgressBar value={90} max={100} color="secondary" size="md" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>UI/UX Design</span>
                            <span className="text-accent">85%</span>
                          </div>
                          <ProgressBar value={85} max={100} color="accent" size="md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="projects" className="py-20 px-6 bg-card/50 backdrop-blur-sm">
              <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <div className="inline-block">
                    <div className="flex items-center px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
                      <span className="mr-1">✨</span> Portfolio
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                  <p className="text-muted-foreground">
                    A selection of my recent work spanning web and mobile development,
                    showcasing various technologies and problem-solving approaches.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsData.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      technologies={project.technologies}
                      actionLabel="View Details"
                      onAction={() => handleProjectClick(project)}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section id="contact" className="py-20 px-6">
              <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <div className="flex items-center px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary mb-4">
                        <Mail className="mr-2 h-4 w-4" /> Contact
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">Let's work together</h2>
                    <p className="text-muted-foreground">
                      Have a project in mind or want to discuss potential opportunities?
                      I'm always open to new challenges and collaborations.
                    </p>
                    
                    <div className="flex gap-4 pt-4">
                      <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      
      case "about":
        return (
          <section id="about" className="min-h-screen py-16 px-6 bg-card/50 flex items-center">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    I'm a passionate full-stack developer with over 7 years of experience building web and mobile applications. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    With a background in both frontend and backend development, I specialize in building scalable solutions that meet business objectives while delighting users. My work spans e-commerce platforms, social media applications, and enterprise systems.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    I'm constantly learning and exploring new technologies to stay at the forefront of web development. When I'm not coding, you can find me hiking, reading, or experimenting with new recipes.
                  </p>
                </div>
                
                <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Technical Proficiency</h3>
                  <div className="mb-4">
                    <MarkerDots optimal={16} inRange={8} outOfRange={3} className="mb-4" />
                    <div className="flex items-center gap-x-12 flex-wrap">
                      <div className="flex items-baseline gap-2 mt-auto">
                        <h3 className="text-5xl font-bold">27</h3>
                        <span className="text-sm font-medium">technologies</span>
                      </div>
                      <div className="flex gap-4 mt-4 md:mt-0">
                        <div>
                          <div className="text-secondary text-sm font-medium mb-1">16 Optimal</div>
                          <div className="text-yellow-400 text-sm font-medium mb-1">8 In range</div>
                          <div className="text-accent text-sm font-medium">3 Out of range</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <MetricCard title="Frontend" value="Expert" grade="A+" />
                    <MetricCard title="Backend" value="Advanced" grade="A" />
                    <MetricCard title="UI Design" value="Advanced" grade="A-" />
                    <MetricCard title="DevOps" value="Intermediate" grade="B+" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      
      case "skills":
        return (
          <section id="skills" className="min-h-screen py-16 px-6 flex items-center">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and proficiency in various technologies.
              </p>

              <div className="mb-12">
                <div className="bg-card rounded-2xl p-6 shadow-lg mb-8">
                  <h3 className="text-xl font-bold mb-2">Technical Proficiency</h3>
                  <div className="mb-4">
                    <MarkerDots optimal={16} inRange={8} outOfRange={3} className="mb-4" />
                    <div className="flex items-center gap-x-12 flex-wrap">
                      <div className="flex items-baseline gap-2 mt-auto">
                        <h3 className="text-5xl font-bold">27</h3>
                        <span className="text-sm font-medium">technologies</span>
                      </div>
                      <div className="flex gap-4 mt-4 md:mt-0">
                        <div>
                          <div className="text-secondary text-sm font-medium mb-1">16 Optimal</div>
                          <div className="text-yellow-400 text-sm font-medium mb-1">8 In range</div>
                          <div className="text-accent text-sm font-medium">3 Out of range</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-2">
                      <div className="text-primary font-semibold">Frontend</div>
                      <ProgressBar value={95} max={100} color="primary" size="md" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-secondary font-semibold">Backend</div>
                      <ProgressBar value={90} max={100} color="secondary" size="md" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-accent font-semibold">UI/UX Design</div>
                      <ProgressBar value={85} max={100} color="accent" size="md" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MetricCard title="JavaScript" value="Expert" grade="A+" />
                  <MetricCard title="React" value="Expert" grade="A+" />
                  <MetricCard title="TypeScript" value="Advanced" grade="A" />
                  <MetricCard title="Node.js" value="Advanced" grade="A" />
                  <MetricCard title="Python" value="Proficient" grade="B+" />
                  <MetricCard title="UI Design" value="Advanced" grade="A-" />
                  <MetricCard title="DevOps" value="Intermediate" grade="B" />
                  <MetricCard title="Cloud" value="Proficient" grade="B+" />
                </div>
              </div>
            </div>
          </section>
        );
      
      case "projects":
        return (
          <section id="projects" className="min-h-screen py-16 px-6 bg-card/50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A selection of my recent work showcasing various technologies and problem-solving approaches.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    actionLabel="View Details"
                    onAction={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      
      case "contact":
        return (
          <section id="contact" className="min-h-screen py-16 px-6 flex items-center">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and collaborations.
              </p>

              <div className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-lg">
                <div className="flex justify-center gap-6 mb-8">
                  <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-card/80 hover:bg-card/50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden -z-20">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -top-64 -left-64 animate-pulse-slow" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl -bottom-64 -right-64 animate-pulse-slow animation-delay-2000" />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" onClick={() => setActiveSection("home")} className="text-xl font-bold">
            <span className="text-gradient-primary">Cosmic</span> <span className="text-secondary">Portfolio</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveSection("home"); }}
              className={`text-sm ${activeSection === "home" ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); setActiveSection("about"); document.getElementById('about').scrollIntoView({behavior: 'smooth'}); }}
              className={`text-sm ${activeSection === "about" ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`}
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); setActiveSection("skills"); }}
              className={`text-sm ${activeSection === "skills" ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); setActiveSection("projects"); document.getElementById('projects').scrollIntoView({behavior: 'smooth'}); }}
              className={`text-sm ${activeSection === "projects" ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); setActiveSection("contact"); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); }}
              className={`text-sm ${activeSection === "contact" ? "text-primary font-medium" : "text-foreground/70 hover:text-foreground"}`}
            >
              Contact
            </a>
          </div>
          
          <Button variant="default" size="sm" className="hidden md:flex rounded-full">
            Resume <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        {renderSection()}
      </main>

      <footer className="py-8 px-6 bg-card/50 border-t border-border/40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Cosmic Portfolio. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("home"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("about"); document.getElementById('about').scrollIntoView({behavior: 'smooth'}); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("skills"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("projects"); document.getElementById('projects').scrollIntoView({behavior: 'smooth'}); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("contact"); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); }} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Index;
