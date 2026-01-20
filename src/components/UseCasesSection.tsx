import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, PenTool, Code2, Heart, Users, Rocket, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Get homework help, understand complex topics, and ace your exams with AI tutoring.",
    examples: ["Essay writing", "Math problems", "Research assistance", "Language learning"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Boost productivity with AI-powered assistance for work tasks and projects.",
    examples: ["Email drafting", "Report writing", "Data analysis", "Presentations"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: PenTool,
    title: "Creators",
    description: "Unleash your creativity with AI that helps you write, design, and create.",
    examples: ["Content creation", "Story writing", "Brainstorming", "Social media"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Code faster with AI pair programming, debugging, and code reviews.",
    examples: ["Code generation", "Bug fixing", "Documentation", "Learning new languages"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Get advice, learn new skills, and explore topics that interest you.",
    examples: ["Life advice", "Health tips", "Hobby exploration", "Self-improvement"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Small Business",
    description: "AI assistance for entrepreneurs and small business owners.",
    examples: ["Marketing copy", "Customer support", "Business plans", "Social strategy"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Move fast with AI that helps you build, iterate, and grow.",
    examples: ["MVP planning", "Pitch decks", "Market research", "Product ideas"],
    color: "from-cyan-500 to-sky-500",
  },
  {
    icon: BookOpen,
    title: "Researchers",
    description: "Accelerate your research with AI-powered analysis and insights.",
    examples: ["Literature review", "Data interpretation", "Hypothesis testing", "Paper writing"],
    color: "from-slate-500 to-zinc-500",
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            style={{
              left: `${(i % 3) * 40}%`,
              top: `${Math.floor(i / 3) * 50}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">Built for Everyone</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Who Uses{" "}
            <span className="text-gradient">xlnk AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From students to CEOs, creators to developers — AI for everyone, free forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl border-gradient bg-card/50 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <useCase.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>

              <div className="flex flex-wrap gap-2">
                {useCase.examples.map((example, i) => (
                  <motion.span
                    key={example}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                  >
                    {example}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
