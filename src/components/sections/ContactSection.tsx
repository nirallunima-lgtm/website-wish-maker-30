import { Card, CardContent } from '../ui/card';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhanushvardhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dhanushvardhan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/dhanushvardhan', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/dhanushvardhan', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-lg">What's Next?</p>
            <h2 className="text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you
            </p>
          </div>

          <div className="absolute top-16 right-16 text-6xl">
            🤝
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8">Dhanush Vardhan</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card hover:bg-accent hover:text-accent-foreground transition-colors rounded-full flex items-center justify-center"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;