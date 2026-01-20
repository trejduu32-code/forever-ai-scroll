import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-xl font-bold">xlnk</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="https://xlnk-ai.hf.space/">
            ​try it 
          </a>
        </div>

        <Button size="sm" className="glow" asChild>
          <a href="https://xlnk-ai.hf.space/" target="_blank" rel="noopener noreferrer">
            Try Free
          </a>
        </Button>
      </div>

      {/* Glass background on scroll */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg -z-10 border-b border-border/50" />
    </motion.nav>;
};
export default Navbar;