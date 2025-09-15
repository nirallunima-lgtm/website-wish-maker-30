import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Play } from 'lucide-react';

const ExperienceSection = () => {
  const techStack = [
    { name: 'Flutter', size: 'text-2xl', delay: '0s' },
    { name: 'Firebase', size: 'text-lg', delay: '0.5s' },
    { name: 'NodeJS', size: 'text-xl', delay: '1s' },
    { name: 'Python', size: 'text-2xl', delay: '1.5s' },
    { name: 'JavaScript', size: 'text-lg', delay: '2s' },
    { name: 'Docker', size: 'text-xl', delay: '2.5s' },
    { name: 'MongoDB', size: 'text-lg', delay: '3s' },
    { name: 'PostgreSQL', size: 'text-xl', delay: '0.8s' },
    { name: 'Kotlin', size: 'text-lg', delay: '1.3s' },
    { name: 'Java', size: 'text-xl', delay: '1.8s' },
    { name: 'Redis', size: 'text-lg', delay: '2.3s' },
    { name: 'FastAPI', size: 'text-xl', delay: '2.8s' },
    { name: 'Express', size: 'text-lg', delay: '0.3s' },
    { name: 'MySQL', size: 'text-xl', delay: '0.7s' },
    { name: 'Git', size: 'text-lg', delay: '1.2s' },
    { name: 'Dart', size: 'text-xl', delay: '1.7s' },
    { name: 'Compose', size: 'text-lg', delay: '2.2s' }
  ];

  const achievements = [
    {
      title: '#1 Winner at Princeton (Vibewire Track)',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
      type: 'hackprinceton'
    },
    {
      title: '#3 Winner at Calhacks (MindsDB)',
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=200&fit=crop',
      type: 'calhacks'
    },
    {
      title: '#1 Winner at Massey Hacks',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
      type: 'massey'
    },
    {
      title: 'Invited to Pinnacle (Olympics of Hackathons)',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=200&fit=crop',
      type: 'pinnacle'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-accent">02.</span> My Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Companies Timeline */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary opacity-30"></div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>
                <div className="gradient-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-accent mb-2">Cloudflare</h3>
                  <p className="text-muted-foreground mb-2">Software Engineering Intern</p>
                  <p className="text-sm text-muted-foreground">2023 - Present</p>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full"></div>
                </div>
                <div className="gradient-border rounded-xl p-6 opacity-60">
                  <h3 className="text-xl font-semibold text-primary mb-2">Freelancer</h3>
                  <p className="text-muted-foreground mb-2">Mobile App Developer</p>
                  <p className="text-sm text-muted-foreground">2022 - 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Experience Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Experience Card */}
            <div className="gradient-border rounded-2xl p-8 card-hover">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <span className="text-background font-bold text-lg">CF</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Software Engineering Intern</h3>
                  <p className="text-accent text-lg font-medium mb-2">@Cloudflare</p>
                  <p className="text-muted-foreground">
                    Developed the Zero Trust Desktop Client in Flutter and optimized the Rust daemon for
                    the client, ensuring secure and efficient data transfer. Improved performance by 40%
                    and enhanced security protocols.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Rust</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Zero Trust</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Security</span>
              </div>
            </div>

            {/* Enhanced Tech Stack Cloud */}
            <div className="gradient-border rounded-2xl p-8 overflow-hidden relative">
              <h3 className="text-xl font-semibold mb-6 text-center">Tech Stack Mastery</h3>
              <div className="relative h-48 flex flex-wrap items-center justify-center gap-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`${tech.size} text-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer tech-float font-semibold`}
                    style={{
                      animationDelay: tech.delay,
                      opacity: 0.7,
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.opacity = '1';
                      target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.opacity = '0.7';
                      target.style.transform = 'scale(1)';
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Achievement Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-center mb-8">Hackathon Victories 🏆</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="gradient-border rounded-2xl overflow-hidden card-hover group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                      <div className="absolute bottom-3 right-3">
                        <Button size="sm" className="bg-accent hover:bg-accent/90 text-background w-10 h-10 p-0 rounded-full">
                          <Play size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-lg text-accent">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mt-2">View project details</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;