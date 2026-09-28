import { MapPin, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="card-glow bg-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ambitious and driven Software Developer with a strong foundation in web development and programming. 
                Skilled in <span className="text-primary font-semibold">HTML, CSS, JavaScript, React.js</span> with 
                hands-on experience in building responsive websites and applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Adept at meeting deadlines, problem-solving, and continuously improving through learning and innovation. 
                Passionate about creating elegant solutions to complex problems and always eager to explore new technologies.
              </p>
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-4 animate-slide-in-right">
            <div className="card-glow bg-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-lg font-semibold">Jodhpur, Rajasthan</div>
                </div>
              </div>
            </div>

            <div className="card-glow bg-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                  <div className="text-lg font-semibold">English, Hindi</div>
                </div>
              </div>
            </div>

            <div className="card-glow bg-card p-6 rounded-2xl">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Professional Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {["Full Stack Development", "Web Design", "Problem Solving", "Continuous Learning"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
