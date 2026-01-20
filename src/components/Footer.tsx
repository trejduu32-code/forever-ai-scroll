import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold text-gradient">xlnk AI</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-sm"
          >
            Free AI for everyone. No limits. No catch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            © 2025 xlnk AI
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
