import { Code2, Server, Wrench, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "FrontEnd",
      skills: ["HTML", "CSS", "Javascript", "React JS", "Tailwind", "Bootstrap"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "BackEnd",
      skills: ["Node JS", "Express JS", "Mongo DB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Vs Code", "Antigravity", "Cursor", "Postman"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Layers,
      title: "Other Skills",
      skills: ["Core Java", "SQL", "MYSQL", "Canva"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-glow bg-card p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
