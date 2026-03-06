import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, Zap, Shield, Infinity, CreditCard, Lock, Cpu } from "lucide-react";

const competitors = [
  {
    name: "DeepSeek",
    icon: "🔍",
    problems: ["Data privacy concerns", "Limited availability", "Censored responses"],
    color: "from-red-500/20 to-red-900/10",
  },
  {
    name: "Copilot",
    icon: "🤖",
    problems: ["Requires Microsoft subscription", "Limited free tier", "Locked into ecosystem"],
    color: "from-blue-500/20 to-blue-900/10",
  },
  {
    name: "Claude",
    icon: "🧠",
    problems: ["$20/month for Pro", "Message limits on free", "No image generation"],
    color: "from-orange-500/20 to-orange-900/10",
  },
  {
    name: "ChatGPT",
    icon: "💬",
    problems: ["$20/month for GPT-4", "Rate limited", "Training on your data"],
    color: "from-green-500/20 to-green-900/10",
  },
];

const xlnkAdvantages = [
  { icon: Infinity, title: "Unlimited Messages", desc: "No caps. No throttling. Ever." },
  { icon: CreditCard, title: "100% Free Forever", desc: "No credit card. No trials. No BS." },
  { icon: Shield, title: "Privacy First", desc: "We don't sell your data. Period." },
  { icon: Zap, title: "Lightning Fast", desc: "Built lean. Runs on humble hardware." },
  { icon: Lock, title: "No Account Needed", desc: "Just open and start chatting." },
  { icon: Cpu, title: "Humble & Honest", desc: "GeForce 210 powered. No billion-dollar hype." },
];

const CompetitorRoastSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-destructive/10 rounded-full blur-3xl"
        animate={{ x: [-50, 50, -50], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [50, -50, 50], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full border border-destructive/30 bg-destructive/10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-destructive font-bold tracking-wider uppercase text-sm">
              🔥 Time for some truth 🔥
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              F**k{" "}
              <span className="text-destructive">DeepSeek</span>,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-blue-400">Copilot</span>,{" "}
              <span className="text-orange-400">Claude</span>,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              & <span className="text-green-400">ChatGPT</span>
            </motion.span>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            They charge you <span className="text-foreground font-bold">$20/month</span> for what
            xlnk AI gives you for <span className="text-gradient font-black text-3xl">FREE</span>.
          </motion.p>
        </motion.div>

        {/* Competitor Roast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {competitors.map((comp, index) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
              <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <X className="w-6 h-6 text-destructive" />
                  </motion.div>
                </div>

                <div className="text-4xl mb-3">{comp.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{comp.name}</h3>
                
                <ul className="space-y-3">
                  {comp.problems.map((problem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 + i * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <X className="w-4 h-4 text-destructive shrink-0" />
                      <span>{problem}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 pt-4 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.15 }}
                >
                  <span className="text-destructive/80 font-medium text-sm line-through">
                    $20/month
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">for limited access</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-20 bg-border" />
            <span className="text-4xl md:text-6xl font-black text-gradient">VS</span>
            <div className="h-px w-20 bg-border" />
          </div>
        </motion.div>

        {/* Why xlnk AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-black mb-4">
            Why <span className="text-gradient glow-text">xlnk AI</span> is the move
          </h3>
          <p className="text-xl text-muted-foreground">
            Built different. Priced different. <span className="text-foreground font-semibold">Free different.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {xlnkAdvantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-accent/50 transition-colors">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <adv.icon className="w-7 h-7 text-accent-foreground" />
                </motion.div>

                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <h4 className="text-lg font-bold text-foreground">{adv.title}</h4>
                </div>
                <p className="text-muted-foreground">{adv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.a
            href="https://xlnkai.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent text-accent-foreground font-bold text-xl rounded-2xl glow hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-6 h-6" />
            Switch to xlnk AI — It's Free
          </motion.a>
          <p className="text-muted-foreground mt-4 text-sm">
            No signup required. No credit card. Just vibes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitorRoastSection;
