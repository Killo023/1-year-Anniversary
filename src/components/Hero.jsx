import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden aurora-gradient flex items-center justify-center">
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
          {/* Occasion text - One Year Anniversary & Valentine's Day */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-2"
          >
            <p className="font-serif text-rose-600 text-[clamp(0.875rem,1.5vw,1.125rem)] font-light tracking-[0.2em] uppercase mix-blend-multiply">
              Our One Year Anniversary
            </p>
            <p className="font-serif text-rose-600 text-[clamp(0.875rem,1.5vw,1.125rem)] font-light tracking-[0.2em] uppercase mix-blend-multiply">
              & Valentine's Day
            </p>
          </motion.div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-rose-600/30 mix-blend-multiply"
          />
          
          {/* Subtitle - positioned above main heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="font-serif text-rose-600 text-[clamp(1.25rem,3vw,2.5rem)] font-light italic tracking-wide mix-blend-multiply">
              A Culinary Sanctuary In The City
            </h2>
          </motion.div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-rose-600/30 mix-blend-multiply"
          />
          
          {/* Main SATURDAY heading */}
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[clamp(5rem,18vw,14rem)] leading-[0.85] tracking-tight text-black mix-blend-multiply text-center"
            style={{ fontFeatureSettings: '"liga" 1, "kern" 1' }}
          >
            SATURDAY
          </motion.h1>
          
          {/* Decorative line below */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-px bg-rose-600/30 mix-blend-multiply"
          />
          
          {/* Personalized greeting */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-8"
          >
            <p className="font-serif text-rose-600 text-[clamp(1rem,2vw,1.5rem)] font-light italic mix-blend-multiply">
              For Taryn, with all my love
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
    </section>
  )
}

export default Hero
