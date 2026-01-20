import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Globe, MessageSquare, Code, Lightbulb, Brain, Palette, Calculator, FileText, Music, Camera } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses powered by cutting-edge AI models. No waiting, no queues.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your conversations stay private. We don't store or train on your data.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "200+ Languages",
    description: "Communicate in your native language, dialect, or any language you prefer.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Chat naturally like you would with a friend. No complex prompts needed.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Code Assistant",
    description: "Write, debug, and understand code in any programming language.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Creative Partner",
    description: "Brainstorm ideas, write content, and unlock your creative potential.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Brain,
    title: "Deep Understanding",
    description: "Context-aware responses that understand nuance and complexity.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Palette,
    title: "Design Helper",
    description: "Get design suggestions, color palettes, and creative direction.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Calculator,
    title: "Math & Science",
    description: "Solve equations, explain concepts, and help with research.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description: "Summarize, analyze, and extract insights from any text.",
    color: "from-slate-500 to-zinc-500",
  },
  {
    icon: Music,
    title: "Creative Writing",
    description: "Stories, poems, lyrics, scripts — bring your ideas to life.",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: Camera,
    title: "Image Understanding",
    description: "Describe, analyze, and discuss images with AI vision.",
    color: "from-sky-500 to-blue-500",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="group relative p-8 rounded-2xl border-gradient hover:glow-subtle transition-all duration-500"
    >
      {/* Animated gradient background on hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      
      <div className="relative">
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <feature.icon className="w-7 h-7 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-opacity duration-500`}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm text-accent">Supercharged Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything you need.{" "}
            <br className="hidden md:block" />
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI capabilities without the complexity or cost. 
            Built for creators, developers, students, and everyone in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
