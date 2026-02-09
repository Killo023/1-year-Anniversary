import { motion } from 'framer-motion'

// Import video for hero background
const videoModules = import.meta.glob('../Images/*.mp4', { eager: true })
const heroVideoPath = Object.keys(videoModules)
  .find(path => path.includes('WhatsApp Video 2026-02-09 at 12.06.42.mp4') && !path.includes('(1)'))
const heroVideoSrc = heroVideoPath ? (videoModules[heroVideoPath].default || videoModules[heroVideoPath]) : null

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      {heroVideoSrc && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.6) contrast(1.2)',
            }}
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.90] via-white/[0.90] to-white/[0.90] backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-black/[0.10]" />
        </div>
      )}
      
      {/* Aurora gradient overlay (fallback if video doesn't load) */}
      {!heroVideoSrc && (
        <div className="absolute inset-0 aurora-gradient z-0" />
      )}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-full">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-10 w-full">
          {/* Occasion text - One Year Anniversary & Valentine's Day */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3 sm:space-y-4"
          >
            <motion.p
              animate={{
                textShadow: [
                  '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95)',
                  '0 0 30px rgba(225, 29, 72, 1), 0 0 60px rgba(225, 29, 72, 0.8), 3px 3px 8px rgba(255,255,255,0.95)',
                  '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="font-serif text-rose-600 text-[clamp(1.25rem,3vw,2rem)] font-bold tracking-[0.15em] uppercase"
              style={{
                textShadow: '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95), 0 0 15px rgba(255,255,255,0.7)',
                letterSpacing: '0.15em',
                fontWeight: '700',
              }}
            >
              Our One Year Anniversary
            </motion.p>
            <motion.p
              animate={{
                textShadow: [
                  '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95)',
                  '0 0 30px rgba(225, 29, 72, 1), 0 0 60px rgba(225, 29, 72, 0.8), 3px 3px 8px rgba(255,255,255,0.95)',
                  '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="font-serif text-rose-600 text-[clamp(1.25rem,3vw,2rem)] font-bold tracking-[0.15em] uppercase"
              style={{
                textShadow: '0 0 20px rgba(225, 29, 72, 0.8), 0 0 40px rgba(225, 29, 72, 0.6), 3px 3px 8px rgba(255,255,255,0.95), 0 0 15px rgba(255,255,255,0.7)',
                letterSpacing: '0.15em',
                fontWeight: '700',
              }}
            >
              & Valentine's Day
            </motion.p>
          </motion.div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 sm:w-40 h-0.5 sm:h-1 bg-rose-600 drop-shadow-lg"
            style={{
              boxShadow: '0 0 10px rgba(225, 29, 72, 0.8), 0 0 20px rgba(225, 29, 72, 0.5)',
            }}
          />
          
          {/* Subtitle - positioned above main heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="font-serif text-rose-600 text-[clamp(1.125rem,2.5vw,2.5rem)] font-light italic tracking-wide px-2 break-words drop-shadow-lg" style={{ textShadow: '2px 2px 6px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.6)' }}>
              A Culinary Sanctuary In The City
            </h2>
          </motion.div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 sm:w-40 h-0.5 sm:h-1 bg-rose-600 drop-shadow-lg"
            style={{
              boxShadow: '0 0 10px rgba(225, 29, 72, 0.8), 0 0 20px rgba(225, 29, 72, 0.5)',
            }}
          />
          
          {/* Main SATURDAY heading */}
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[clamp(3rem,12vw,14rem)] leading-[0.9] tracking-tight text-black text-center px-2 sm:px-4 break-words drop-shadow-2xl"
            style={{ 
              fontFeatureSettings: '"liga" 1, "kern" 1',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              textShadow: '3px 3px 8px rgba(255,255,255,0.95), 0 0 15px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.5)'
            }}
          >
            SATURDAY
          </motion.h1>
          
          {/* Decorative line below */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 sm:w-40 h-0.5 sm:h-1 bg-rose-600 drop-shadow-lg"
            style={{
              boxShadow: '0 0 10px rgba(225, 29, 72, 0.8), 0 0 20px rgba(225, 29, 72, 0.5)',
            }}
          />
          
          {/* Personalized greeting */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-6 sm:mt-8"
          >
            <p className="font-serif text-rose-600 text-[clamp(1rem,2vw,1.5rem)] font-light italic drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)' }}>
              For Taryn, with all my love
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hint at Important Content Below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center gap-2 w-full"
      >
        <motion.p
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="font-serif text-rose-600 text-sm sm:text-base font-light italic text-center drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)' }}
        >
          Scroll for something special
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-6 h-10 border-2 border-rose-600 rounded-full flex justify-center items-start p-2 drop-shadow-md"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-rose-600 rounded-full mt-1 drop-shadow-sm"
          />
        </motion.div>
      </motion.div>
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none z-5" />
    </section>
  )
}

export default Hero
