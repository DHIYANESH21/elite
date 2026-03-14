import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const teams = [
  {
    id: 'core',
    label: '01',
    name: 'Core Team',
    tagline: 'Vision. Direction. Legacy.',
    description:
      'The strategic backbone of Elite — guiding vision, culture, and long-term impact across every initiative we run.',
    members: [
      { id: 'president', name: 'President', role: 'President', team: 'Core', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Leads the club vision and drives high-impact initiatives that define Elite.' },
      { id: 'vice-president', name: 'Vice President', role: 'Vice President', team: 'Core', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Supports leadership operations and cross-team coordination at every level.' },
      { id: 'secretary', name: 'Secretary', role: 'Secretary', team: 'Core', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Maintains communication, documentation, and official records with precision.' },
      { id: 'treasurer', name: 'Treasurer', role: 'Treasurer', team: 'Core', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Oversees finances, budgets, and sustainable long-term growth.' },
    ],
  },
  {
    id: 'tech',
    label: '02',
    name: 'Tech Team',
    tagline: 'Build. Ship. Evolve.',
    description:
      'Builders, coders, and problem-solvers powering every pixel of Elite\'s digital presence.',
    members: [
      { id: 'tech-1', name: 'Tech Lead 1', role: 'Full-Stack Developer', team: 'Tech', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Architects and maintains core platforms end-to-end.' },
      { id: 'tech-2', name: 'Tech Lead 2', role: 'Frontend Engineer', team: 'Tech', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Crafts immersive and responsive user interfaces.' },
      { id: 'tech-3', name: 'Tech Lead 3', role: 'Backend Engineer', team: 'Tech', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Designs reliable, scalable systems behind the scenes.' },
      { id: 'tech-4', name: 'Tech Lead 4', role: 'DevOps & Automation', team: 'Tech', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Automates workflows and keeps deployment pipelines seamless.' },
    ],
  },
  {
    id: 'design',
    label: '03',
    name: 'Design Team',
    tagline: 'Feel. See. Remember.',
    description:
      'Storytellers, visual thinkers, and brand guardians shaping every shade of how Elite looks and feels.',
    members: [
      { id: 'design-1', name: 'Designer 1', role: 'Lead Designer', team: 'Design', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Owns visual identity and sets the entire design direction.' },
      { id: 'design-2', name: 'Designer 2', role: 'UI/UX Designer', team: 'Design', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Designs intuitive, joyful user experiences across every surface.' },
      { id: 'design-3', name: 'Designer 3', role: 'Graphic Designer', team: 'Design', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Creates visuals for events, social posts, and campaigns.' },
      { id: 'design-4', name: 'Designer 4', role: 'Visual Storyteller', team: 'Design', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Blends visuals and narrative to tell Elite\'s story.' },
      { id: 'design-5', name: 'Designer 5', role: 'Content Designer', team: 'Design', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Aligns words, visuals, and brand tone into one voice.' },
    ],
  },
  {
    id: 'events',
    label: '04',
    name: 'Events Team',
    tagline: 'Stage. Energy. Impact.',
    description:
      'Experience architects who bring every Elite idea to life with energy, precision, and unforgettable moments.',
    members: [
      { id: 'events-1', name: 'Event Lead 1', role: 'Event Lead', team: 'Events', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Leads event strategy, production, and end-to-end execution.' },
      { id: 'events-2', name: 'Event Lead 2', role: 'Operations Coordinator', team: 'Events', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Ensures logistics, timelines, and venue flow are seamless.' },
      { id: 'events-3', name: 'Event Lead 3', role: 'Community Manager', team: 'Events', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=800', focus: 'Creates welcoming, high-energy experiences for every attendee.' },
    ],
  },
]

/* ─────────────────────────────────────────
   MEMBER CARD
───────────────────────────────────────── */
const MemberCard = ({ member, index, onClick }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="relative cursor-pointer group"
      onClick={() => onClick(member)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hover glow border */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(142,3,211,0.5) 0%, transparent 50%, rgba(142,3,211,0.2) 100%)',
          borderRadius: 16,
        }}
      />

      <div className="relative rounded-2xl overflow-hidden bg-[#0c0c18] border border-white/[0.05]">

        {/* Portrait image — 3:4 ratio */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Bottom gradient so card body blends */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c18] via-[#0c0c18]/10 to-transparent" />

          {/* Index badge */}
          <div className="absolute top-3 right-3 font-mono text-[10px] text-primary/40 tracking-[0.2em]">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Shimmer bottom line on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1.5px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(142,3,211,0.9), transparent)' }}
            animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Card text footer */}
        <div className="px-4 pt-4 pb-5">
          <p className="text-[10px] uppercase tracking-[0.22em] text-primary/60 mb-1">{member.team} Team</p>
          <h3 className="text-[15px] font-semibold text-white leading-snug mb-0.5 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-xs text-gray-500">{member.role}</p>

          <motion.div
            className="mt-3 flex items-center gap-2 text-[11px] text-primary/50"
            animate={{ opacity: hovered ? 1 : 0.4 }}
          >
            <motion.span
              className="inline-block h-px bg-primary"
              style={{ width: 14 }}
              animate={{ width: hovered ? 28 : 14 }}
              transition={{ duration: 0.3 }}
            />
            View profile
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
const Modal = ({ member, onClose }) => {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal card */}
      <motion.div
        className="relative z-10 w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d1b] shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
        style={{ maxWidth: 740, maxHeight: '90vh' }}
        initial={{ opacity: 0, scale: 0.84, y: 48 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.84, y: 48 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-500 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 text-xs"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: portrait */}
          <div className="relative w-full md:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: 320 }}>
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
              style={{ minHeight: 320, maxHeight: 520 }}
              initial={{ scale: 1.14, filter: 'brightness(0.25) saturate(0)' }}
              animate={{ scale: 1, filter: 'brightness(1) saturate(1)' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Fade to right (desktop) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d1b] hidden md:block" />
            {/* Fade to bottom (mobile) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1b] via-transparent to-transparent md:hidden" />

            {/* Team tag on image */}
            <motion.span
              className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-sm border border-primary/40 text-primary"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {member.team} Team
            </motion.span>
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-primary/60 mb-3">Elite Crew</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">{member.name}</h2>
              <p
                className="text-base font-medium text-primary"
                style={{ textShadow: '0 0 18px rgba(142,3,211,0.55)' }}
              >
                {member.role}
              </p>
            </motion.div>

            <motion.div
              className="h-px bg-gradient-to-r from-primary/60 to-transparent"
              style={{ width: 48 }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
            />

            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44, duration: 0.5 }}
            >
              {member.focus}
            </motion.p>

            <motion.p
              className="text-xs text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52, duration: 0.5 }}
            >
              Part of Elite's interactive crew wall — explore how each team shapes events, technology, design, and community.
            </motion.p>

            <motion.button
              onClick={onClose}
              className="self-start mt-1 px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] border border-primary/40 text-primary/80 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.58 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Close Profile
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   TEAM SECTION
───────────────────────────────────────── */
const TeamSection = ({ team, onMemberClick }) => {
  const isDesign = team.id === 'design'
  const isEvents = team.id === 'events'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section heading row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
        <div className="flex items-start gap-5">
          <span className="font-mono text-[11px] text-primary/35 tracking-[0.22em] mt-1.5 shrink-0 select-none">
            {team.label}
          </span>
          <div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight mb-1.5">
              {team.name.split(' ')[0]}{' '}
              <span
                className="text-primary"
                style={{ textShadow: '0 0 26px rgba(142,3,211,0.5)' }}
              >
                {team.name.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 mb-3">{team.tagline}</p>
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">{team.description}</p>
          </div>
        </div>
        <span className="font-mono text-[11px] text-primary/35 tracking-[0.16em] shrink-0 self-start sm:self-end">
          {String(team.members.length).padStart(2, '0')} members
        </span>
      </div>

      {/* Grids */}
      {isDesign ? (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team.members.slice(0, 3).map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} onClick={onMemberClick} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-[55%] mx-auto">
            {team.members.slice(3).map((m, i) => (
              <MemberCard key={m.id} member={m} index={i + 3} onClick={onMemberClick} />
            ))}
          </div>
        </div>
      ) : isEvents ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">
          {team.members.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} onClick={onMemberClick} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.members.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} onClick={onMemberClick} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   HERO STAT
───────────────────────────────────────── */
const Stat = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.55 }}
    className="flex flex-col"
  >
    <span className="text-4xl md:text-5xl font-bold text-white leading-none mb-1">{value}</span>
    <span className="text-[11px] uppercase tracking-[0.22em] text-gray-500">{label}</span>
  </motion.div>
)

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
const About = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const lineScaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 80, damping: 22 })

  const totalMembers = teams.reduce((s, t) => s + t.members.length, 0)

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#07070e] text-white selection:bg-primary/30">
      <Navbar />

      {/* Scroll progress bar — left edge */}
      <motion.div
        className="fixed left-0 top-0 w-[2px] h-full origin-top z-50 pointer-events-none"
        style={{
          scaleY: lineScaleY,
          background: 'linear-gradient(to bottom, rgba(142,3,211,0), rgba(142,3,211,0.85) 50%, rgba(142,3,211,0.3))',
        }}
      />

      <main className="relative overflow-hidden">

        {/* ── Global background ── */}
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* Soft purple radial at top */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(142,3,211,0.09) 0%, transparent 70%)',
          }} />
          {/* Lower left accent */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 55% 35% at 10% 95%, rgba(100,0,180,0.07) 0%, transparent 70%)',
          }} />
          {/* Scanlines */}
          <div className="absolute inset-0 opacity-[0.016]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.6) 2px, rgba(255,255,255,0.6) 3px)',
            backgroundSize: '100% 3px',
          }} />
          {/* Film grain */}
          <div className="absolute inset-0 opacity-[0.032]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }} />
        </div>

        {/* ══════════════════════════
            HERO
        ══════════════════════════ */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">

            {/* Headline block */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-primary/60" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-primary/70">The People Behind Elite</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-6xl md:text-8xl font-extrabold leading-[0.94] tracking-tight mb-8"
              >
                <span className="block text-white">Meet</span>
                <span className="block text-white">the</span>
                <span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #c026d3 0%, #a855f7 45%, #8b05d3 100%)' }}
                >
                  Crew.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
                className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg"
              >
                Elite is built by a tight-knit group of leaders, technologists, designers, and event architects
                unified by one mission — turning bold ideas into lasting community impact.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 lg:gap-16 lg:pb-2 shrink-0">
              <Stat value={`${totalMembers}+`} label="Members" delay={0.42} />
              <Stat value={`${teams.length}`} label="Teams" delay={0.52} />
              <Stat value="1" label="Mission" delay={0.62} />
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-20 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gray-600"
          >
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-transparent to-primary/50"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
            Scroll to explore
          </motion.div>
        </section>

        {/* ══════════════════════════
            TEAM SECTIONS
        ══════════════════════════ */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-40 space-y-32">
          {teams.map((team, idx) => (
            <React.Fragment key={team.id}>
              <TeamSection team={team} onMemberClick={setSelectedMember} />

              {idx < teams.length - 1 && (
                <div className="relative h-px w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-2.5 h-2.5 rounded-full border border-primary/35 bg-[#07070e]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </section>

        {/* ══════════════════════════
            BOTTOM CTA
        ══════════════════════════ */}
        <motion.section
          className="relative z-10 border-t border-white/[0.05] py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-primary/55 mb-2">Want to join?</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Become part of Elite's story.</h3>
            </div>
            <motion.a
              href="/events"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-primary/45 text-[12px] uppercase tracking-[0.18em] text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200 shrink-0"
            >
              Explore Events
              <span className="w-4 h-px bg-primary inline-block" />
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default About
