import { Card, CardContent } from '@/components/ui/card';
import { Code, Heart, Lightbulb, Target, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      color: 'from-blue-500 via-blue-600 to-indigo-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning new technologies',
      color: 'from-purple-500 via-purple-600 to-pink-600'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering results',
      color: 'from-indigo-500 via-indigo-600 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love what I do every day',
      color: 'from-pink-500 via-pink-600 to-purple-600'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 dark:bg-primary/15 border-2 border-primary/50 dark:border-primary/30 mb-6 shadow-xl shadow-primary/30">
              <Sparkles className="h-4 w-4 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
              <span className="text-sm font-semibold text-primary drop-shadow-lg">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Know Who I Am
            </h2>
            <p className="text-foreground/80 dark:text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-md">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-20">
            {/* Who I Am */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-2xl" />
                  </div>
                  Who I Am
                </h3>
              </div>
              <div className="space-y-4 text-foreground/70 dark:text-muted-foreground text-sm md:text-base leading-relaxed">
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-300">
                  I am a <span className="text-primary font-semibold drop-shadow-lg">Mechanical Engineering graduate</span> from Acropolis Institute of Technology and Research with a Diploma and B-Tech. Though my academic background is in engineering, my true passion lies in <span className="text-accent font-semibold drop-shadow-lg">software development</span>.
                </p>
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-300">
                  My journey into software began with hackathons like <span className="text-primary font-semibold drop-shadow-lg">WittyHacks 3.0</span>, which enhanced my problem-solving skills and sparked my interest in coding.
                </p>
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-[1.01] transition-all duration-300">
                  Currently, I am focused on <span className="text-accent font-semibold drop-shadow-lg">Full Stack Development</span>, building real-world projects, and continuously learning to stay updated with the latest technologies.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-xl">
                    <Code className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-2xl" />
                  </div>
                  What I Do
                </h3>
              </div>
              <div className="space-y-4 text-foreground/70 dark:text-muted-foreground text-sm md:text-base leading-relaxed">
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-accent/40 dark:border-accent/20 hover:border-accent/60 dark:hover:border-accent/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-accent/30 dark:hover:shadow-accent/20 hover:scale-[1.01] transition-all duration-300">
                  I create <span className="text-primary font-semibold drop-shadow-lg">full-stack web applications</span> using modern technologies like React, Node.js, and TypeScript. My focus is on building scalable, maintainable applications with great user experiences.
                </p>
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-accent/40 dark:border-accent/20 hover:border-accent/60 dark:hover:border-accent/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-accent/30 dark:hover:shadow-accent/20 hover:scale-[1.01] transition-all duration-300">
                  I work closely with designers and stakeholders to transform ideas into <span className="text-accent font-semibold drop-shadow-lg">functional, beautiful applications</span>. I believe in the power of clean code, testing, and continuous integration.
                </p>
                <p className="p-4 rounded-xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border-2 border-accent/40 dark:border-accent/20 hover:border-accent/60 dark:hover:border-accent/50 hover:bg-card/90 dark:hover:bg-card/50 hover:shadow-xl hover:shadow-accent/30 dark:hover:shadow-accent/20 hover:scale-[1.01] transition-all duration-300">
                  My approach combines <span className="text-primary font-semibold drop-shadow-lg">technical expertise</span> with creative problem-solving to deliver solutions that not only work well but also provide value to users and businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/50 dark:border-primary/20 hover:border-primary/80 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${highlight.color} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <highlight.icon className="h-7 w-7 md:h-8 md:w-8 text-white drop-shadow-2xl" />
                    </div>
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-2 text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-xs md:text-sm text-foreground/70 dark:text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${highlight.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg`}></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;