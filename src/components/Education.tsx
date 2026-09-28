import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      duration: "2023 – 2026",
      institution: "Aishwarya College of Education, JNVU Jodhpur",
      description: "Currently pursuing BCA with focus on software development and web technologies"
    },
    {
      degree: "12th Board – 75%",
      duration: "2022 – 2023",
      institution: "RBSE Ajmer",
      description: "Completed higher secondary education with strong performance"
    },
    {
      degree: "10th Board – 92%",
      duration: "2020 – 2021",
      institution: "RBSE Ajmer",
      description: "Completed secondary education with excellent academic results"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-auto md:left-1/2 top-0 w-4 h-4 -ml-2 md:ml-0 md:-translate-x-1/2 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50" />

                <div className="card-glow bg-card p-6 rounded-2xl ml-8 md:ml-0">
                  <div className="flex items-center gap-2 mb-2 md:justify-end">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.duration}</span>
                  </div>
                  <div className="flex items-start gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="md:text-right">
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
