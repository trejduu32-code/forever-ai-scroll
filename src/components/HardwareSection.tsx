import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, HardDrive, Server, Zap, Heart, Rocket } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    label: "GPU",
    value: "GeForce 210",
    description: "A legendary budget GPU from 2009",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HardDrive,
    label: "RAM",
    value: "4GB",
    description: "Every megabyte counts",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    label: "CPU",
    value: "2 Cores",
    description: "Dual-core determination",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "∞",
    description: "Unlimited dedication",
    color: "from-red-500 to-orange-500",
  },
];

const HardwareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated circuit pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="currentColor"
            strokeWidth="0.2"
            fill="none"
            className="text-accent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-400">Built Different</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powered by{" "}
            <span className="text-gradient">Humble Hardware</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While others spend millions on infrastructure, we prove that passion 
            and optimization can create magic on modest specs.
          </p>
        </motion.div>

        {/* Hardware specs cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group perspective-1000"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl border-gradient bg-card/50 backdrop-blur-sm text-center">
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center mb-4`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <spec.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                <motion.p 
                  className="text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {spec.value}
                </motion.p>
                <p className="text-xs text-muted-foreground">{spec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspirational message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center p-8 rounded-2xl border-gradient bg-gradient-to-br from-card to-background"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
          </motion.div>
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            "It's not about the hardware you have,
            <br />
            <span className="text-gradient">it's about what you build with it."</span>
          </p>
          <p className="text-muted-foreground">— The xlnk AI Team</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareSection;
