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
      { top: '8%', left: '3%' },
      { top: '12%', right: '5%' },
      { top: '18%', left: '8%' },
      { top: '22%', right: '10%' },
      { top: '28%', left: '2%' },
      { top: '32%', right: '8%' },
      { top: '38%', left: '6%' },
      { top: '42%', right: '4%' },
      { top: '48%', left: '10%' },
      { top: '52%', right: '12%' },
      { top: '58%', left: '5%' },
      { top: '62%', right: '7%' },
      { top: '68%', left: '12%' },
      { top: '72%', right: '9%' },
      { top: '78%', left: '4%' },
      { top: '15%', left: '15%' },
      { top: '25%', right: '18%' },
      { top: '35%', left: '18%' },
      { top: '45%', right: '20%' },
      { top: '55%', left: '20%' },
      { top: '65%', right: '15%' },
      { top: '75%', left: '16%' },
      { top: '10%', right: '25%' },
      { top: '20%', left: '25%' },
      { top: '30%', right: '28%' },
      { top: '40%', left: '28%' },
      { top: '50%', right: '25%' },
      { top: '60%', left: '22%' },
      { top: '70%', right: '22%' },
      { top: '80%', left: '14%' },
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
        // Show more images on mobile (first 15), all on desktop
        if (isMobile && index > 14) return null
        
        const position = getRandomPosition(index)
        const animation = getRandomAnimation(index)
        // Smaller sizes on mobile, larger on desktop
        const size = isMobile 
          ? 45 + (index % 5) * 10 // Mobile: 45-95px (smaller but more images)
          : 100 + (index % 6) * 25 // Desktop: 100-225px
        const opacity = isMobile
          ? 0.35 + (index % 4) * 0.12 // Mobile: 0.35-0.71 (much more visible)
          : 0.45 + (index % 4) * 0.15 // Desktop: 0.45-0.90 (much clearer)

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
                filter: 'brightness(1.15) contrast(1.1) saturate(1.1)',
                mixBlendMode: 'normal',
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg border border-white/30 pointer-events-none shadow-md" />
          </motion.div>
        )
      })}
    </div>
  )
}

export default FloatingImages
