import { useState } from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

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
      title: 'Tools & Design',
      icon: Palette,
      color: 'text-sunset-orange',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 82 },
        { name: 'Postman', level: 85 },
        { name: 'Chrome DevTools', level: 88 },
        { name: 'Framer Motion', level: 80 },
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
          <h3 className="text-2xl font-bold text-center mb-6">
            <span className="neon-text">Certifications & Learning</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-electric-purple">Completed</h4>
              <div className="space-y-2">
                <div className="skill-badge">React Developer Certification</div>
                <div className="skill-badge">JavaScript ES6+ Mastery</div>
                <div className="skill-badge">AI Integration Fundamentals</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-neon-blue">In Progress</h4>
              <div className="space-y-2">
                <div className="skill-badge">AWS Cloud Practitioner</div>
                <div className="skill-badge">Advanced React Patterns</div>
                <div className="skill-badge">Machine Learning Basics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;