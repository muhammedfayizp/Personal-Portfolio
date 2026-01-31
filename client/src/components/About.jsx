import React from "react"
import { motion } from "framer-motion"

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

const About = () => {
  return (
    <section id="about_me" className="py-16 px-10 text-white ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="relative text-4xl sm:text-6xl font-serif text-center mb-16"
        >
          <span className="relative z-10 px-6 py-2 rounded-lg bg-[#020c05]">
            Overview
          </span>
          <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed lg:px-20">
          I’m a full-stack MERN developer who enjoys turning ideas into fast, reliable,
          and visually engaging web applications. My focus is on writing clean,
          maintainable code while crafting interfaces that feel smooth, intuitive, and
          purposeful.
          <br /><br />
          I work primarily with technologies like React, Node.js, Express, and MongoDB,
          and I enjoy building features that solve real-world problems—from efficient
          APIs to responsive, user-friendly frontends. I pay close attention to
          performance, accessibility, and scalability in everything I build.
          <br /><br />
          Alongside my development journey, I’ve created <span className="text-white">Worqzone</span>,
          a virtual co-working platform designed to improve productivity and
          collaboration. It includes real-time interaction, subscription management,
          and wallet-based transactions. I also built a full-stack <span className="text-white">e-commerce</span> application
          that strengthened my understanding of core MERN concepts such as authentication,
          product management, image handling, and scalable backend workflows.
          When I’m not coding, I explore UI design ideas, learn new tools, and continuously
          challenge myself to build better and more meaningful digital experiences.

        </p>

      </motion.div>
    </section>
  )
}

export default About
