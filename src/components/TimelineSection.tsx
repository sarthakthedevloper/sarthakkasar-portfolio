
import { GraduationCap, Code, Brain, Rocket, Trophy, Target } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: '2024',
      title: 'Started IT Journey',
      description: 'Joined Vishwakarma Institute of Technology, Pune. Discovered my passion for coding and web development.',
      icon: GraduationCap,
      color: 'text-electric-purple',
      achievements: ['First HTML/CSS project', 'Learned programming fundamentals', 'Joined coding communities']
    },
    {
      year: '2024',
      title: 'First Major Web App',
      description: 'Built my first full-stack application using React and Node.js. Learned about databases and API integration.',
      icon: Code,
      color: 'text-neon-blue',
      achievements: ['Full-stack development', 'React expertise', 'Database design']
    },
    {
      year: '2025',
      title: 'AI Integration Era',
      description: 'Started working with AI APIs and machine learning. Integrated OpenAI and built intelligent applications.',
      icon: Brain,
      color: 'text-lime-green',
      achievements: ['OpenAI API mastery', 'AI-powered apps', 'Digital Health Workshop at IIT Bombay']
    },
    {
      year: '2025',
      title: 'SkillVerse Launch',
      description: 'Successfully launched SkillVerse, an AI-powered course platform. Achieved significant user engagement.',
      icon: Rocket,
      color: 'text-sunset-orange',
      achievements: ['Product launch', 'Payment integration', 'User acquisition']
    },
  ];

  const futurePlans = [
    { icon: Trophy, text: 'Master advanced AI/ML concepts', color: 'text-cyber-pink' },
    { icon: Target, text: 'Launch SaaS products', color: 'text-electric-purple' },
    { icon: Brain, text: 'Contribute to open source', color: 'text-neon-blue' },
    { icon: Rocket, text: 'Build innovative AI tools', color: 'text-lime-green' },
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-slate-deep/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">My Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From curious beginner to AI-powered web developer
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              <span className="neon-text">Timeline</span>
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-primary opacity-30"></div>
              
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className="timeline-item mb-12 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <div className="relative">
                      <div className="p-4 glass-card rounded-full">
                        <event.icon className={`h-6 w-6 ${event.color}`} />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass-card p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold neon-text">{event.year}</span>
                        <div className="w-8 h-0.5 bg-gradient-primary"></div>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                            <span className="text-sm text-foreground/80">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans & Stats */}
          <div className="space-y-8">
            {/* Future Plans */}
            <div className="glass-card p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">
                <span className="neon-text">What's Next?</span>
              </h3>
              <div className="space-y-4">
                {futurePlans.map((plan, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 glass-card hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <plan.icon className={`h-5 w-5 ${plan.color}`} />
                    <span className="text-foreground">{plan.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Stats */}
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">
                <span className="neon-text">Learning Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '2+', label: 'Years Coding', color: 'text-electric-purple' },
                  { number: '50+', label: 'Projects Built', color: 'text-neon-blue' },
                  { number: '10+', label: 'Technologies', color: 'text-lime-green' },
                  { number: '∞', label: 'Curiosity Level', color: 'text-sunset-orange' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="glass-card p-8 bg-gradient-primary/10 border-2 border-electric-purple/30">
              <h3 className="text-xl font-bold mb-4 text-electric-purple">
                🎯 Current Focus (2025)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-lime-green"></div>
                  <span className="text-foreground">Building AI-powered web applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                  <span className="text-foreground">Learning advanced React patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sunset-orange"></div>
                  <span className="text-foreground">Exploring machine learning integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
