import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "xlnk AI helped me understand complex algorithms that I was struggling with for weeks. And it's actually free!",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Freelance Developer",
    content: "I use it daily for code reviews and debugging. Saves me hours every week. Can't believe it runs on such modest hardware.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Aisha Patel",
    role: "Content Creator",
    content: "From video scripts to social media posts, xlnk AI is my creative partner. The multilingual support is incredible.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Thomas Müller",
    role: "Research Scientist",
    content: "The accuracy and depth of responses rival paid alternatives. Supporting 200+ languages is impressive.",
    rating: 5,
    avatar: "TM",
  },
  {
    name: "Yuki Tanaka",
    role: "High School Teacher",
    content: "My students love using xlnk for homework help. It explains concepts in ways they understand.",
    rating: 5,
    avatar: "YT",
  },
  {
    name: "Omar Hassan",
    role: "Startup Founder",
    content: "We bootstrapped our entire product documentation using xlnk AI. It's a game-changer for startups.",
    rating: 5,
    avatar: "OH",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-card/30 relative overflow-hidden">
      {/* Animated quote marks */}
      <motion.div
        className="absolute top-20 left-10 text-accent/10"
        animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-accent/10 rotate-180"
        animate={{ y: [0, -20, 0], rotate: [180, 175, 180] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-yellow-400">Loved by Users</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What People{" "}
            <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy users who've discovered the power of free AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 rounded-2xl border-gradient bg-card/50 relative"
            >
              {/* Quote icon */}
              <motion.div
                className="absolute top-4 right-4 text-accent/20"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
