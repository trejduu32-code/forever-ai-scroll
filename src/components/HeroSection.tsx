import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Free Forever • No Limits</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-gradient glow-text">xlnk AI</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The AI assistant that's actually free. No subscriptions, no hidden fees. 
          Just powerful AI at your fingertips.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group px-8 py-6 text-lg glow"
            asChild
          >
            <a href="https://xlnk-ai.hf.space/" target="_blank" rel="noopener noreferrer">
              Start Chatting
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-muted hover:bg-secondary"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative p-1 rounded-2xl border-gradient glow-subtle">
            <div className="bg-card rounded-xl p-4 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-left space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">U</div>
                  <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                    <p className="text-sm">How can I learn coding faster?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-none px-4 py-3 max-w-lg">
                    <p className="text-sm text-muted-foreground">Here are 5 proven strategies to accelerate your coding journey: build real projects, practice daily, read other people's code...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
