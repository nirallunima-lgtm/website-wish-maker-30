import { Card, CardContent } from '../ui/card';

const BlogsSection = () => {
  const blogs = [
    {
      date: '2024-10-25',
      title: 'The Story of Devlabs 🤠',
      description: 'How a group of 10 friends started something that shook Arizona\'s startup scene.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
      readMore: true
    },
    {
      date: 'FEB 15, 2024',
      title: 'Power your Flutter App with Gemini AI ✨',
      description: 'Picture this: your Flutter app, but with a superpower of Google\'s new AI. I\'m talking text that writes itself, images that tell their own stories, and code that practically completes itself!',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
      readMore: true
    }
  ];

  return (
    <section id="blogs" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16">
          <span className="text-accent">04.</span> Blogs
        </h2>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 md:h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="text-accent text-sm mb-2">{blog.date}</div>
                    <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {blog.description}
                    </p>
                    {blog.readMore && (
                      <button className="text-accent hover:underline">
                        Read more
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;