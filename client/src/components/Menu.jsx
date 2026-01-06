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
