
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SkillVerse - Course Platform',
      description: '₹9 AI-powered course platform focused on time management and skill development. Integrated payment gateway and progress tracking.',
      image: project2,
      tags: ['Supabase', 'React', 'Cashfree API', 'Course Management'],
      category: 'web',
      demoLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Cricket Hub - Stats Visualizer',
      description: 'Real-time cricket performance visualization tool with interactive charts, player comparisons, and match analytics. Complete cricket statistics platform.',
      image: '/lovable-uploads/cdb57f09-85ad-43a3-957f-18a4116db8e0.png',
      tags: ['JavaScript', 'Chart.js', 'Cricket API', 'Data Visualization'],
      category: 'web',
      demoLink: 'https://www-cricket-hub.netlify.app',
      githubLink: '#',
      featured: true,
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'featured', label: 'Featured' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my completed work in web development
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`${
                activeFilter === filter.key
                  ? 'btn-glass-primary'
                  : 'btn-glass hover:scale-105'
              } transition-all duration-300`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => window.open(project.demoLink, '_blank')}
                    className="btn-glass-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="btn-glass-secondary"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="skill-badge bg-gradient-primary text-xs px-3 py-1">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-electric-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.demoLink, '_blank')}
                    className="btn-glass flex-1 group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Live
                  </Button>
                  <Button
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="btn-glass flex-1 group/btn"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Source
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/sarthakkasar', '_blank')}
            className="btn-glass-accent text-lg px-8 py-4 group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '5+', label: 'Projects Completed' },
            { number: '1+', label: 'AI Integrations' },
            { number: '10+', label: 'Tech Stacks Used' },
            { number: '100%', label: 'Learning Progress' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold neon-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
