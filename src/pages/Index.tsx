
import React from "react";
import { Navigation } from "@/components/Navigation";
import { SkillCard } from "@/components/ui/skill-card";
import { ProjectCard } from "@/components/ui/project-card";
import { MetricCard } from "@/components/ui/metric-card";
import { MarkerDots } from "@/components/ui/marker-dots";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  GitBranch, 
  Globe, 
  Layers, 
  PenTool, 
  Server, 
  Smartphone, 
  Star, 
  User, 
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Full Stack <span className="bg-gradient-orange text-transparent bg-clip-text animate-gradient-shift">Developer</span> & UI Designer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Building beautiful, responsive, and user-friendly applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg">
                I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
                With expertise in both frontend and backend technologies, I create seamless user experiences that
                are both beautiful and functional.
              </p>
              <p className="text-lg">
                My approach combines technical expertise with creative problem-solving, allowing me to build
                applications that not only meet but exceed client expectations.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline">
                  <a href="#contact" className="inline-flex items-center">
                    <User className="mr-2 h-4 w-4" /> Get in Touch
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Biological Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between text-sm">
                  <span>Technical Experience</span>
                  <span className="font-bold">7+ years</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sm">
                  <span>Projects Completed</span>
                  <span className="font-bold">60+</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sm">
                  <span>Client Satisfaction</span>
                  <span className="font-bold text-secondary">98%</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between text-sm">
                  <span>Coffee Consumed</span>
                  <span className="font-bold">1,500+ cups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <SkillCard
                title="Frontend"
                value="95%"
                color="orange"
                subtitle="React, Vue, Angular"
              >
                <div className="mt-4">
                  <ProgressBar 
                    value={95} 
                    max={100} 
                    color="primary" 
                    size="md" 
                  />
                </div>
              </SkillCard>
              
              <SkillCard
                title="Backend"
                value="90%"
                color="green"
                subtitle="Node.js, Python, Java"
              >
                <div className="mt-4">
                  <ProgressBar 
                    value={90} 
                    max={100} 
                    color="secondary" 
                    size="md" 
                  />
                </div>
              </SkillCard>
              
              <SkillCard
                title="UI/UX Design"
                value="85%"
                color="pink"
                subtitle="Figma, Adobe XD"
              >
                <div className="mt-4">
                  <ProgressBar 
                    value={85} 
                    max={100} 
                    color="accent" 
                    size="md" 
                  />
                </div>
              </SkillCard>
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
            
            <MetricCard title="GraphQL" value="Advanced" grade="A-" />
            <MetricCard title="SQL" value="Proficient" grade="B+" />
            <MetricCard title="Testing" value="Advanced" grade="A-" />
            <MetricCard title="Mobile" value="Intermediate" grade="B" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating my skills, expertise, and problem-solving capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured online shopping platform with payment processing, user authentication, and inventory management."
              image="/lovable-uploads/05bf8120-90a5-4620-822f-61f2ad9fe5a9.png"
              actionLabel="View Project"
            />
            
            <ProjectCard
              title="Health Dashboard"
              description="An interactive dashboard for tracking health metrics with data visualization and personalized recommendations."
              image="/lovable-uploads/72b4d528-a506-432c-9f74-614feb3f59f8.png"
              actionLabel="View Project"
            />
            
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website showcasing projects, skills, and experience with a sleek and responsive design."
              image="/lovable-uploads/b8f0fe64-a3d7-41f4-a984-c300d900a3c7.png"
              actionLabel="View Project"
            />
            
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates, file sharing, and team communication features."
              image="/lovable-uploads/9ab79394-c30f-413e-8dea-5ff486b28abe.png"
              actionLabel="View Project"
            />
            
            <ProjectCard
              title="Social Media Platform"
              description="A social networking platform with user profiles, news feeds, messaging, and content sharing capabilities."
              image="/lovable-uploads/06b97919-d2fb-4bc4-b977-f466c48ff6f0.png"
              actionLabel="View Project"
            />
            
            <ProjectCard
              title="Mobile Fitness App"
              description="A mobile application for tracking workouts, nutrition, and fitness goals with personalized coaching and progress tracking."
              image="/lovable-uploads/a0bcd973-31c1-4739-b7ef-dad53221c251.png"
              actionLabel="View Project"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>

          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center gap-6 mb-8">
              <Button size="icon" variant="outline" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Dev Portfolio. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
