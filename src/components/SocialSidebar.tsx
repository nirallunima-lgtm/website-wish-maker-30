import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhanushvardhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dhanushvardhan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dhanushvardhan', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/dhanushvardhan', label: 'Instagram' },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors p-2"
          aria-label={link.label}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;