import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, HardDrive, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple animated orbs */}
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.5, 0.2],
        x: [0, -50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} />
        <motion.div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 20,
        repeat: Infinity
      }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-accent/50 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient mb-8" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2
        }} whileHover={{
          scale: 1.05
        }}>
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}>
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm text-muted-foreground">Free Forever • No Limits • 200+ Languages</span>
          </motion.div>
        </motion.div>

        <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }}>
          <motion.span className="text-gradient glow-text inline-block" animate={{
          textShadow: ["0 0 40px hsl(210 100% 50% / 0.5)", "0 0 80px hsl(210 100% 50% / 0.8)", "0 0 40px hsl(210 100% 50% / 0.5)"]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            xlnk AI
          </motion.span>
        </motion.h1>

        <motion.p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-8" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          The AI assistant that's actually free. No subscriptions, no hidden fees. 
          <span className="text-foreground font-semibold"> Powered by passion, not profit.</span>
        </motion.p>

        {/* Hardware badge */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <motion.div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border" whileHover={{
          scale: 1.05,
          backgroundColor: "hsl(var(--accent) / 0.1)"
        }}>
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm">build on GeForce 210</span>
          </motion.div>
          <motion.div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border" whileHover={{
          scale: 1.05,
          backgroundColor: "hsl(var(--accent) / 0.1)"
        }}>
            <HardDrive className="w-4 h-4 text-accent" />
            <span className="text-sm">4GB RAM</span>
          </motion.div>
          <motion.div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border" whileHover={{
          scale: 1.05,
          backgroundColor: "hsl(var(--accent) / 0.1)"
        }}>
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm">2 Core CPU</span>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button size="lg" className="group px-8 py-6 text-lg glow" asChild>
              <a href="https://xlnkai.pages.dev/" target="_blank" rel="noopener noreferrer">
                Start Chatting
                <motion.div className="ml-2" animate={{
                x: [0, 5, 0]
              }} transition={{
                duration: 1.5,
                repeat: Infinity
              }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-muted hover:bg-secondary">
              Explore Features
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="mt-20" initial={{
        opacity: 0,
        y: 60
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.6
      }}>
          <motion.div className="relative p-1 rounded-2xl border-gradient glow-subtle" whileHover={{
          scale: 1.02
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <div className="bg-card rounded-xl p-4 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <motion.div className="w-3 h-3 rounded-full bg-red-500" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} />
                <motion.div className="w-3 h-3 rounded-full bg-yellow-500" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.2
              }} />
                <motion.div className="w-3 h-3 rounded-full bg-green-500" animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.4
              }} />
              </div>
              <div className="text-left space-y-4">
                <motion.div className="flex gap-3" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 1
              }}>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">U</div>
                  <div className="bg-secondary rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                    <p className="text-sm">How can I learn coding faster?</p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-3" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 1.5
              }}>
                  <motion.div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center" animate={{
                  rotate: [0, 360]
                }} transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                    <Sparkles className="w-4 h-4 text-accent" />
                  </motion.div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-none px-4 py-3 max-w-lg">
                    <motion.p className="text-sm text-muted-foreground" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 2,
                    duration: 1
                  }}>
                      Here are 5 proven strategies to accelerate your coding journey: build real projects, practice daily, read other people's code...
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div className="w-1.5 h-3 bg-accent rounded-full" animate={{
          y: [0, 8, 0],
          opacity: [1, 0.5, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;