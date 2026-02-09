import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const FloatingVerse = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Parallax effect - moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      style={{
        y: y,
        opacity: opacity
      }}
      className="hidden sm:block fixed bottom-10 right-10 z-40 mix-blend-difference pointer-events-none"
    >
      <div className="glass rounded-lg p-4 sm:p-6 backdrop-blur-md max-w-xs">
        <p className="font-serif text-white text-xs sm:text-sm md:text-base italic leading-relaxed text-right">
          "Every good and perfect gift is from above, coming down from the Father of the heavenly lights."
        </p>
        <p className="font-display text-white/80 text-xs mt-2 text-right">
          — James 1:17
        </p>
      </div>
    </motion.div>
  )
}

export default FloatingVerse
