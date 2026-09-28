import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Marwar Handicraft",
      category: "Shopify Development",
      description: "An e-commerce store built with Shopify, featuring custom theme modifications, responsive catalog design, product showcases, and a seamless checkout experience for artisanal handcrafted items.",
      tech: ["Shopify", "Liquid", "E-Commerce", "CSS3"],
      liveUrl: "https://www.marwarhandicraft.com/",
      iframeUrl: "/previews/marwar.html"
    },
    {
      title: "Petabyte Innovations",
      category: "Frontend Web Development",
      description: "A modern, high-performance company landing page and web presence featuring dynamic layout sections, interactive UI elements, and sleek responsive design.",
      tech: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind"],
      liveUrl: "https://petabyteinnovations.in/",
      iframeUrl:"https://petabyteinnovations.in/"
    },
    {
      title: "Vanshitex",
      category: "MERN Stack Web Application",
      description: "A full-stack MERN web application built for business operations and digital showcase, featuring dynamic content rendering, RESTful APIs, and user-centric web design.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://vanshitex.com/",
      iframeUrl: "https://vanshitex.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of real-world projects showcasing my skills in full-stack, frontend, and e-commerce development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glow bg-card rounded-2xl overflow-hidden group animate-fade-in flex flex-col justify-between border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                {/* Browser Mockup Header with Live Iframe Preview */}
                <div className="h-56 relative overflow-hidden bg-secondary/50 border-b border-border">
                  {/* Browser Top Navigation Bar */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-background/90 backdrop-blur-md border-b border-border z-20 flex items-center px-3 gap-1.5 justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-muted/60 hover:bg-muted px-2 py-0.5 rounded text-[11px] text-muted-foreground font-mono truncate max-w-[190px] transition-colors"
                    >
                      <Globe className="w-3 h-3 flex-shrink-0 text-primary" />
                      <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                    </a>
                    <div className="w-8" />
                  </div>

                  {/* Live Iframe Preview Container */}
                  <div className="w-full h-full pt-7 relative overflow-hidden bg-background">
                    <iframe
                      src={project.iframeUrl}
                      title={`${project.title} Live Preview`}
                      className="w-[200%] h-[200%] border-0 scale-50 origin-top-left absolute top-7 left-0 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Fade Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-9 right-3 z-10">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-md border border-border rounded-full text-xs font-semibold text-foreground shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-lg text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button size="sm" className="w-full gradient-bg hover:opacity-90 transition-all font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
