import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-accent flex items-center gap-2">
              Hello there <span className="wave">👋</span>
            </p>
            <h1 className="text-6xl font-bold">
              I'm <span className="gradient-text">Dhanush</span>
            </h1>
            <h2 className="text-4xl font-light text-muted-foreground">
              a <span className="text-accent">Flutter Mobile App Dev</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mobile App Developer | Winner of 5+ Hackathons | Helping Startups
            Soar 🚀 | FOSS Contributor | Fulltime Indie Hacker
          </p>

          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Resume
          </Button>
        </div>

        {/* Right Content - Profile Image with Tech Icons */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main Profile Circle */}
            <div className="w-80 h-80 rounded-full border-4 border-accent p-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Dhanush Vardhan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full flex items-center justify-center float-animation">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute top-12 -left-8 w-14 h-14 bg-card rounded-full flex items-center justify-center float-animation" style={{ animationDelay: '1s' }}>
              <span className="text-xl">🔥</span>
            </div>
            <div className="absolute bottom-12 -right-8 w-12 h-12 bg-card rounded-full flex items-center justify-center float-animation" style={{ animationDelay: '2s' }}>
              <span className="text-lg">👑</span>
            </div>
            <div className="absolute -bottom-4 left-8 w-16 h-16 bg-card rounded-full flex items-center justify-center float-animation" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">🐍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;