import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Open the app",
    description: "Just click and start. No account creation, no email verification, no hassle.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Ask anything",
    description: "Type your question, request, or idea. Our AI understands natural language.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get results",
    description: "Receive intelligent, helpful responses instantly. It's that simple.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple as{" "}
            <span className="text-gradient">1-2-3</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No complex setup. No learning curve. Just AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="text-6xl font-bold text-muted/30 mb-4">{step.number}</div>
              
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
