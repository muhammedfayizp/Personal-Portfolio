import React from "react"
import { motion } from "framer-motion"
import ScrollStack, { ScrollStackItem } from "../layouts/ScrollStack"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,

  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
}

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


const Projects = () => {
  return (
    <section id="projects" className=" text-white pb-[50vh] sm:pb-[45vh] md:pb-[35vh] lg:pb-[25vh]">

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeUp}
        className="relative text-4xl sm:text-6xl font-serif text-center mb-16"
      >
        <span className="relative z-10 px-6 py-2 rounded-lg bg-[#020c05]">
          Projects
        </span>
        <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.h2>

      <ScrollStack >
        {/* PROJECT 1 */}

        <ScrollStackItem
          itemClassName="
            bg-gradient-to-br from-[#0A0F0C] via-[#0E1512] to-[#020202]
            border border-teal-400/20
            backdrop-blur-xl
            shadow-[0_30px_40px_-25px_rgba(45,212,191,0.25)]
            text-white
          "
        >

          <div className="flex flex-col md:flex-row gap-1 items-center">
            {/* Content */}
            <motion.div
              className="md:w-1/2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.h3 variants={item} className="text-2xl font-semibold">
                Worqzone
              </motion.h3>

              <motion.p
                variants={item}
                className="text-white/70 mt-3 text-sm leading-relaxed"
              >
                [In Progress] Virtual co-working platform that helps remote workers stay productive through focused collaboration and real-time communication with colleagues.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">React</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Node.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Typescript</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">MongoDB</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Webrtc</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Socket.IO</span>
              </motion.div>

              <motion.div variants={item} className="flex gap-4 mt-6">
                <a className="px-4 py-2 text-sm rounded-full bg-white text-black font-medium">
                  Live Demo
                </a>
                <a className="px-4 py-2 text-sm rounded-full border border-white/30"
                  href="https://github.com/muhammedfayizp/worqzone"
                >
                  GitHub
                </a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="md:w-1/2 w-full"
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="w-full aspect-[22/11] rounded-2xl overflow-hidden bg-white/5">
                <img
                  src="/projects/secondProject.png"
                  alt="Worqzone Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>


          </div>
        </ScrollStackItem>

        {/* PROJECT 2 */}
        <ScrollStackItem
          itemClassName="
            bg-gradient-to-br from-[#0B1220] via-[#0F1B2D] to-[#020617]
            border border-emerald-400/20
            backdrop-blur-xl
            shadow-[0_30px_40px_-25px_rgba(45,212,191,0.25)]
            text-white
          "
        >

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Content */}
            <motion.div
              className="md:w-1/2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.h3 variants={item} className="text-2xl font-semibold">
                E-commerce Platform
              </motion.h3>

              <motion.p
                variants={item}
                className="text-white/70 mt-3 text-sm leading-relaxed"
              >
                Full-stack MERN e-commerce application with admin dashboard,
                authentication, product management and payments.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">EJS</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Node.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">MongoDB</span>
              </motion.div>

              <motion.div variants={item} className="flex gap-4 mt-6">
                <a href="https://sportkit.onrender.com/" className="px-4 py-2 text-sm rounded-full bg-white text-black font-medium">
                  Live Demo
                </a>
                <a href="https://github.com/muhammedfayizp/Sportkit" className="px-4 py-2 text-sm rounded-full border border-white/30">
                  GitHub
                </a>
              </motion.div>
            </motion.div>


            {/* Image */}
            <motion.div
              className="md:w-1/2 w-full"
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden"> */}
              <div className="w-full h-52 sm:h-60 min-h-[13rem] rounded-2xl overflow-hidden">

                <img
                  src="/projects/e-commerce.png"
                  alt="E-commerce Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </ScrollStackItem>

        {/* PROJECT 3 */}

        {/* <ScrollStackItem
          itemClassName="
            bg-gradient-to-br from-[#0A0F0C] via-[#0E1512] to-[#020202]
            border border-teal-400/20
            backdrop-blur-xl
            shadow-[0_30px_40px_-25px_rgba(45,212,191,0.25)]
            text-white
          "
        >

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="md:w-1/2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.h3 variants={item} className="text-2xl font-semibold">
                E-commerce Platform
              </motion.h3>

              <motion.p
                variants={item}
                className="text-white/70 mt-3 text-sm leading-relaxed"
              >
                Full-stack MERN e-commerce application with admin dashboard,
                authentication, product management and payments.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">React</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Node</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">MongoDB</span>
              </motion.div>

              <motion.div variants={item} className="flex gap-4 mt-6">
                <a href="" className="px-4 py-2 text-sm rounded-full bg-white text-black font-medium">
                  Live Demo
                </a>
                <a href="" className="px-4 py-2 text-sm rounded-full border border-white/30">
                  GitHub
                </a>
              </motion.div>
            </motion.div>


            <motion.div
              className="md:w-1/2 w-full"
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="w-full h-52 sm:h-60 min-h-[13rem] rounded-2xl overflow-hidden">

                <img
                  src=""
                  alt="E-commerce Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </ScrollStackItem> */}
        
        {/*4 section */}

        <ScrollStackItem
          itemClassName="
            bg-gradient-to-br from-[#0B1220] via-[#0F1B2D] to-[#020617]
            border border-emerald-400/20
            backdrop-blur-xl
            shadow-[0_30px_40px_-25px_rgba(45,212,191,0.25)]
            text-white
          "
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Content */}
            <motion.div
              className="md:w-1/2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.h3 variants={item} className="text-2xl font-semibold">
                Netflix_Clone
              </motion.h3>

              <motion.p
                variants={item}
                className="text-white/70 mt-3 text-sm leading-relaxed"
              >
                Netflix-inspired streaming platform that allows users to sign in,
                explore movies, and manage a personal watchlist using real-time data.
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">React</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Node</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/20">Firebase</span>
              </motion.div>

              <motion.div variants={item} className="flex gap-4 mt-6">
                <a href="https://netflix-clone-flame-xi.vercel.app" className="px-4 py-2 text-sm rounded-full bg-white text-black font-medium">
                  Live Demo
                </a>
                <a href="https://github.com/muhammedfayizp/Netflix_Clone" className="px-4 py-2 text-sm rounded-full border border-white/30">
                  GitHub
                </a>
              </motion.div>
            </motion.div>


            {/* Image */}
            <motion.div
              className="md:w-1/2 w-full"
              variants={imageAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden"> */}
              <div className="w-full h-52 sm:h-60 min-h-[13rem] rounded-2xl overflow-hidden">

                <img
                  src="/projects/Netflix_clone.png"
                  alt="E-commerce Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </section>
  )
}

export default Projects
