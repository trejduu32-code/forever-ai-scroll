import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Floating icons */}
      {[Zap, Globe, Heart, Sparkles].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-accent/20"
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
          </motion.div>
          <span className="text-sm text-accent">No signup required</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
          animate={{
            textShadow: [
              "0 0 20px hsl(210 100% 50% / 0.2)",
              "0 0 60px hsl(210 100% 50% / 0.4)",
              "0 0 20px hsl(210 100% 50% / 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Ready to experience
          <br />
          <span className="text-gradient glow-text">truly free AI?</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join thousands of users who've already discovered what AI should be: 
          accessible, powerful, and completely free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="group px-12 py-8 text-xl glow"
              asChild
            >
              <a href="https://xlnk-ai.hf.space/" target="_blank" rel="noopener noreferrer">
                Try xlnk AI Now
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          {[
            "No credit card",
            "No account needed",
            "200+ languages",
            "Free forever",
          ].map((text, index) => (
            <motion.div
              key={text}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
