import { Trophy, FileText, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: "Top Finalist — National Level Hackathon",
    org: "NMIET Pune",
    description:
      "Reached the top finalist stage in a national-level hackathon, competing against strong teams from across India.",
    tags: ["Hackathon", "Finalist", "National Level"],
    icon: Trophy,
    color: "electric-purple",
  },
  {
    title: "Final Round Selection — XThub",
    org: "Among 450+ Teams",
    description:
      "Selected in the final round among 450+ participating teams for problem-solving and solution design.",
    tags: ["Competition", "Shortlisted", "Top Round"],
    icon: Target,
    color: "neon-blue",
  },
  {
    title: "Research Paper Published — Springer Conference",
    org: "Natural Disaster Response System",
    description:
      "Published a research paper in a Springer conference focused on a natural disaster response system, contributing to tech-driven disaster management.",
    tags: ["Research", "Publication", "Springer"],
    icon: FileText,
    color: "lime-green",
  },
];

const stats = [
  { value: "3", label: "Major Recognitions" },
  { value: "1", label: "Research Publication" },
  { value: "2", label: "Competitive Selections" },
];

const AchievementsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-24 px-6 md:px-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Achievements{' '}
            <span className="neon-text">That Matter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A few milestones that reflect my work in competitions, research, and product building.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold neon-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-electric-purple/10 group"
              >
                {/* Top row */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors`}>
                    <Icon className={`h-5 w-5 text-${item.color}`} />
                  </div>
                  <span className="rounded-full bg-electric-purple/15 px-3 py-1 text-xs font-medium text-electric-purple">
                    #{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-electric-purple/80">{item.org}</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
