import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Background from "../components/Background"
import { FiDownload, FiEye } from "react-icons/fi"
import Dock from "../layouts/Dock"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
}
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Home = () => {
  const titles = [
    "MERN Stack Developer",
    "Web Developer",
    "Full Stack Developer",
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [phase, setPhase] = useState("typing")
  const homeRef = useRef(null)
  const [showDock, setShowDock] = useState(true)

  useEffect(() => {
    const current = titles[index]
    const center = Math.floor(current.length / 2)
    let timeout

    if (phase === "typing" && subIndex < current.length) {
      timeout = setTimeout(() => {
        setSubIndex(p => p + 1)
        setText(current.substring(0, subIndex + 1))
      }, 90)
    } else if (phase === "typing" && subIndex === current.length) {
      timeout = setTimeout(() => setPhase("deleteToCenter"), 1000)
    } else if (phase === "deleteToCenter" && subIndex > center) {
      timeout = setTimeout(() => {
        setSubIndex(p => p - 1)
        setText(current.substring(0, subIndex - 1))
      }, 70)
    } else if (phase === "deleteToCenter" && subIndex === center) {
      setPhase("clearAll")
      setSubIndex(0)
      setText("")
    } else if (phase === "clearAll") {
      setPhase("typing")
      setIndex(p => (p + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, phase, index])


  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const items = [
    {
      icon: <FaLinkedinIn size={15} />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/fayiz-p-85b3612a1/", "_blank"),
    },
    {
      icon: <FaEnvelope size={15} />,
      label: "Email",
      onClick: () => (window.location.href = "mailto:fayizp6235@gmail.com"),
    },
    {
      icon: <SiLeetcode size={15} />,
      label: "LeetCode",
      onClick: () => window.open("https://leetcode.com/u/fayizp/", "_blank"),
    },
    {
      icon: <FaGithub size={15} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/muhammedfayizp", "_blank"),
    },
  ]

  useEffect(() => {
    const obServer = new IntersectionObserver(([entry]) => {
      setShowDock(entry.isIntersecting)
    },
      {
        threshold: 0.76,
      }
    )
    if (homeRef.current) obServer.observe(homeRef.current)
    return () => obServer.disconnect()
  }, [])
  return (
    <section
      ref={homeRef}
      id="home"
      className="relative min-h-screen flex items-center text-white px-4 sm:px-8 lg:px-10"
    >
      <Background />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl text-center lg:text-left">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl lg:text-3xl text-gray-400"
          >
            Hy
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 font-serif
              text-5xl sm:text-6xl md:text-7xl lg:text-7xl"
          >
            I'm Muhammed Fayiz
          </motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl lg:text-4xl text-gray-300 min-h-[2.5rem]"
          >
            {text}
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-lg mx-auto lg:mx-0 text-gray-400 text-sm sm:text-base"
          >
            A Passionate full-stack engineer building modern, clean, and scalable web solutions.
          </motion.p>
        </div>


        <div ref={ref} className="relative">
          {/* MAIN BUTTON */}
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="
              relative h-14 sm:h-16 w-48 sm:w-56
              rounded-full text-lg sm:text-xl font-semibold
              text-white backdrop-blur-md bg-white/10
              border border-white/40 shadow-lg
              overflow-hidden flex items-center justify-center
              focus:outline-none
            "
          >
            <motion.span
              variants={{ hover: { y: -30, opacity: 0 } }}
              transition={{ duration: 0.3 }}
              className="absolute pointer-events-none"
            >
              My Resume
            </motion.span>

            <motion.span
              initial={{ y: 30, opacity: 0 }}
              variants={{ hover: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.3 }}
              className="absolute text-xl pointer-events-none"
            >
              <FiDownload />
            </motion.span>
          </motion.button>

          {/* MODAL */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
                onClick={() => setOpen(false)}
              >
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="
                    relative
                    w-full max-w-3xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-2xl
                    bg-zinc-900/70
                    backdrop-blur-xl
                    border border-white/10
                    shadow-[0_0_60px_-15px_rgba(34,197,94,0.35)]
                  "
                >
                  {/* CLOSE */}
                  <button
                    onClick={() => setOpen(false)}
                    className="
                      absolute top-4 right-4
                      w-9 h-9 rounded-full
                      flex items-center justify-center
                      text-white/60
                      hover:text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    ✕
                  </button>


                  {/* CONTENT WRAPPER */}
                  <div className="p-5 sm:p-8">
                    {/* HEADER */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                      <h2 className="
    text-2xl sm:text-3xl font-semibold text-center text-white
    tracking-wide
  ">
                        My Resume
                      </h2>

                      <div className="mt-2 flex justify-center">
                        <span className="h-[2px] w-20 bg-green-400/60 rounded-full" />
                      </div>

                      <p className="mt-3 text-center text-white/60 text-sm sm:text-base">
                        ATS-optimized resume — you can view instantly or download directly.
                      </p>
                    </motion.div>


                    {/* ACTION BUTTONS */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="mt-6 flex flex-col sm:flex-row justify-center gap-3"
                    >
                      <a
                        href="/resume/Muhammed_fayiz_pp.pdf"
                        target="_blank"
                        className="
  flex items-center justify-center gap-2
  px-6 py-3 rounded-full
  bg-white/10 text-white
  border border-white/20
  hover:bg-white/20
  hover:scale-[1.03]
  transition-all
"

                      >
                        <FiEye /> View Resume
                      </a>

                      <a
                        href="/resume/Muhammed_fayiz_pp.pdf"
                        download
                        className="
                        flex items-center justify-center gap-2
                        px-6 py-3 rounded-full
                        bg-green-500/20 text-green-400
                        border border-green-500/40
                        hover:bg-green-500/30
                        hover:scale-[1.05]
                        shadow-[0_0_30px_rgba(34,197,94,0.25)]
                        transition-all
                      "

                      >
                        <FiDownload /> Download PDF
                      </a>

                    </motion.div>

                    {/* QUICK OVERVIEW */}
                    <motion.div
                      variants={stagger}
                      initial="hidden"
                      animate="visible"
                      className="
  mt-10
  rounded-2xl
  bg-gradient-to-br from-white/10 to-white/5
  border border-white/10
  backdrop-blur
  p-6 sm:p-8
  text-white/80
"
                    >
                      <motion.h3
                        variants={fadeUp}
                        className="text-xl sm:text-2xl font-bold text-center text-green-500/50 mb-6"
                      >
                        Quick Overview
                      </motion.h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* CONTACT */}
                        <motion.div variants={fadeUp}>
                          <h4 className="text-lg font-medium text-white mb-3">

                            Contact Information
                          </h4>
                          <p className="break-all">
                            Email:{" "}
                            <a
                              className="text-blue-600 hover:underline"
                              href="mailto:fayizp6235@gmail.com"
                            >
                              fayizp6235@gmail.com
                            </a>
                          </p>
                          <p className="mt-1">Phone: +91-6235360618</p>
                          <p className="mt-1">Location: Kerala, India</p>
                        </motion.div>

                        {/* SKILLS */}
                        <motion.div variants={fadeUp}>
                          <h4 className="text-lg font-medium text-white mb-3">

                            Key Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "React.js",
                              "Redux Toolkit",
                              "JavaScript (ES6+)",
                              "TypeScript",
                              "Node.js",
                              "Express.js",
                              "MongoDB",
                              "Web"
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="
                                  px-3 py-1 text-xs
                                  rounded-lg
                                  bg-white/10
                                  border border-white/10
                                  text-white/70
                                "
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      {/* EXPERIENCE */}
                      <motion.div variants={fadeUp} className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">
                          Experience Summary
                        </h4>

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                          <div className="border-l-4 border-blue-600 pl-4">
                            <p className="font-semibold">
                              Full Stack Developer – Brototype (Trainee)
                            </p>
                            <p className="text-blue-500/50">Self-Employed</p>
                          </div>

                          <span className="text-sm px-3 py-1 rounded w-fit">
                            2024 — Present
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM CENTER DOCK */}
        <AnimatePresence>
          {showDock && !open && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30"
            >
              <Dock
                items={items}
                panelHeight={50}
                baseItemSize={34}
                magnification={54}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Home
