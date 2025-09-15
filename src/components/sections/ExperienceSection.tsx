import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Play } from 'lucide-react';

const ExperienceSection = () => {
  const techStack = [
    'Firebase', 'NodeJS', 'Flutter', 'Express', 'Docker', 'Firebase',
    'JavaScript', 'MongoDB', 'FastAPI', 'Python', 'MySQL', 'Kotlin',
    'PostgreSQL', 'Java', 'Compose', 'NodeJS', 'Dart', 'Docker',
    'Java', 'Git', 'Redis', 'Postgres', 'Python', 'Redis', 'Kotlin',
    'Flutter', 'MySQL'
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
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-accent">02.</span> My Experience
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Sidebar - Companies */}
          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-semibold text-accent">Cloudflare</h3>
              <p className="text-muted-foreground">Freelancer</p>
            </div>
          </div>

          {/* Center - Experience Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-bold">CF</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
                    <p className="text-accent">@Cloudflare</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Developed the Zero Trust Desktop Client in Flutter and optimized the Rust daemon for
                  the client, ensuring secure and efficient data transfer.
                </p>
              </CardContent>
            </Card>

            {/* Tech Stack Word Cloud */}
            <div className="relative h-64 bg-card/20 rounded-lg p-6 overflow-hidden">
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 opacity-60">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-accent hover:text-accent-foreground transition-colors"
                    style={{
                      fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                      opacity: Math.random() * 0.4 + 0.6,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card/50 border-border/50 group cursor-pointer hover:bg-card/70 transition-colors">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-2 right-2">
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Play size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">{achievement.title}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;