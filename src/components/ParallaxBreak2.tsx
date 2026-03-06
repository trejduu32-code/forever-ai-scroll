import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["Create.", "Build.", "Dream.", "Ship.", "Scale.", "Innovate."];

const ParallaxBreak2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center gap-8">
      {/* Moving text rows */}
      <motion.div className="flex gap-12 whitespace-nowrap" style={{ x, opacity }}>
        {[...words, ...words, ...words].map((word, i) => (
          <motion.span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground/5 select-none"
            whileInView={{ color: i % 3 === 0 ? "hsl(var(--accent))" : undefined }}
            transition={{ duration: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="flex gap-12 whitespace-nowrap" style={{ x: xReverse, opacity }}>
        {[...words, ...words, ...words].reverse().map((word, i) => (
          <motion.span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground/5 select-none"
            style={{ WebkitTextStroke: i % 4 === 0 ? "1px hsl(var(--accent) / 0.3)" : undefined }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Center focal point */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <motion.div
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-accent/20 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-accent/30 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/10 glow flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-accent-foreground font-black text-lg md:text-2xl">AI</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Radial lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-accent/10 to-transparent"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "top center",
            rotate: `${i * 45}deg`,
          }}
          animate={{ opacity: [0.1, 0.5, 0.1], height: ["80px", "140px", "80px"] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </section>
  );
};

export default ParallaxBreak2;
