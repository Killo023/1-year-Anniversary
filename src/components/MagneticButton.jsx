import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const MagneticButton = ({ text, variant = 'primary', mousePosition }) => {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef(null)

  const triggerConfetti = () => {
    const buttonRect = buttonRef.current?.getBoundingClientRect()
    const x = buttonRect ? (buttonRect.left + buttonRect.width / 2) / window.innerWidth : 0.5
    const y = buttonRect ? (buttonRect.top + buttonRect.height / 2) / window.innerHeight : 0.5

    // Create a burst of confetti from the button position
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#e11d48', '#FFD700', '#ffffff', '#fce7f3', '#fef3e2'],
      gravity: 0.8,
      ticks: 200,
    })

    // Add additional bursts for extra celebration
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x, y },
        colors: ['#e11d48', '#FFD700', '#ffffff'],
      })
    }, 100)

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x, y },
        colors: ['#e11d48', '#FFD700', '#ffffff'],
      })
    }, 200)
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    if (!isHovered) {
      x.set(0)
      y.set(0)
      return
    }

    const handleMouseMove = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = mousePosition.x - centerX
        const deltaY = mousePosition.y - centerY
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        const maxDistance = 150
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance
          x.set(deltaX * strength * 0.3)
          y.set(deltaY * strength * 0.3)
        } else {
          x.set(0)
          y.set(0)
        }
      }
    }

    handleMouseMove()
  }, [mousePosition, isHovered, x, y])

  const baseStyles = "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-display font-semibold text-base sm:text-lg transition-all duration-300 relative overflow-hidden"

  const variantStyles = {
    primary: "bg-rose-600 text-white hover:bg-rose-700",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20"
  }

  return (
    <motion.button
      ref={buttonRef}
      style={{
        x: xSpring,
        y: ySpring
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={triggerConfetti}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      <span className="relative z-10">{text}</span>
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}

export default MagneticButton
