import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Unlimited messages", xlnk: true, others: false },
  { feature: "No credit card required", xlnk: true, others: false },
  { feature: "GPT-4 level intelligence", xlnk: true, others: true },
  { feature: "Free forever", xlnk: true, others: false },
  { feature: "No usage limits", xlnk: true, others: false },
  { feature: "Privacy focused", xlnk: true, others: false },
  { feature: "Code generation", xlnk: true, others: true },
  { feature: "24/7 availability", xlnk: true, others: true },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why pay{" "}
            <span className="text-muted-foreground line-through">$20/month</span>
            {" "}when free is better?
          </h2>
          <p className="text-xl text-muted-foreground">
            See how xlnk AI compares to paid alternatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-gradient rounded-2xl overflow-hidden"
        >
          <div className="bg-card">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border">
              <div className="text-muted-foreground font-medium">Feature</div>
              <div className="text-center font-bold text-gradient">xlnk AI</div>
              <div className="text-center text-muted-foreground">Paid AI</div>
            </div>

            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors"
              >
                <div className="text-foreground">{item.feature}</div>
                <div className="flex justify-center">
                  {item.xlnk ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
