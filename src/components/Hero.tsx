import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Nidhi Jangid
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text">
                MERN Stack Web Developer & Gen AI Web Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                I build modern, responsive, and user-friendly web applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="/Nidhi_Jangid_Resume.pdf"
                download="Nidhi_Jangid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-all">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-primary/30 hover:bg-primary/10"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative animate-slide-in-right flex justify-center">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-4 border-primary/30 shadow-2xl">
                <img 
                  src={profilePicture} 
                  alt="Nidhi Jangid - Profile Picture" 
                  className="w-full h-auto max-w-sm object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
