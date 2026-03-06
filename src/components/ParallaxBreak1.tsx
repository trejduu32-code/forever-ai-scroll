import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBreak1 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={ref} className="py-40 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating orbs */}
      <motion.div className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl" style={{ y: y1, x: x1 }} />
      <motion.div className="absolute w-96 h-96 rounded-full bg-purple-500/8 blur-3xl" style={{ y: y2, x: x2 }} />
      <motion.div className="absolute w-48 h-48 rounded-full bg-pink-500/10 blur-3xl" style={{ y: y3 }} />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-[15%] w-20 h-20 border-2 border-accent/20 rounded-lg"
        style={{ rotate: rotate1, y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-16 h-16 border-2 border-purple-500/20 rounded-full"
        style={{ rotate: rotate2, y: y2 }}
      />
      <motion.div
        className="absolute top-1/3 right-[25%] w-12 h-12 border-2 border-accent/15"
        style={{ rotate: rotate1, y: y3 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[20%] w-24 h-1 bg-accent/20"
        style={{ x: x1, y: y2 }}
      />
      <motion.div
        className="absolute top-1/2 right-[10%] w-1 h-24 bg-purple-500/20"
        style={{ x: x2, y: y1 }}
      />

      {/* Dots pattern */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          style={{
            top: `${15 + (i * 7) % 70}%`,
            left: `${10 + (i * 13) % 80}%`,
            y: i % 2 === 0 ? y1 : y2,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <motion.div className="text-center relative z-10" style={{ opacity, scale }}>
        <motion.p
          className="text-6xl md:text-8xl lg:text-9xl font-black text-gradient glow-text leading-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Think
        </motion.p>
        <motion.p
          className="text-6xl md:text-8xl lg:text-9xl font-black text-muted-foreground/30 leading-none mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Faster.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ParallaxBreak1;
