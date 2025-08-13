import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Professor, IIT Bombay",
    content: "Sarthak's work in the Digital Health workshop was exceptional. His understanding of ML applications in healthcare shows great promise.",
    avatar: "👨‍⚕️"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Tech Lead, Microsoft",
    content: "Working with Sarthak on various projects, I've seen his dedication to learning and building innovative solutions. Highly recommended!",
    avatar: "👩‍💼"
  },
  {
    id: 3,
    name: "Alex Thompson",
    role: "Senior Developer, Google",
    content: "His cricket analytics platform showcases excellent technical skills and attention to detail. A talented developer to watch.",
    avatar: "👨‍💻"
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-deep/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="neon-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from mentors, collaborators, and fellow developers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 rounded-2xl relative"
            >
              <Quote className="absolute top-6 left-6 h-8 w-8 text-electric-purple/50" />
              
              <div className="text-center">
                <div className="text-4xl mb-6">{testimonials[currentIndex].avatar}</div>
                <blockquote className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-semibold text-electric-purple">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 glass-card rounded-full hover:border-electric-purple/50 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-electric-purple' 
                      : 'bg-slate-medium hover:bg-slate-medium/80'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 glass-card rounded-full hover:border-electric-purple/50 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection