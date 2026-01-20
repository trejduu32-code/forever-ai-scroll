import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Languages, BookOpen, Users } from "lucide-react";

const globalLanguages = [
  { name: "Chinese", variants: "Mandarin, Cantonese, Shanghainese" },
  { name: "English", variants: "Standard, Regional accents" },
  { name: "Spanish", variants: "Castilian, Colombian, Ecuadorian" },
  { name: "Hindi/Urdu", variants: "Bengali, Punjabi" },
  { name: "Arabic", variants: "Multiple dialects" },
  { name: "French", variants: "Standard French" },
  { name: "Tamil", variants: "Thamash" },
  { name: "Bengali", variants: "Bangla" },
  { name: "Portuguese", variants: "Brazilian, European" },
  { name: "Japanese", variants: "Kanji, Hiragana, Katakana" },
  { name: "Korean", variants: "Hanguk, Hangul" },
  { name: "Russian", variants: "Cyrillic, dialects" },
  { name: "German", variants: "Hochdeutsch" },
  { name: "Swahili", variants: "Kinyarwanda" },
  { name: "Tibetan", variants: "Doljut" },
  { name: "Malay", variants: "Thai, Indonesian" },
  { name: "Turkish", variants: "Istanbul" },
  { name: "Vietnamese", variants: "Northern, Southern" },
  { name: "Polish", variants: "Standard" },
  { name: "Dutch", variants: "Flemish" },
  { name: "Greek", variants: "Modern, Ancient" },
  { name: "Hebrew", variants: "Modern, Biblical" },
  { name: "Thai", variants: "Central Thai" },
  { name: "Indonesian", variants: "Bahasa Indonesia" },
];

const indigenousLanguages = [
  { name: "Ainu", region: "Japan" },
  { name: "Yuchi", region: "North America" },
  { name: "Yolŋu", region: "Australia" },
  { name: "Shakata", region: "Central African Republic" },
  { name: "Hawaiian", region: "Hawaii" },
  { name: "Māori", region: "New Zealand" },
  { name: "Navajo", region: "North America" },
  { name: "Quechua", region: "South America" },
  { name: "Welsh", region: "Wales" },
  { name: "Basque", region: "Spain/France" },
  { name: "Catalan", region: "Spain" },
  { name: "Gaelic", region: "Scotland/Ireland" },
];

const categories = [
  { icon: Globe, label: "Global Languages", count: "50+" },
  { icon: Users, label: "Indigenous Languages", count: "100+" },
  { icon: BookOpen, label: "Dialects", count: "200+" },
  { icon: Languages, label: "Total Supported", count: "350+" },
];

const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-card/30 relative overflow-hidden">
      {/* Animated world map dots */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">Breaking Language Barriers</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Speaks Your{" "}
            <span className="text-gradient">Language</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Mandarin to Māori, from Arabic to Ainu — xlnk AI understands 
            and communicates in hundreds of languages, dialects, and minority languages.
          </p>
        </motion.div>

        {/* Language stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl border-gradient bg-card/50 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                <cat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              </motion.div>
              <motion.p 
                className="text-3xl font-bold text-gradient"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {cat.count}
              </motion.p>
              <p className="text-sm text-muted-foreground">{cat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6 text-accent" />
            Global Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {globalLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.02 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--accent) / 0.2)",
                  transition: { duration: 0.2 }
                }}
                className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-accent/50 transition-colors cursor-default"
              >
                <p className="font-semibold text-sm">{lang.name}</p>
                <p className="text-xs text-muted-foreground truncate">{lang.variants}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Indigenous Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-accent" />
            Indigenous & Minority Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {indigenousLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-secondary/50 to-secondary/30 border border-border hover:border-accent/50 transition-all"
              >
                <span className="font-medium text-sm">{lang.name}</span>
                <span className="text-xs text-muted-foreground ml-2">({lang.region})</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { title: "Technical", examples: "Programming terms, Scientific terminology" },
            { title: "Literary", examples: "Classical texts, Poetry forms" },
            { title: "Artistic", examples: "Hawaiian ʻolaʻola, Finnish" },
            { title: "Religious", examples: "Hebrew, Arabic, Sanskrit" },
          ].map((cat, index) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border-gradient bg-card/30"
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                <BookOpen className="w-5 h-5 text-accent" />
              </motion.div>
              <h4 className="font-bold mb-2">{cat.title}</h4>
              <p className="text-sm text-muted-foreground">{cat.examples}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Language preservation note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl border-gradient bg-gradient-to-br from-accent/5 to-transparent text-center"
        >
          <Languages className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Preserving Linguistic Heritage</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Many languages are endangered. xlnk AI actively supports language preservation 
            efforts by providing access to communication tools for minority and indigenous languages.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
