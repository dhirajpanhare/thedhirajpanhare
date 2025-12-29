import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Users, Globe, Sparkles, Zap, Rocket } from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: React.ElementType;
  gradient: string;
}

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript' },
    { name: 'React' },
    { name: 'DotNet' },
    { name: 'Node.js/Express' },
    { name: 'SQL/NoSQL Databases' },
  ];

  const softSkills = [
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Project Management' },
    { name: 'Leadership' },
    { name: 'Time Management' }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Firebase', 'Tailwind CSS',
    'Express.js', 'PostgreSQL', 'Redux', 'Next.js'
  ];

  const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon, gradient }) => (
    <Card className="group relative bg-card/50 dark:bg-card/30 backdrop-blur-sm border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/10 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-500`}></div>

      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-foreground">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 dark:bg-opacity-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="grid grid-cols-1 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group/item p-3 rounded-lg bg-background/70 dark:bg-background/50 border border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/40 hover:bg-primary/10 dark:hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm md:text-base font-medium text-foreground group-hover/item:text-primary group-hover/item:drop-shadow-lg transition-all duration-300">
                  {skill.name}
                </span>
                <Zap className="h-4 w-4 text-primary opacity-0 group-hover/item:opacity-100 group-hover/item:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 dark:bg-primary/15 border-2 border-primary/50 dark:border-primary/30 mb-6 shadow-xl shadow-primary/30">
              <Rocket className="h-4 w-4 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
              <span className="text-sm font-semibold text-primary drop-shadow-lg">Skills & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              What I Bring to the Table
            </h2>
            <p className="text-foreground/80 dark:text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-md">
              A comprehensive toolkit of modern technologies and professional skills
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            <SkillCategory
              title="Technical Skills"
              skills={technicalSkills}
              icon={Code}
              gradient="from-blue-500 via-blue-600 to-indigo-600"
            />
            <SkillCategory
              title="Soft Skills"
              skills={softSkills}
              icon={Users}
              gradient="from-purple-500 via-purple-600 to-pink-600"
            />
          </div>

          {/* Technologies */}
          <Card className="relative bg-card/50 dark:bg-card/30 backdrop-blur-sm border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/10 transition-all duration-500 overflow-hidden mb-12 md:mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 dark:from-primary/5 dark:via-accent/5 dark:to-primary/5"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center justify-center gap-3 text-xl md:text-2xl text-foreground">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 bg-opacity-20 dark:bg-opacity-10 shadow-lg">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                </div>
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs md:text-sm py-2 px-4 bg-background/70 dark:bg-background/50 border border-primary/30 dark:border-border/50 hover:border-primary/60 dark:hover:border-primary/40 hover:bg-primary/20 dark:hover:bg-primary/10 hover:text-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20 transition-all duration-300 cursor-default text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/70 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.02] text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 dark:from-blue-500/8 dark:to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-500/40">
                  <Code className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">
                  Development Excellence
                </h4>
                <p className="text-sm md:text-base text-foreground/70 dark:text-muted-foreground leading-relaxed">
                  Clean, efficient code using best practices and modern development methodologies.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-accent/40 dark:border-accent/20 hover:border-accent/70 dark:hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/50 dark:hover:shadow-accent/30 hover:-translate-y-2 hover:scale-[1.02] text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/15 dark:from-purple-500/8 dark:to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/40">
                  <Palette className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-accent group-hover:drop-shadow-lg transition-all duration-300">
                  Design Thinking
                </h4>
                <p className="text-sm md:text-base text-foreground/70 dark:text-muted-foreground leading-relaxed">
                  User-centered design approach with attention to aesthetics and usability.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/20 hover:border-primary/70 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.02] text-center overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-blue-500/15 dark:from-indigo-500/8 dark:to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-indigo-500/40">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">
                  Collaboration
                </h4>
                <p className="text-sm md:text-base text-foreground/70 dark:text-muted-foreground leading-relaxed">
                  Strong communication and teamwork skills for successful project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;