import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Globe, MessageSquare, Code, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses powered by cutting-edge AI models. No waiting, no queues.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your conversations stay private. We don't store or train on your data.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description: "Works on any device, any browser. No downloads or installations required.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat naturally like you would with a friend. No complex prompts needed.",
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and understand code in any programming language.",
  },
  {
    icon: Lightbulb,
    title: "Creative Partner",
    description: "Brainstorm ideas, write content, and unlock your creative potential.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl border-gradient hover:glow-subtle transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-card to-background rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <feature.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need.{" "}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI capabilities without the complexity or cost.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
