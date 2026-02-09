import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Import all images using Vite's glob import
const imageModules = import.meta.glob('../Images/*.jpeg', { eager: true })
const images = Object.keys(imageModules).map(path => imageModules[path].default || path)

const FloatingImages = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Generate random positions and animations for each image
  const getRandomPosition = (index) => {
    const positions = [
      { top: '10%', left: '5%' },
      { top: '15%', right: '8%' },
      { top: '25%', left: '12%' },
      { top: '30%', right: '15%' },
      { top: '40%', left: '3%' },
      { top: '45%', right: '10%' },
      { top: '55%', left: '8%' },
      { top: '60%', right: '5%' },
      { top: '70%', left: '15%' },
      { top: '75%', right: '12%' },
      { top: '20%', left: '20%' },
      { top: '35%', right: '25%' },
      { top: '50%', left: '25%' },
      { top: '65%', right: '20%' },
      { top: '80%', left: '18%' },
      { top: '12%', right: '30%' },
      { top: '28%', left: '30%' },
      { top: '42%', right: '35%' },
      { top: '58%', left: '35%' },
      { top: '72%', right: '28%' },
      { top: '85%', left: '22%' },
    ]
    return positions[index % positions.length]
  }

  const getRandomAnimation = (index) => {
    const duration = 8 + (index % 4) * 2 // 8-14 seconds
    const delay = index * 0.2
    return {
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {images.map((image, index) => {
        // Show fewer images on mobile (only first 6), all on desktop
        if (isMobile && index > 5) return null
        
        const position = getRandomPosition(index)
        const animation = getRandomAnimation(index)
        // Smaller sizes on mobile, larger on desktop
        const size = isMobile 
          ? 50 + (index % 4) * 12 // Mobile: 50-98px
          : 100 + (index % 6) * 25 // Desktop: 100-225px
        const opacity = isMobile
          ? 0.12 + (index % 3) * 0.06 // Mobile: 0.12-0.30 (more subtle)
          : 0.25 + (index % 4) * 0.12 // Desktop: 0.25-0.61

        return (
          <motion.div
            key={index}
            className="absolute rounded-lg overflow-hidden shadow-lg"
            style={{
              ...position,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              y: animation.y,
              x: animation.x,
              rotate: animation.rotate,
              opacity,
              scale: 1,
            }}
            transition={animation.transition}
          >
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              style={{
                filter: isMobile ? 'blur(0.5px) brightness(1.05)' : 'blur(0.3px) brightness(1.1)',
                mixBlendMode: 'multiply',
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg border border-white/20 pointer-events-none" />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingImages
