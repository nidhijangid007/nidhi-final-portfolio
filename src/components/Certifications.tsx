import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Core Java",
      issuer: "Open Innovation Lab Learning",
      duration: "July 2023 – October 2023",
      description: "Completed comprehensive Java programming course covering OOP concepts, data structures, and application development"
    },
    {
      title: "MERN Stack Development",
      issuer: "Open Innovation Lab Learning",
      duration: "December 2023 – July 2024",
      description: "Intensive full-stack web development program covering MongoDB, Express.js, React.js, and Node.js"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Continuous learning through professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-glow bg-card p-8 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{cert.duration}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
