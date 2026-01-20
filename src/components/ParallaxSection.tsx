import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
        style={{ y: y3 }}
      />

      {/* Rotating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-accent/30"
        style={{ rotate }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-purple-500/30"
        style={{ rotate }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative">
        <motion.div style={{ scale }}>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gradient glow-text">AI Without</span>
            <br />
            <span className="text-muted-foreground">Boundaries</span>
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          No paywalls. No limits. No compromise.
          <br />
          <span className="text-foreground font-semibold">Just pure, powerful AI for everyone.</span>
        </motion.p>

        {/* Floating stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "∞", label: "Possibilities" },
            { value: "0", label: "Cost" },
            { value: "1", label: "Mission" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="text-6xl md:text-7xl font-black text-gradient"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(210 100% 50% / 0.3)",
                    "0 0 40px hsl(210 100% 50% / 0.5)",
                    "0 0 20px hsl(210 100% 50% / 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
