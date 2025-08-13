import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, Database, Globe, Smartphone, Brain, 
  Shield, Cloud, GitBranch, Palette, Zap,
  ChevronRight, Star
} from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "electric-purple",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript/TypeScript", level: 85, icon: "🟨" },
      { name: "HTML5/CSS3", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "Next.js", level: 80, icon: "▲" }
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "neon-blue",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
      { name: "Supabase", level: 82, icon: "⚡" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "cyber-pink",
    skills: [
      { name: "Machine Learning", level: 75, icon: "🤖" },
      { name: "Computer Vision", level: 70, icon: "👁️" },
      { name: "NLP", level: 68, icon: "💬" },
      { name: "TensorFlow", level: 65, icon: "🧠" },
      { name: "Data Analysis", level: 80, icon: "📊" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Zap,
    color: "lime-green",
    skills: [
      { name: "Git/GitHub", level: 90, icon: "🔗" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "AWS/Cloud", level: 72, icon: "☁️" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "VS Code", level: 95, icon: "💻" }
    ]
  }
]

interface SkillProgressProps {
  skill: { name: string; level: number; icon: string }
  delay: number
}

const SkillProgress = ({ skill, delay }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-medium/30 rounded-full h-2 overflow-hidden">
        <div
          className="progress-bar h-full transition-all duration-1500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  )
}

const EnhancedSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section id="skills" className="py-20 bg-slate-deep/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="neon-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about learning and mastering cutting-edge technologies
          </p>
        </motion.div>

        {/* Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? 'glass-card border border-electric-purple/50 text-electric-purple'
                  : 'glass-card border border-slate-medium/30 hover:border-slate-medium/50'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Skills */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillProgress
              key={skill.name}
              skill={skill}
              delay={index * 200}
            />
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Recent <span className="neon-text">Certifications</span>
          </h3>
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto hover-glow transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-electric-purple">
                  Digital Health: Basics to Applications
                </h4>
                <p className="text-muted-foreground mb-3">
                  IIT Bombay - Koita Centre for Digital Health (KCDH)
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-sunset-orange" />
                      <span>Machine Learning in Healthcare</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-sunset-orange" />
                      <span>Computer Vision for Medical Imaging</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-sunset-orange" />
                      <span>NLP for Clinical Decision Making</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-sunset-orange" />
                      <span>Biostatistics with R-Studio</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://drive.google.com/file/d/11a9D0AsFUE7vcrJRgWDHFCJGym0cBsMd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric-purple hover:text-neon-blue transition-colors"
                  >
                    <span>View Certificate</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedSkillsSection