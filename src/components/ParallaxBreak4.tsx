import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Tokens/sec", value: "∞", suffix: "" },
  { label: "Uptime", value: "99.9", suffix: "%" },
  { label: "Languages", value: "100", suffix: "+" },
  { label: "Happy Users", value: "10K", suffix: "+" },
];

const ParallaxBreak4 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

  return (
    <section ref={ref} className="py-40 relative overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Horizontal scrolling lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full"
          style={{
            top: `${15 + i * 14}%`,
            background: `linear-gradient(90deg, transparent, hsl(var(--accent) / ${0.05 + i * 0.02}), transparent)`,
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        />
      ))}

      {/* Vertical scrolling lines */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-full"
          style={{
            left: `${20 + i * 20}%`,
            background: `linear-gradient(180deg, transparent, hsl(var(--accent) / ${0.03 + i * 0.01}), transparent)`,
          }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
        />
      ))}

      <motion.div className="relative z-10 w-full max-w-6xl mx-auto px-6" style={{ opacity }}>
        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              style={{ y, scale }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  className="text-6xl md:text-8xl font-black text-gradient glow-text block"
                  animate={{
                    textShadow: [
                      "0 0 20px hsl(210 100% 50% / 0.2)",
                      "0 0 60px hsl(210 100% 50% / 0.4)",
                      "0 0 20px hsl(210 100% 50% / 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {metric.value}{metric.suffix}
                </motion.span>

                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-accent/10"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>

              <motion.p
                className="text-muted-foreground mt-4 text-sm md:text-base font-medium tracking-wider uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {metric.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Connecting line */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-12 left-12 w-20 h-20 border-l-2 border-t-2 border-accent/10"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-12 right-12 w-20 h-20 border-r-2 border-b-2 border-accent/10"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default ParallaxBreak4;
