const AboutSection = () => {
  const skills = [
    { name: 'Flutter', category: 'left' },
    { name: 'NodeJS', category: 'left' },
    { name: 'MySQL', category: 'left' },
    { name: 'Kotlin', category: 'right' },
    { name: 'Redis', category: 'right' },
    { name: 'Postgres', category: 'right' },
  ];

  return (
    <section id="aboutme" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-accent">01.</span> About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl border-4 border-accent p-4">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Dhanush Vardhan - About"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi there! I'm Dhanush Vardhan, a{' '}
                <span className="text-accent">software engineer</span> who loves diving into mobile app development. My
                toolbox is packed with cool stuff like Flutter, Node.js, Redis, and more...
              </p>

              <p>
                I've also had some awesome times speaking at{' '}
                <span className="text-accent">Google IO Extended 2022</span>,{' '}
                <span className="text-accent">Sunhacks 2023</span> and{' '}
                <span className="text-accent">Codex Evoke</span>, where I talked about Flutter 3.0 and Firebase. 
                Sharing what I know and learning from others is something I really enjoy.
              </p>

              <p>
                Oh, and hackathons? Totally my thing. I've snagged wins at{' '}
                <span className="text-accent">CalHacks</span> and{' '}
                <span className="text-accent">HackPrinceton</span>, which were both super exciting and challenging.
              </p>

              <p>
                In a nutshell, I'm all about building neat apps, sharing tech insights, and always up for a good coding
                challenge!
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === 'left')
                  .map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <span className="text-accent">»</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
              </div>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === 'right')
                  .map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <span className="text-accent">»</span>
                      <span>{skill.name}</span>
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

export default AboutSection;