import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EventDetails = () => {
  const { id } = useParams();

  // Mock data for the specific event requested
  const event = id === 'docker-101' ? {
    title: 'Docker 101',
    description: 'Join us for an introductory session on Docker. Learn about containerization, how to package applications, and deploy them seamlessly across any environment. We will also feature a special discussion about Claude, large language models, and their implications in modern development workflows.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop',
    date: '16/03/2026',
    time: '10:00 am - 1:00 pm',
    venue: 'A105',
    category: 'Tech Session'
  } : {
    title: 'Event Not Found',
    description: 'The event you are looking for does not exist.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    date: 'TBD',
    time: 'TBD',
    venue: 'TBD',
    category: 'Unknown'
  };

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white pb-0 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-96 max-h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-96 max-h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
      
      <main className="flex-1 w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
        
        <Link to="/events" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Events
        </Link>
        
        {id === 'docker-101' ? (
          <div className="glass rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="h-[40vh] w-full relative">
               <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
               <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                 <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-semibold mb-4 border border-primary/30 text-primary">
                    {event.category}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-glow">{event.title}</h1>
               </div>
            </div>
            
            <div className="p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">About This Event</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {event.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                   <div className="btn-glossy p-6 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden">
                      {/* Sub-glow effect */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full -z-10" />

                      <h3 className="font-bold text-xl border-b border-white/10 pb-4">Event Details</h3>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Date</p>
                          <p className="font-semibold text-white">{event.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Time</p>
                          <p className="font-semibold text-white">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Venue</p>
                          <p className="font-semibold text-white">{event.venue}</p>
                        </div>
                      </div>
                      
                      <button className="w-full mt-6 py-3 px-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-xl transition-colors violet-glow cursor-pointer relative z-10">
                        Register Now
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
            <p className="text-gray-400 mb-8">The event you are looking for does not exist or has been removed.</p>
            <Link to="/events" className="btn-glossy px-6 py-3 rounded-xl font-semibold hover:btn-glossy-hover">
              Return to Events
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
      </div>
    </div>
  )
}

export default EventDetails
