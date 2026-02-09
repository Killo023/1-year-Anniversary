import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ItineraryCard = ({ time, title, subtitle, description, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 backdrop-blur-xl"
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-8">
        <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0">
          <span className="text-rose-600 font-display font-bold text-xl md:text-2xl">
            {time}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-black mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-rose-600 mb-2 sm:mb-3 italic">
              {subtitle}
            </p>
          )}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Itinerary = () => {
  const itineraryItems = [
    {
      time: "08:30 AM",
      title: "The Foundation",
      subtitle: "Coffee at Home of the Bean",
      description: "Starting the day with the city's best brew. A moment to ground ourselves in the heart of Jozi before the adventure begins."
    },
    {
      time: "09:30 AM",
      title: "The Ascent",
      subtitle: "The Wilds Nature Reserve",
      description: "An immersive morning walk through the koppies. We'll hunt for the James Delaney sculptures, cross the yellow bridge, and take in the 360-degree skyline views."
    },
    {
      time: "07:30 PM",
      title: "The Main Event",
      subtitle: "An Intimate Evening at Home",
      description: "The \"Director's Cut.\" A private, candle-lit dinner curated by yours truly. No crowds, no noise—just a home-cooked menu, a great bottle of wine, and our favorite playlist."
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-black"
        >
          The Saturday Itinerary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 md:mb-16 text-rose-600 italic px-4"
        >
          A day crafted especially for you, Taryn
        </motion.p>
        
        <div className="space-y-6">
          {itineraryItems.map((item, index) => (
            <ItineraryCard
              key={index}
              time={item.time}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Itinerary
