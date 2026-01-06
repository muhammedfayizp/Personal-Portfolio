import React from "react"
import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiWebrtc,
  SiSocketdotio,
} from "react-icons/si"


// const skills = ['JavaScript','TypeScript',"React","Redux", "Node.js", "MongoDB",'PostgreSQL', "Express.js", "Tailwind", "WebRTC",'Socket.IO']
const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "hover:bg-yellow-400/20 hover:text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:bg-blue-500/20 hover:text-blue-400" },
  { name: "React", icon: SiReact, color: "hover:bg-cyan-400/20 hover:text-cyan-400" },
  { name: "Redux", icon: SiRedux, color: "hover:bg-purple-500/20 hover:text-purple-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:bg-sky-400/20 hover:text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:bg-green-500/20 hover:text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "hover:bg-gray-400/20 hover:text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:bg-green-600/20 hover:text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:bg-blue-600/20 hover:text-blue-500" },
  { name: "WebRTC", icon: SiWebrtc, color: "hover:bg-indigo-500/20 hover:text-indigo-400" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "hover:bg-gray-300/20 hover:text-white" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-10 text-white">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeUp}
        className="relative text-4xl sm:text-6xl font-serif text-center mb-16"
      >
        <span className="relative z-10 px-6 py-2 rounded-lg bg-[#020c05]">
          Skills
        </span>
        <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`
              flex flex-col items-center justify-center gap-3
              p-3 rounded-xl
              bg-zinc-900/20
              border border-white/5
              text-white/70
              transition-all duration-300
              ${color}
            `}
          >
            <Icon className="text-lg" />
            <span className="text-sm font-small tracking-wide">{name}</span>
          </motion.div>
        ))}
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover"
            variants={{
              hover: {
                y: -8,
              },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`
              group relative
              flex flex-col items-center justify-center gap-2
              p-3 rounded-xl
              bg-zinc-900/30
              border border-white/10
              text-white/70
              cursor-pointer
              overflow-hidden
              transition-all duration-300
              ${color}
          `}
          >
            {/* Glow layer */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-transparent" />

            {/* Icon */}
            <motion.div
              variants={{
                hover: { scale: 1.25, rotate: 6 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="text-lg relative z-10" />
            </motion.div>

            {/* Text */}
            <span className="text-xs font-medium tracking-wide relative z-10">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills
