// import React, { useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import Background from "./Background"
// import { FiDownload } from "react-icons/fi"

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" }
//   }
// }

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 1 }
//   }
// }



// const Home = () => {
//   const titles = [
//     "MERN Stack Developer",
//     "Web Developer",
//     "Full Stack Developer",
//   ]

//   const [text, setText] = useState("")
//   const [index, setIndex] = useState(0)
//   const [subIndex, setSubIndex] = useState(0)
//   const [phase, setPhase] = useState("typing")


//   useEffect(() => {
//     const current = titles[index]
//     const center = Math.floor(current.length / 2)
//     let timeout

//     // 1️⃣ TYPE FULL TEXT
//     if (phase === "typing" && subIndex < current.length) {
//       timeout = setTimeout(() => {
//         setSubIndex((p) => p + 1)
//         setText(current.substring(0, subIndex + 1))
//       }, 90)
//     }

//     // Pause then start deleting
//     else if (phase === "typing" && subIndex === current.length) {
//       timeout = setTimeout(() => {
//         setPhase("deleteToCenter")
//       }, 1000)
//     }

//     // 2️⃣ DELETE LAST → CENTER
//     else if (phase === "deleteToCenter" && subIndex > center) {
//       timeout = setTimeout(() => {
//         setSubIndex((p) => p - 1)
//         setText(current.substring(0, subIndex - 1))
//       }, 70)
//     }

//     // 3️⃣ REACH CENTER → CLEAR EVERYTHING
//     else if (phase === "deleteToCenter" && subIndex === center) {
//       setPhase("clearAll")
//       setSubIndex(0)
//       setText("")
//     }

//     // 4️⃣ START NEXT WORD
//     else if (phase === "clearAll") {
//       setPhase("typing")
//       setIndex((p) => (p + 1) % titles.length)
//     }

//     return () => clearTimeout(timeout)
//   }, [subIndex, phase, index])




//   return (
//     <section id="home" className="relative min-h-screen flex items-center text-white px-10">
//       <Background />

//       {/* Main layout */}
//       <div className="w-full max-w-7xl mx-auto flex justify-between items-center">

//         {/* LEFT CONTENT */}
//         <div className="max-w-3xl">
//           <motion.p
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             className="text-3xl font-heading tracking-tight text-gray-400"
//           >
//             Hi Welcome to My Portfolio
//           </motion.p>

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="text-8xl md:text-7xl font-serif mt-4"
//           >
//             I'm Muhammed Fayiz
//           </motion.h1>

//           <motion.h2
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl mt-4 text-gray-300"
//           >
//             {/* MERN Stack Developer */}
//             {text}
//           </motion.h2>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="mt-6 max-w-xl text-gray-400 font-body"
//           >
//             Detail-oriented full-stack developer with 1.5 years of hands-on experience
//             in the MERN stack. Skilled in designing and developing scalable,
//             high-performance web
//             applications using JavaScript, React.js, Node.js, and MongoDB.
//           </motion.p>
//         </div>

//         {/* RIGHT CENTERED BUTTON */}
//         <motion.a
//           whileHover="hover"
//           whileTap={{ scale: 0.95 }}
//           href="#"
//           className="
//             relative mr-10
//             h-20 w-55
//             rounded-full
//             text-2xl
//             font-semibold
//             text-white
//             backdrop-blur-md
//             bg-white/10
//             border border-white/50
//             shadow-lg
//             overflow-hidden
//             flex items-center justify-center
//             transition-all duration-300
//           "
//         >
//           {/* TEXT */}
//           <motion.span
//             variants={{
//               hover: { y: -30, opacity: 0 }
//             }}
//             transition={{ duration: 0.3 }}
//             className="absolute"
//           >
//             Download CV
//           </motion.span>

//           {/* ICON */}
//           <motion.span
//             initial={{ y: 30, opacity: 0 }}
//             variants={{
//               hover: { y: 0, opacity: 1 }
//             }}
//             transition={{ duration: 0.3 }}
//             className="absolute text-xl"
//           >
//             <FiDownload />
//           </motion.span>
//         </motion.a>


//       </div>
//     </section>
//   )
// }

// export default Home


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
            {/* Detail-oriented full-stack developer with 1.5 years of hands-on
            experience in the MERN stack. Skilled in building scalable,
            high-performance web applications using React, Node.js, and MongoDB. */}
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
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 sm:p-6"
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
            relative bg-[#e7e5d8]
            w-full max-w-3xl
            max-h-[90vh]
            rounded-2xl shadow-2xl
            overflow-y-auto
          "
                >
                  {/* CLOSE */}
                  <button
                    onClick={() => setOpen(false)}
                    className="
              absolute top-3 right-3
              w-10 h-10 rounded-full
              flex items-center justify-center
              text-gray-600 hover:bg-black/10
              transition
            "
                    aria-label="Close modal"
                  >
                    ✕
                  </button>

                  {/* CONTENT WRAPPER */}
                  <div className="p-5 sm:p-8">
                    {/* HEADER */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700">
                        My Resume
                      </h2>
                      <p className="mt-2 text-center text-gray-700 text-sm sm:text-base">
                        ATS-optimized resume tailored for modern full-stack development roles.
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
                        rel="noopener noreferrer"
                        className="
                  flex items-center justify-center gap-2
                  bg-blue-600 text-white px-5 py-3
                  rounded-lg hover:bg-blue-700 transition
                "
                      >
                        <FiEye /> View Resume
                      </a>

                      <a
                        href="/resume/Muhammed_fayiz_pp.pdf"
                        download
                        className="
                  flex items-center justify-center gap-2
                  bg-green-600 text-white px-5 py-3
                  rounded-lg hover:bg-green-700 transition
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
                      className="mt-8 bg-white rounded-xl shadow p-5 sm:p-6 text-black"
                    >
                      <motion.h3
                        variants={fadeUp}
                        className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6"
                      >
                        Quick Overview
                      </motion.h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* CONTACT */}
                        <motion.div variants={fadeUp}>
                          <h4 className="text-lg font-semibold mb-3">
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
                          <h4 className="text-lg font-semibold mb-3">
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
                          px-3 py-1 text-sm
                          bg-blue-100 text-blue-700
                          rounded-md
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
                            <p className="text-gray-700">Self-Employed</p>
                          </div>

                          <span className="text-sm bg-gray-100 px-3 py-1 rounded w-fit">
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
