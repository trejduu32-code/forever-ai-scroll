import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100%", label: "Free" },
  { value: "0", label: "Hidden Fees" },
  { value: "∞", label: "Messages" },
  { value: "24/7", label: "Available" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
