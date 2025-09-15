import { Card, CardContent } from '../ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Shopwise',
      description: 'Shopwise is your ultimate shopping companion that helps you find the best deals and save money effortlessly 🛒.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      mockup: true
    },
    {
      title: 'Blik',
      description: 'An app that predicts crypto and analyzes prices using AI 🔮!',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      mockup: true
    },
    {
      title: 'MedicOn',
      description: 'Medicon brings medical consultations to your home!',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      gradient: 'from-blue-400 to-blue-600',
      mockup: true
    },
    {
      title: 'HeartPal',
      description: 'Monitor your heart arrhythmias right from your home using AI!',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      gradient: 'from-red-400 to-pink-500',
      mockup: true
    },
    {
      title: 'EdComposer',
      description: 'AI-powered video generation tool that creates personalized educational content in your own language.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      gradient: 'from-indigo-500 to-purple-600',
      mockup: false
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-accent">03.</span> Cool Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-border/50 group hover:bg-card/70 transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-6`}>
                  {project.mockup ? (
                    <div className="relative h-full flex items-center justify-center">
                      <div className="relative">
                        {/* Phone mockup */}
                        <div className="w-32 h-56 bg-black rounded-3xl p-2 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Second phone for some projects */}
                        {(project.title === 'Shopwise' || project.title === 'Blik' || project.title === 'MedicOn') && (
                          <div className="absolute -right-8 top-4 w-32 h-56 bg-black rounded-3xl p-2 shadow-2xl">
                            <div className="w-full h-full bg-gray-800 rounded-2xl"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg opacity-80"
                      />
                    </div>
                  )}

                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <Github size={16} className="text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;