
import { useState } from 'react';
import { Code, Database, Palette, Zap, Award } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const skillCategories = {
    web: {
      title: 'Web Development',
      icon: Code,
      color: 'text-electric-purple',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'TailwindCSS', level: 92 },
        { name: 'TypeScript', level: 80 },
      ]
    },
    ai: {
      title: 'AI & Backend',
      icon: Zap,
      color: 'text-neon-blue',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'OpenAI API', level: 88 },
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'TensorFlow (Basics)', level: 70 },
        { name: 'LangChain', level: 75 },
      ]
    },
    database: {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-lime-green',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'Supabase', level: 90 },
        { name: 'MySQL', level: 78 },
        { name: 'Vercel', level: 92 },
        { name: 'AWS (Basics)', level: 65 },
      ]
    },
    tools: {
      title: 'Tools & DSA',
      icon: Palette,
      color: 'text-sunset-orange',
      skills: [
        { name: 'Data Structures & Algorithms', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 82 },
        { name: 'Postman', level: 85 },
        { name: 'Chrome DevTools', level: 88 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-deep/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Skills & Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'btn-glass-primary'
                    : 'glass-card hover:scale-105'
                }`}
              >
                <IconComponent className={`h-5 w-5 ${category.color}`} />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 animate-scale-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-medium rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="neon-text">Programming Languages</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'JavaScript', color: 'bg-yellow-500' },
              { name: 'Python', color: 'bg-blue-500' },
              { name: 'TypeScript', color: 'bg-blue-600' },
              { name: 'C++', color: 'bg-purple-600' },
              { name: 'SQL', color: 'bg-orange-500' },
              { name: 'HTML/CSS', color: 'bg-red-500' },
            ].map((lang) => (
              <div
                key={lang.name}
                className="skill-badge flex items-center gap-2 px-4 py-2"
              >
                <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                {lang.name}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="neon-text flex items-center justify-center gap-2">
              <Award className="h-6 w-6" />
              Certifications & Learning
            </span>
          </h3>
          
          {/* Digital Health Certification - Featured */}
          <div className="mb-8 p-6 glass-card bg-gradient-primary/10 border-2 border-electric-purple/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-primary">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-electric-purple mb-2">
                  Digital Health: Basics to Applications
                </h4>
                <p className="text-neon-blue font-medium mb-2">
                  Koita Centre for Digital Health (KCDH), IIT Bombay
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  March 31st - April 1st, 2025 • Two-Day Hands-On Workshop
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-lime-green mb-2">Key Topics Covered:</h5>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Machine Learning in Healthcare</li>
                      <li>• Computer Vision for Medical Imaging</li>
                      <li>• NLP for Clinical Decision-Making</li>
                      <li>• Biostatistics with R-Studio</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sunset-orange mb-2">Hands-On Experience:</h5>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• HAM10000 Dataset Analysis</li>
                      <li>• Transfer Learning with ResNet50</li>
                      <li>• BERT-based Medical NLP</li>
                      <li>• Healthcare Data Preprocessing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://drive.google.com/file/d/11a9D0AsFUE7vcrJRgWDHFCJGym0cBsMd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-badge bg-gradient-primary text-white hover:scale-105 transition-transform"
                  >
                    📜 View Certificate
                  </a>
                  <span className="skill-badge">🏥 AI for Social Good</span>
                  <span className="skill-badge">🔬 Healthcare Innovation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-electric-purple">Currently Learning</h4>
              <div className="space-y-2">
                <div className="skill-badge">Data Structures & Algorithms</div>
                <div className="skill-badge">Advanced React Patterns</div>
                <div className="skill-badge">System Design Fundamentals</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-neon-blue">Next Goals</h4>
              <div className="space-y-2">
                <div className="skill-badge">AWS Cloud Practitioner</div>
                <div className="skill-badge">Machine Learning Advanced</div>
                <div className="skill-badge">Full Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
