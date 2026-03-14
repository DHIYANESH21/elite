import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Events = () => {
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
      
      <main className="flex-1 w-full pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-glow transition-all duration-300">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Events</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover what we've been up to and what's coming next.
            </p>
          </div>

          {/* Upcoming Events Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full violet-glow"></span>
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Docker 101 Event Card */}
              <Link to="/events/docker-101" className="group block focus:outline-none">
                <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:violet-glow-strong h-full flex flex-col border border-white/10 hover:border-primary/50 relative">
                  
                  {/* Glossy overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop" 
                      alt="Docker 101" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 btn-glossy px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                      Tech Session
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">Docker 101</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                      Join us for an introductory session on Docker. Learn about containerization, how to package applications, and deploy them seamlessly. We will also discuss Claude and its implications in modern development workflows.
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-300 btn-glossy p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>16/03/2026</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>10:00 am - 1:00 pm</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Venue: A105</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

        </div>

        {/* Past Events Section - Matching Upcoming Events Style */}
        <section className="mt-32 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-gray-500 rounded-full"></span>
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Elite Club Inauguration Card */}
            <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] h-full flex flex-col border border-white/10 hover:border-gray-500/50 relative group">
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-500/0 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
                  alt="Elite Club Inauguration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-black/50 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">
                  Inauguration
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300">Elite club inauguration</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                  The grand opening of the Elite Club. A spectacular day filled with inspiring talks, networking, and the dawn of a new era for our community. Members came together to celebrate innovation and collaboration.
                </p>
                
                <div className="space-y-2 text-sm text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 opacity-70">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Completed Successfully</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      </div>
    </div>
  )
}

export default Events