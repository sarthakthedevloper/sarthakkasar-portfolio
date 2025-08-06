import { Code2, Brain, Users, Trophy } from 'lucide-react';

const AboutSection = () => {
  const quickFacts = [
    { icon: Code2, label: "VIT Pune – IT", color: "text-electric-purple" },
    { icon: Brain, label: "Coder (C++, JS, Python)", color: "text-neon-blue" },
    { icon: Users, label: "AI Enthusiast", color: "text-lime-green" },
    { icon: Trophy, label: "Cricket Lover", color: "text-sunset-orange" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Who Am I?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-electric-purple">My Journey</h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm a passionate tech learner and web developer currently pursuing Information Technology 
                at <span className="text-neon-blue font-medium">Vishwakarma Institute of Technology, Pune</span>. 
                I specialize in blending AI with modern web technologies to create meaningful, intelligent, 
                and scalable web applications.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Off-screen, you'll often find me on the cricket field or deep-diving into the latest tech trends. 
                I believe in continuous learning and always strive to explore what's next.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-lime-green">What Fuels Me?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏏</span>
                  <p className="text-foreground/90">
                    <strong>Cricket</strong> is more than a game — it sharpens my focus, teamwork, and strategy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <p className="text-foreground/90">
                    I believe in <strong>learning something new every week</strong>, whether it's a tech stack, 
                    soft skill, or building a new idea.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="text-foreground/90">
                    <strong>Always exploring</strong> the intersection of AI and web development to create 
                    innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Facts */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                <span className="neon-text">Quick Facts</span>
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {quickFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 glass-card hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-primary`}>
                      <fact.icon className={`h-6 w-6 text-white`} />
                    </div>
                    <span className="text-lg font-medium text-foreground">{fact.label}</span>
                  </div>
                ))}
              </div>

              {/* Learning Box */}
              <div className="mt-8 p-6 glass-card bg-gradient-primary/10 border-2 border-electric-purple/30">
                <h4 className="text-xl font-semibold mb-3 text-electric-purple">
                  🎯 Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Advanced React Patterns</span>
                  <span className="skill-badge">LLM Integration</span>
                  <span className="skill-badge">Three.js</span>
                  <span className="skill-badge">Docker</span>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="mt-6 p-4 glass-card bg-gradient-accent/10 border border-sunset-orange/30 rounded-lg">
                <p className="text-sm text-foreground/80 italic text-center">
                  💡 <strong>Fun Fact:</strong> I once built a website at 2 AM because I couldn't stop thinking about it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;