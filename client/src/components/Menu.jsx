// import React from "react"
// import { motion } from "framer-motion"
// import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
// import { SiLeetcode } from "react-icons/si"
// import Dock from "../layouts/Dock"

// const menuItems = ["Home", "About_Me", "Skills", "Projects", "Contact"]
// const items = [
//     {
//         icon: <FaLinkedinIn size={20} />,
//         label: "LinkedIn",
//         onClick: () =>
//             window.open(
//                 "https://www.linkedin.com/in/fayiz-p-85b3612a1/",
//                 "_blank"
//             ),
//     },
//     {
//         icon: <FaEnvelope size={20} />,
//         label: "Email",
//         onClick: () =>
//             (window.location.href = "mailto:fayizp6235@gmail.com"),
//     },
//     {
//         icon: <SiLeetcode size={20} />,
//         label: "LeetCode",
//         onClick: () =>
//             window.open("https://leetcode.com/u/fayizp/", "_blank"),
//     },
//     {
//         icon: <FaGithub size={20} />,
//         label: "GitHub",
//         onClick: () =>
//             window.open("https://github.com/muhammedfayizp", "_blank"),
//     },
// ];

// const Menu = ({ close }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-[#020c05] text-white/80"
//         >
//             {/* CLOSE */}
//             <div className="absolute top-10 left-10 right-10 flex items-center justify-between">
//                 {/* MENU LABEL */}
//                 <div className="text-4xl tracking-widest">
//                     MENU
//                 </div>

//                 {/* CLOSE BUTTON */}
//                 <div
//                     onClick={close}
//                     className="text-4xl cursor-pointer hover:opacity-60 transition"
//                 >
//                     ✕
//                 </div>
//             </div>

//             {/* MENU ITEMS */}
//             <div className="flex flex-col justify-center h-full pl-40 space-y-8">
//                 {menuItems.map((item, i) => (
//                     <motion.a
//                         key={i}
//                         href={`#${item.toLowerCase()}`}
//                         onClick={close}
//                         initial={{ x: -60, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: i * 0.1 }}
//                         className="text-6xl font-serif tracking-wide hover:opacity-60 transition"
//                     >
//                         {item}
//                     </motion.a>
//                 ))}
//             </div>



//             <div className="absolute bottom-10 left-10 flex gap-10 text-2xl">
//                 <Dock
//                 items={items}
//                 panelHeight={68}
//                 baseItemSize={50}
//                 magnification={70}
//             />
//             </div>

//             {/* FOOTER INFO */}
//             <div className="absolute bottom-10 right-20 text-lg opacity-80">
//                 📍 Malappuram, Kerala

//                 <a
//                     href="tel:+916235360618"
//                     className="hover:opacity-100 transition cursor-pointer block"
//                 >
//                     ☎ +91 6235360618
//                 </a>
//             </div>

//         </motion.div>
//     )
// }

// export default Menu



import React from "react"
import { motion } from "framer-motion"
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import Dock from "../layouts/Dock"

const menuItems = ["Home", "About_Me", "Skills", "Projects", "Contact"]

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

const Menu = ({ close }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#020c05] text-white/80"
    >
      {/* HEADER */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <div className="text-2xl sm:text-4xl tracking-widest">MENU</div>

        <motion.button
          onClick={close}
          aria-label="Close menu"
          className="
            text-3xl sm:text-4xl
            w-12 h-12
            rounded-full
            flex items-center justify-center
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-lg
          "
          whileHover={{
            rotate: 90,
            scale: 1.15,
            boxShadow: "0 0 20px rgba(255,255,255,0.4)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>

      </div>

      {/* MENU ITEMS */}
      <div className="flex flex-col justify-center h-full px-8 sm:pl-40 space-y-6 sm:space-y-8">
        {menuItems.map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={close}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="
              text-4xl sm:text-5xl
              font-serif tracking-wide
              hover:opacity-60 transition
            "
          >
            {item.replace("_", " ")}
          </motion.a>
        ))}
      </div>

      {/* DOCK (CENTERED BOTTOM) */}
      <div className="fixed bottom-6 left-35 sm:left-35 -translate-x-1/2 z-40 text-left">
        <Dock
          items={items}
          panelHeight={50}
          baseItemSize={34}
          magnification={54}
        />
      </div>

      {/* FOOTER INFO */}
      <div className="absolute bottom-6 right-2 sm:right-10 text-sm sm:text-lg opacity-80 text-right">
        <p>📍 Malappuram, Kerala</p>

        <a
          href="tel:+916235360618"
          className="hover:opacity-100 transition block"
        >
          ☎ +91 6235360618
        </a>
      </div>
    </motion.div>
  )
}

export default Menu





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
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">
            My Resume
          </h2>

          <p className="mt-2 text-center text-white/60 text-sm sm:text-base">
            ATS-optimized resume for modern full-stack roles
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
              transition
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
              bg-green-500/10 text-green-400
              border border-green-500/30
              hover:bg-green-500/20
              transition
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
          mt-8
          rounded-xl
          bg-white/5
          border border-white/10
          backdrop-blur
          p-5 sm:p-6
          text-white/80
        "                    >
          <motion.h3
            variants={fadeUp}
            className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-6"
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


