import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, GraduationCap, Briefcase, Award, Sparkles, TrendingUp } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Mechanical',
      school: 'Acropolis Institute Of Technology & Research',
      period: '2021 - 2024',
    },
    {
      degree: 'Diploma in Mechanical',
      school: 'Acropolis Institute Of Technology & Research',
      period: '2018-2021',
    }
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Enprosys Infotech',
      period: 'OCT 2025 - PRESENT',
      achievements: [
        'Development and implementation Frontend part of  application',
        'Implemented code refactoring practices, improving the application maintainability and reducing potential errors',
        'Implemented API Intergration in the Easy & Maintainable format'
      ],
      current: true
    },
    {
      title: 'Full Stack Developer',
      company: 'Ypsilon IT Solutions Pvt Ltd',
      period: 'DEC 2024 - JUN 2025',
      achievements: [
        'Development and implementation Full Stack application',
        'Implemented code refactoring practices, improving the application maintainability and reducing potential errors',
        'Understanding of web services & software development process'
      ],
      current: false
    },
    {
      title: 'Hackathon Participant',
      company: 'Wittyhacks3.0 Datacode',
      period: 'APR 2023-APR 2023',
      achievements: [
        'Delivered 15+ client projects on time',
        'Reduced server response time by 60%',
        'Mentored 2 intern developers'
      ],
      current: false
    },
  ];

  const certifications = [
    'Full Stack Dot Net Developer',
    'Full Stack Dot Net Intern',
    'Techpathshala Javascript Bootcamp',
    'Techpathshala React Bootcamp',
    'Datacode Wittyhacks Participant Certificate',
    'Flipkart5 Grid 5.0 Participant Certificate',
    'National Level Gold Medal Winner in Softball',
    'District Level Gold Medal Winner in Softball',
    'Nation Level Best Player Award Winner in Softball'
  ];

  return (
    <section id="resume" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 dark:bg-primary/15 border-2 border-primary/50 dark:border-primary/30 mb-6 shadow-xl shadow-primary/30">
              <TrendingUp className="h-4 w-4 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
              <span className="text-sm font-semibold text-primary drop-shadow-lg">Professional Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Experience & Education
            </h2>
            <p className="text-foreground/80 dark:text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 drop-shadow-md">
              A timeline of growth, learning, and professional achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
            {/* Education Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-primary/20 dark:bg-primary/10 border-2 border-primary/40 dark:border-primary/20 shadow-lg shadow-primary/30">
                  <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground drop-shadow-lg">Education</h3>
              </div>
              
              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden sm:block"></div>
                
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="relative bg-card/50 dark:bg-card/30 backdrop-blur-sm border-2 border-primary/40 dark:border-primary/10 hover:border-primary/70 dark:hover:border-primary/40 hover:bg-card/70 dark:hover:bg-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 dark:hover:shadow-primary/20 hover:-translate-y-2 sm:ml-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[3.25rem] top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-xl shadow-primary/60 hidden sm:block animate-pulse"></div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors drop-shadow-lg">
                        {edu.degree}
                      </CardTitle>
                      <div className="flex items-center text-foreground/70 dark:text-muted-foreground text-xs md:text-sm gap-2 mt-2">
                        <CalendarDays className="h-4 w-4 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <p className="text-primary font-semibold mt-2 text-sm md:text-base drop-shadow-lg">{edu.school}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-3 rounded-xl bg-accent/20 dark:bg-accent/10 border-2 border-accent/40 dark:border-accent/20 shadow-lg shadow-accent/30">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground drop-shadow-lg">Experience</h3>
              </div>
              
              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 hidden sm:block"></div>
                
                {experience.map((exp, index) => (
                  <Card 
                    key={index} 
                    className="relative bg-card/50 dark:bg-card/30 backdrop-blur-sm border-2 border-accent/40 dark:border-accent/10 hover:border-accent/70 dark:hover:border-accent/40 hover:bg-card/70 dark:hover:bg-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/40 dark:hover:shadow-accent/20 hover:-translate-y-2 sm:ml-12"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[3.25rem] top-8 w-5 h-5 rounded-full ${exp.current ? 'bg-accent animate-pulse shadow-accent/80' : 'bg-accent shadow-accent/60'} border-4 border-background shadow-xl hidden sm:block`}></div>
                    
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-gradient-to-r from-accent to-primary border-0 shadow-xl shadow-accent/50 text-xs animate-pulse">
                          <Sparkles className="h-3 w-3 mr-1 drop-shadow-lg" />
                          Current
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors drop-shadow-lg">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center text-foreground/70 dark:text-muted-foreground text-xs md:text-sm gap-2 mt-2">
                        <CalendarDays className="h-4 w-4 text-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <p className="text-accent font-semibold mt-2 text-sm md:text-base drop-shadow-lg">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs md:text-sm text-foreground/70 dark:text-muted-foreground flex items-start group/item">
                            <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent to-primary rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 group-hover/item:shadow-xl group-hover/item:shadow-accent/60 transition-all duration-300"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 dark:from-primary/5 dark:via-accent/5 dark:to-primary/5 rounded-2xl md:rounded-3xl blur-xl"></div>
            <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-primary/30 dark:border-primary/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 md:mb-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 border-2 border-primary/40 dark:border-primary/20 shadow-xl shadow-primary/40">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-center sm:text-left text-foreground drop-shadow-lg">Certifications & Achievements</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-xs md:text-sm py-3 md:py-4 px-4 md:px-6 bg-background/70 dark:bg-background/50 backdrop-blur-sm border-primary/30 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/50 hover:bg-primary/20 dark:hover:bg-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer text-foreground text-center justify-center"
                  >
                    <Award className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary flex-shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="break-words">{cert}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;