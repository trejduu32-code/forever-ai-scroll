import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Star, Globe, Heart, Sparkles, Zap } from "lucide-react";

const milestones = [
  {
    icon: Sparkles,
    date: "The Beginning",
    title: "A Dream is Born",
    description: "Started with a simple idea: AI should be free and accessible to everyone, regardless of their financial situation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    date: "The Challenge",
    title: "Humble Hardware",
    description: "Built on a GeForce 210, 4GB RAM, and 2-core CPU. Proving that innovation doesn't require millions in infrastructure.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    date: "Going Global",
    title: "200+ Languages",
    description: "Expanded to support over 200 languages, including endangered and minority languages for cultural preservation.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    date: "Community",
    title: "Thousands of Users",
    description: "Growing community of students, creators, developers, and dreamers using free AI every day.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Star,
    date: "Recognition",
    title: "Making an Impact",
    description: "Recognized for democratizing AI access and proving that free can also mean excellent.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Rocket,
    date: "The Future",
    title: "Just Getting Started",
    description: "Continuous improvements, more features, more languages. Always free. Always for everyone.",
    color: "from-accent to-blue-400",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Our Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The xlnk AI{" "}
            <span className="text-gradient">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From humble beginnings to global impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple-500 to-accent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <motion.div
                className={`flex-1 p-6 rounded-2xl border-gradient bg-card/50 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <p className="text-sm text-accent mb-2">{milestone.date}</p>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </motion.div>

              {/* Icon */}
              <motion.div
                className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center z-10`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <milestone.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Empty space for other side */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
