import { Github, Linkedin, Mail, Code2, Sparkles, ArrowDown, Zap, Rocket, Terminal, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/hero-image.png';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhirajpanhare', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhirajpanhare/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhirajpanhare08@gmail.com', label: 'Email' },
  ];
const stats = [
  { value: '15+', label: 'Projects Built', icon: Rocket },
  { value: '5+', label: 'Technologies', icon: Code2 },
  { value: '100%', label: 'Commitment', icon: Sparkles },
];


  const skills = ['React','.Net', 'Node.js', 'TypeScript', 'MongoDB'];

  // 3D Floating Elements
  const floatingElements = [
    { icon: Terminal, position: 'top-[15%] left-[5%]', delay: '0s', color: 'text-primary' },
    { icon: Database, position: 'top-[25%] right-[8%]', delay: '1s', color: 'text-accent' },
    { icon: Globe, position: 'bottom-[20%] left-[10%]', delay: '2s', color: 'text-primary' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 pt-20 md:pt-24">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8 dark:from-primary/5 dark:via-background dark:to-accent/5"></div>

        {/* Animated Grid with Perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)] origin-center"></div>

        {/* Floating Orbs with 3D Effect */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/15 dark:bg-primary/10 rounded-full blur-3xl animate-float [transform:translateZ(50px)]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/15 dark:bg-accent/10 rounded-full blur-3xl animate-float [animation-delay:1s] [transform:translateZ(30px)]"></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl animate-pulse"></div>

        {/* 3D Floating Icons */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`hidden lg:block absolute ${element.position} animate-float opacity-30 dark:opacity-20 hover:opacity-50 dark:hover:opacity-40 transition-opacity duration-300`}
            style={{ animationDelay: element.delay }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-60 dark:opacity-50 group-hover:opacity-90 dark:group-hover:opacity-75 transition-opacity duration-300"></div>
              <element.icon className={`relative h-12 w-12 ${element.color} drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] [transform:rotateY(20deg)_rotateX(10deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)] transition-transform duration-500`} />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-4 md:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1">
              {/* Status Badge */}
              <div className="flex justify-center lg:justify-start animate-fade-in-down">
                {/* <Badge className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 dark:bg-primary/10 border-primary/40 dark:border-primary/30 hover:bg-primary/30 dark:hover:bg-primary/20 hover:scale-105 transition-all duration-300 text-xs sm:text-sm text-foreground animate-glow-border">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-glow-pulse"></span>
                  </span>
                  <span className="font-medium">Available for Work</span>
                </Badge> */}
              </div>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3 animate-fade-in-up delay-100">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-foreground mb-1 sm:mb-2 animate-fade-in-left delay-200 drop-shadow-lg">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    Dhiraj Panhare
                  </span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 dark:text-muted-foreground animate-fade-in-right delay-300">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-scale-pulse" />
                  <span className="drop-shadow-lg">Full-Stack Web Developer</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 dark:text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-400 drop-shadow-md">
                Building scalable, user-focused web applications using React, Node.js, and .NET.
                I turn complex ideas into clean, performant solutions with real-world impact.

              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start animate-fade-in-up delay-500">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-card/80 dark:bg-card/50 backdrop-blur-sm border-primary/30 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-primary/20 dark:hover:bg-primary/10 hover:text-primary-foreground dark:hover:text-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20 transition-all duration-300 animate-bounce-in text-foreground"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start animate-fade-in-up delay-700">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:scale-105 transition-all duration-500 group overflow-hidden text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center justify-center drop-shadow-lg">
                    <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-[-2px] group-hover:rotate-12 transition-transform duration-300" />
                    View Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-card/50 dark:bg-card/30 backdrop-blur-md border-primary/40 dark:border-primary/30 hover:border-primary/70 dark:hover:border-primary/60 hover:bg-primary/10 dark:hover:bg-card/50 hover:text-primary dark:hover:text-foreground hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 transition-all duration-300 group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 font-semibold text-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start animate-fade-in-up delay-800">
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="relative bg-card/50 dark:bg-card/30 backdrop-blur-md border border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-primary/20 dark:hover:bg-card/50 hover:scale-110 hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/30 transition-all duration-300 group h-9 w-9 sm:h-10 sm:w-10 animate-bounce-in text-foreground"
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:text-primary group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Column - 3D Image & Stats */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Profile Image with 3D Effect */}
              <div className="relative group animate-fade-in-right delay-200 w-full max-w-sm lg:max-w-none">
                {/* 3D Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-30 dark:opacity-20 blur-3xl group-hover:opacity-50 dark:group-hover:opacity-40 transition-opacity duration-500 animate-scale-pulse [transform:translateZ(20px)]"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-25 dark:opacity-20 blur-2xl animate-spin-slow [transform:translateZ(10px)]"></div>

                {/* Image Container with 3D Transform */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto [perspective:1000px]">
                  {/* 3D Decorative Elements */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-12 opacity-30 dark:opacity-20 group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-40 dark:group-hover:opacity-30 transition-all duration-500 [transform:translateZ(30px)] animate-float shadow-lg shadow-primary/30"></div>
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-2xl -rotate-12 opacity-30 dark:opacity-20 group-hover:-rotate-45 group-hover:scale-110 group-hover:opacity-40 dark:group-hover:opacity-30 transition-all duration-500 [transform:translateZ(30px)] animate-float delay-500 shadow-lg shadow-accent/30"></div>

                  {/* Main Image with 3D Hover */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-primary/40 dark:border-primary/30 shadow-2xl shadow-primary/20 dark:shadow-primary/10 group-hover:border-primary/70 dark:group-hover:border-primary/50 group-hover:shadow-primary/40 dark:group-hover:shadow-primary/30 transition-all duration-500 group-hover:scale-105 [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)_rotateX(-5deg)]">
                    <img
                      src={profileImage}
                      alt="Dhiraj Panhare"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* 3D Floating Icons */}
                  <Sparkles className="absolute -top-2 -right-2 h-5 w-5 sm:h-6 sm:w-6 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-scale-pulse [transform:translateZ(40px)]" />
                  <Code2 className="absolute -bottom-2 -left-2 h-5 w-5 sm:h-6 sm:w-6 text-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-scale-pulse delay-500 [transform:translateZ(40px)]" />
                </div>
              </div>

              {/* 3D Stats Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md animate-fade-in-up delay-600">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-md border border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 text-center [transform-style:preserve-3d] hover:[transform:translateZ(10px)] animate-slide-up"
                    style={{ animationDelay: `${700 + index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 space-y-1">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.9)] transition-all duration-300" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-foreground/70 dark:text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-foreground/40 dark:text-muted-foreground/50 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;