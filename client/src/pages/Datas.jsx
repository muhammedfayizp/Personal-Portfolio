

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Skills from "../components/Skills"
import Projects from "../components/Project"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import About from "../components/About"

const menuItems = ["About_Me", "Experience", "Skills", "Projects", "Contact"]


const Datas = () => {
  const dataRef = useRef(null)
  const [showData, setShowData] = useState(true)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowData(entry.isIntersecting)
      },
      {
        threshold: 0.09,
        rootMargin: "-50px 0px",
      }
    )
    if (dataRef.current) observer.observe(dataRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = menuItems.map(item =>
      document.getElementById(item.toLowerCase())
    )

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    )

    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <section ref={dataRef} className="relative min-h-screen text-white">

      {/* LEFT FIXED PANEL (DESKTOP ONLY) */}
      {/* <AnimatePresence>
        {showData && (
            
          <motion.div
            className="hidden md:flex fixed top-0 left-0 h-screen w-1/3 px-10 items-center z-50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1 className="text-4xl font-serif mb-4">Fayiz P</h1>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Full-stack MERN developer building modern, animated web
                experiences with React and Node.js.
              </p>
            </div>
          
          <div className="  ">
          {menuItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={close}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="
                text-xl sm:text-xl
                font-serif tracking-wide
                hover:opacity-60 transition
              "
            >
              {item.replace("_", " ")}
            </motion.a>
          ))}
        </div>
        </motion.div>
        )}
      </AnimatePresence> */}

      <AnimatePresence>
        {showData && (
          <motion.aside
            className="
              hidden md:flex
              fixed top-0 left-0
              h-screen w-1/3
              px-14 py-20
              flex-col justify-between
              bg-transparent
              z-40
            "
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* TOP CONTENT */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-serif tracking-tight text-white">
                  Fayiz P
                </h1>
                <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
                  I build modern, scalable, and animated web experiences using
                  React, Node.js, and the MERN stack.
                </p>
              </div>
            </div>

            {/* NAVIGATION */}
            {/* <nav className="space-y-4 mt-20">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="
                    block
                    text-sm tracking-widest uppercase
                    text-white/50
                    hover:text-white
                    transition
                    relative
                    pl-8
                    before:absolute before:left-0 before:top-1/2
                    before:h-px before:w-4
                    before:bg-white/30
                  "
                >
                  {item.replace("_", " ")}
                </motion.a>
              ))}
            </nav> */}

            <nav className="space-y-4 mt-20">
              {menuItems.map((item, i) => {
                const id = item.toLowerCase()
                const isActive = activeSection === id

                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`
                      block text-sm tracking-widest uppercase transition relative pl-8
                      ${isActive
                          ? "text-white before:w-8 before:bg-white"
                          : "text-white/50 hover:text-white before:w-4 before:bg-white/30"
                        }
                      before:absolute before:left-0 before:top-1/2 before:h-px
                    `}
                  >
                    {item.replace("_", " ")}
                  </motion.a>
                )
              })}
            </nav>

          </motion.aside>
        )}
      </AnimatePresence>


      {/* RIGHT CONTENT */}
      <div className="w-full md:ml-[34.333%] md:w-2/3 space-y-16">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </section>
  )
}

export default Datas
