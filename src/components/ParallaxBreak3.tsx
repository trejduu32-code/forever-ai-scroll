import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBreak3 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={ref} className="py-40 relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated SVG background */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <motion.path
          d="M0,300 Q250,100 500,300 T1000,300"
          fill="none"
          stroke="hsl(210 100% 50%)"
          strokeWidth="2"
          style={{ pathLength }}
        />
        <motion.path
          d="M0,350 Q250,150 500,350 T1000,350"
          fill="none"
          stroke="hsl(270 100% 50%)"
          strokeWidth="1.5"
          style={{ pathLength }}
        />
        <motion.path
          d="M0,250 Q250,50 500,250 T1000,250"
          fill="none"
          stroke="hsl(210 100% 50% / 0.5)"
          strokeWidth="1"
          style={{ pathLength }}
        />
      </svg>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-[15%] left-[8%] font-mono text-xs text-accent/30 bg-card/50 rounded-lg px-4 py-3 border border-border/30"
        style={{ y: y1 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-purple-400/50">const</span> ai = <span className="text-accent/50">xlnk</span>();
      </motion.div>
      <motion.div
        className="absolute top-[25%] right-[10%] font-mono text-xs text-accent/30 bg-card/50 rounded-lg px-4 py-3 border border-border/30"
        style={{ y: y2 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <span className="text-green-400/50">await</span> ai.<span className="text-accent/50">think</span>()
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] left-[12%] font-mono text-xs text-accent/30 bg-card/50 rounded-lg px-4 py-3 border border-border/30"
        style={{ y: y2 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
      >
        <span className="text-pink-400/50">return</span> <span className="text-accent/50">magic</span> ✨
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] right-[8%] font-mono text-xs text-accent/30 bg-card/50 rounded-lg px-4 py-3 border border-border/30"
        style={{ y: y1 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        ai.<span className="text-accent/50">generate</span>(<span className="text-green-400/50">"anything"</span>)
      </motion.div>

      {/* Center content */}
      <motion.div className="text-center relative z-10" style={{ opacity, scale }}>
        <motion.div
          className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span className="text-gradient glow-text">{"<"}</span>
          <motion.span
            className="text-foreground"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            /
          </motion.span>
          <span className="text-gradient glow-text">{">"}</span>
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mt-8 font-mono"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Code at the speed of thought
        </motion.p>
      </motion.div>

      {/* Particle field */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/40"
          style={{
            top: `${10 + (i * 17) % 80}%`,
            left: `${5 + (i * 11) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </section>
  );
};

export default ParallaxBreak3;
