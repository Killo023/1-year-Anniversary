import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Marker = ({ progress, scrollYProgress }) => {
  const markerOpacity = useTransform(scrollYProgress, 
    [progress - 0.1, progress, progress + 0.1], 
    [0, 1, 1]
  )
  const xPos = 50 + (progress * 1000)
  const yPos = 200 - Math.sin(progress * Math.PI) * 50
  
  return (
    <motion.circle
      cx={xPos}
      cy={yPos}
      r="8"
      fill="#e11d48"
      style={{ opacity: markerOpacity }}
    />
  )
}

const TheWilds = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Animate path drawing based on scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  // SVG path for decorative map element
  const pathData = "M 50 200 Q 150 100 250 150 T 450 200 Q 550 250 650 200 T 850 150 Q 950 100 1050 200"

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-black mb-6">
            The Wilds
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            An immersive morning walk through the koppies. We'll hunt for the James Delaney sculptures, 
            cross the yellow bridge, and take in the 360-degree skyline views. A journey through nature 
            that connects us to the heart of Jozi and to each other.
          </p>
        </motion.div>

        {/* Decorative Map Path SVG */}
        <div className="relative h-64 md:h-96 w-full my-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1100 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background path (gray, always visible) */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Animated path (rose color, draws on scroll) */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="#e11d48"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength: pathLength,
                opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1])
              }}
            />
            
            {/* Decorative markers along the path */}
            <Marker progress={0.2} scrollYProgress={scrollYProgress} />
            <Marker progress={0.5} scrollYProgress={scrollYProgress} />
            <Marker progress={0.8} scrollYProgress={scrollYProgress} />
          </svg>
        </div>

        {/* Additional content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-2xl p-8 md:p-12 backdrop-blur-xl max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-black mb-4">
            The Ascent
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Wilds Nature Reserve offers more than just a walk—it's an adventure through 
            the urban wilderness. As we explore the koppies together, we'll discover hidden 
            sculptures, traverse the iconic yellow bridge, and pause to take in breathtaking 
            panoramic views of the city. This is where we'll create memories, step by step, 
            surrounded by the natural beauty that makes Jozi special.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TheWilds
