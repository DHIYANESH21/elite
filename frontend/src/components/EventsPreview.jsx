import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const EventsPreview = () => {
  const events = [
    {
      id: 1,
      title: 'Global Innovation Summit',
      date: 'Oct 15, 2026',
      location: 'San Francisco, CA',
      description: 'Join industry leaders to discuss the next wave of technological breakthroughs and market trends.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Founders Networking Gala',
      date: 'Nov 02, 2026',
      location: 'New York City, NY',
      description: 'An exclusive evening of high-impact networking, investor matching, and collaborative discussions.',
      image: 'https://images.unsplash.com/photo-1511795409834-432f7eb2a297?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'AI & Future Tech Panel',
      date: 'Dec 10, 2026',
      location: 'Virtual Event',
      description: 'Explore the limits of artificial intelligence and its implications for the future of startup ecosystems.',
      image: 'https://images.unsplash.com/photo-1485603704149-8c65215d86d6?auto=format&fit=crop&q=80&w=800',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full py-24 bg-gray-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming <span className="text-primary text-glow">Events</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Immerse yourself in our curated experiences designed to connect, educate, and inspire the elite minds of tomorrow.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(142,3,211,0.2)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-sm tracking-wide">
                  <span className="flex items-center text-primary font-semibold">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center text-gray-500 text-xs uppercase tracking-wider">
                  <MapPin size={14} className="mr-2" />
                  {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EventsPreview
