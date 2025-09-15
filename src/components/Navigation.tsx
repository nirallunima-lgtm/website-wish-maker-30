import { Button } from './ui/button';

const Navigation = () => {
  const menuItems = ['Home', 'About Me', 'Experience', 'Blogs', 'Mentorship'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-accent font-bold text-xl">&lt;DV/&gt;</div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8 bg-card/20 backdrop-blur-sm border border-border/20 rounded-full px-8 py-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground hover:text-accent transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <Button 
          variant="outline" 
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;