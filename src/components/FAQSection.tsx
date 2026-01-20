import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is xlnk AI really free forever?",
    answer: "Yes, 100% free forever. No hidden fees, no premium tiers, no credit card required. We believe AI should be accessible to everyone.",
  },
  {
    question: "How can it be free? What's the catch?",
    answer: "There's no catch. We're powered by passion and community support. We optimize our systems to run efficiently on modest hardware, keeping costs minimal.",
  },
  {
    question: "What languages does xlnk AI support?",
    answer: "We support over 200 languages including major global languages, indigenous languages, and minority dialects. We're committed to preserving linguistic heritage.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. We don't store your conversations or use them to train models. Your privacy is our priority. Chat freely without worry.",
  },
  {
    question: "How does it run on a GeForce 210?",
    answer: "Through careful optimization, efficient model architecture, and a lot of engineering creativity. We prove that great AI doesn't require expensive infrastructure.",
  },
  {
    question: "Can I use xlnk AI for commercial projects?",
    answer: "Yes! You can use xlnk AI for personal, educational, and commercial purposes. No restrictions, no extra fees.",
  },
  {
    question: "How do I get started?",
    answer: "Just click 'Start Chatting' and begin! No signup, no email verification, no waiting. AI at your fingertips instantly.",
  },
  {
    question: "What makes xlnk AI different from ChatGPT?",
    answer: "We're completely free with no usage limits, support more languages including endangered ones, and we're transparent about running on humble hardware.",
  },
];

const FAQItem = ({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border last:border-0"
    >
      <motion.button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 5 }}
      >
        <span className="text-lg font-semibold group-hover:text-gradient transition-all duration-300">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Got Questions?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about xlnk AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border-gradient bg-card/50 p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
