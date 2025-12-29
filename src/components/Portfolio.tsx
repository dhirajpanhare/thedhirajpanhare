import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Sparkles, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
       {
      title: 'BookStore',
      description: 'Built an online book store application featuring secure user authentication, role-based access, book and category management, search and filtering, admin controls, and a responsive user interface.',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop&q=80',
      technologies: ['React', 'TypeScript', '.Net Core Web Api', 'Sql'],
      liveUrl: '#',
      githubUrl: 'https://github.com/dhirajpanhare/BookStore',
      category: 'Web Application',
      featured: true
    },
    {
      title: 'BlogZone',
      description: 'Built a blog management application featuring user authentication, role-based access, create/read/update/delete blog posts, comment management, and a responsive, user-friendly interface',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80',
      technologies: ['Razor Pages', 'Javascript', '.Net MVC', 'Sql'],
      liveUrl: '#',
      githubUrl: 'https://github.com/dhirajpanhare/BlogZone',
      category: 'Web Application',
      featured: true
    },
    {
      title: 'OYEFILL',
      description: 'OYEFILL is a full-stack platform for easy form-filling and real-time exam alerts for jobs, admissions, and entrance exams',
      image: '/oyefill.jpg',
      technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://oyefill.vercel.app/',
      githubUrl: 'https://github.com/dhirajpanhare/oyefill',
      category: 'Web Application',
      featured: true
    },
    {
      title: 'Bhartiya Baazar',
      description: 'Full-featured e-commerce platform with payment integration, user authentication, and responsive design.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80',
      technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application',
      featured: false
    },
    {
      title: 'Dhiraj Personal Portfolio',
      description: 'As a passionate programmer, I independently designed and developed a portfolio web app.',
      image: '/portfolio.jpg',
      technologies: ['React', 'Typescript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://dhirajpanhare.github.io/dhirajpanhare/',
      githubUrl: 'https://github.com/dhirajpanhare/dhirajpanhare',
      category: 'Web Application',
      featured: false
    },
    {
      title: 'SkillNest',
      description: 'SkillNest is an LMS for managing tasks, online exams, and submissions with role-based access and progress tracking.',
      image: '/skillnest.jpg',
      technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application',
      featured: true
    },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Futuristic Design */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 dark:bg-primary/15 border-2 border-primary/50 dark:border-primary/30 mb-6 shadow-xl shadow-primary/30">
              <Sparkles className="h-4 w-4 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
              <span className="text-sm font-semibold text-primary drop-shadow-lg">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Project Showcase
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Crafting digital experiences with cutting-edge technology and innovative solutions
            </p>
          </div>

          {/* Projects Grid with Enhanced Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/50 dark:border-primary/20 hover:border-primary/80 dark:hover:border-primary/60 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-3 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 dark:from-primary/10 dark:via-transparent dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary via-accent to-primary border-0 shadow-2xl shadow-primary/50 text-xs md:text-sm font-semibold animate-pulse">
                      <Zap className="h-3 w-3 mr-1 drop-shadow-lg" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Image Container with Advanced Hover Effects */}
                <div className="relative overflow-hidden h-48 md:h-56 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" asChild className="shadow-2xl bg-background/95 dark:bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 text-xs md:text-sm text-foreground border-2 border-primary/30 hover:border-primary font-semibold">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        View
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="shadow-2xl bg-background/95 dark:bg-background/90 backdrop-blur-sm hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300 text-foreground border-2 border-accent/30 hover:border-accent font-semibold">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 md:h-4 md:w-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 dark:bg-background/80 backdrop-blur-md border-2 border-primary/40 dark:border-primary/30 shadow-xl text-xs font-semibold">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="relative z-10 pb-3">
                  <CardTitle className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-foreground/70 dark:text-muted-foreground mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack with Glassmorphism */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-background/80 dark:bg-background/60 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/70 dark:hover:border-primary/60 hover:bg-primary/25 dark:hover:bg-primary/15 hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 transition-all duration-300 text-foreground font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg"></div>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="relative mt-16 md:mt-24 text-center">
            <div className="relative inline-block w-full max-w-4xl">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
              
              <div className="relative bg-card/60 dark:bg-card/40 backdrop-blur-xl border-2 border-primary/50 dark:border-primary/30 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl shadow-amber-500/40 w-fit mx-auto mb-6">
                  <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-white drop-shadow-2xl animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4 drop-shadow-lg">
                  Let's Build Something Extraordinary
                </h3>
                <p className="text-foreground/70 dark:text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
                  Ready to transform your vision into reality? Let's collaborate and create innovative solutions together.
                </p>
                <a href="https://github.com/dhirajpanhare/thedhirajpanhare" target='_blank' rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary via-accent to-primary hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/40 hover:scale-110 transition-all duration-500 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group font-semibold"
                  >
                    Start a Project
                    <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;