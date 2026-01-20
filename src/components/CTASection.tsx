import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

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
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent">No signup required</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to experience
          <br />
          <span className="text-gradient">truly free AI?</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of users who've already discovered what AI should be: 
          accessible, powerful, and completely free.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group px-12 py-7 text-xl glow"
            asChild
          >
            <a href="https://xlnk-ai.hf.space/" target="_blank" rel="noopener noreferrer">
              Try xlnk AI Now
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </a>
          </Button>
        </motion.div>

        <p className="text-sm text-muted-foreground mt-8">
          No credit card • No account needed • Just start chatting
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
