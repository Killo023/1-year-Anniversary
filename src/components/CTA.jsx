import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import MagneticButton from './MagneticButton'

const CTA = () => {
  const sectionRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Darken background as user scrolls into section
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.8, 0.95])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const textScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1])

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Darkening background overlay */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Glowing question text */}
      <motion.div
        style={{
          opacity: textOpacity,
          scale: textScale
        }}
        className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white glow-text mb-8 sm:mb-12 px-2"
        >
          Will you be my Valentine, Taryn?
        </motion.h2>

        {/* Magnetic buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12">
          <MagneticButton
            text="Yes, absolutely!"
            variant="primary"
            mousePosition={mousePosition}
          />
          <MagneticButton
            text="Of course!"
            variant="secondary"
            mousePosition={mousePosition}
          />
        </div>
      </motion.div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="w-full h-full bg-gradient-to-br from-rose-600/20 via-transparent to-ark-yellow/20" />
      </div>
    </section>
  )
}

export default CTA
