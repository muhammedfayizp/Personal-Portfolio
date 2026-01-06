// import React, { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Menu from "./Menu"
// import { FaUser } from "react-icons/fa"


// const Navbar = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md">
//         <FaUser size={20} className="text-white cursor-pointer" />

//         <div
//           className="text-3xl text-white cursor-pointer"
//           onClick={() => setOpen(true)}
//         >
//           ☰
//         </div>
//       </nav>

//       {/* MENU OVERLAY */}
//       <AnimatePresence>
//         {open && <Menu close={() => setOpen(false)} />}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Navbar
