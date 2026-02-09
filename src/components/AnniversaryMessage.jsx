import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AnniversaryMessage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const text = "One year ago, we started this journey, and looking back, it's easily the best thing I've ever 'built.' Beyond the milestones and the daily hustle of life and business, it's the quiet moments with you that have meant the most. You've become my favorite person to share a dream with, my steady ground when things get loud, and the best part of every single day. Thank you for an incredible 365 days of growth, laughter, and love. I'm so proud of us, and I can't wait to see what our next 'version' looks like together."

  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Delay between each word
        delayChildren: 0.2, // Initial delay before starting
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-rose-50/30 to-white relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            className="font-serif text-[clamp(1rem,4vw,1.625rem)] leading-[1.8] sm:leading-[2.2] md:leading-[2.4] tracking-wide text-gray-800 text-center"
            style={{
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.02em',
              wordSpacing: '0.08em',
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
                style={{ marginRight: '0.4em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default AnniversaryMessage
