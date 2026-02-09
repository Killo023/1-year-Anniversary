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
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 0.95])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1])

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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
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
        className="relative z-10 text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white glow-text mb-12"
        >
          Will you be my Valentine, Taryn?
        </motion.h2>

        {/* Magnetic buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
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
