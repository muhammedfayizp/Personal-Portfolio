// import React from "react"
// import Dock from "../layouts/Dock"
// import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"


// const Contact = () => {
//   const items = [
//     {
//       icon: <FaLinkedinIn size={15} />,
//       label: "LinkedIn",
//       onClick: () =>
//         window.open("https://www.linkedin.com/in/fayiz-p-85b3612a1/", "_blank"),
//     },
//     {
//       icon: <FaGithub size={15} />,
//       label: "GitHub",
//       onClick: () => window.open("https://github.com/muhammedfayizp", "_blank"),
//     },
//     {
//       icon: <FaWhatsapp size={15} />,
//       label: "WhatsApp",
//       onClick: () => {
//         window.location.href = "https://wa.me/916235360618"
//       },
//     },

//   ]
//   return (
//     <section
//       id="contact"
//       className="py-32 px-6 md:px-10 text-white text-center"
//     >
//       {/* Heading */}
//       <h2 className="relative text-4xl sm:text-5xl font-serif text-center mb-16">
//         <span className="relative z-10 px-4 rounded-lg bg-[#020c05]">
//           Get In Touch
//         </span>
//         <span className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
//       </h2>

//       {/* Form Card */}
//       <div className="max-w-xl mx-auto">
//         <div
//           className="
//             bg-white/5
//             backdrop-blur-xl
//             border border-white/10
//             rounded-3xl
//             p-8
//             shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]
//           "
//         >
//           <form className="space-y-6 text-left">
//             {/* To */}
//             <div>
//               <label className="block text-sm text-white/60 mb-2">
//                 To
//               </label>
//               <input
//                 type="email"
//                 value="fayizp6235@gmail.com"
//                 readOnly
//                 className="
//                   w-full px-4 py-3 rounded-xl
//                   bg-black/40
//                   border border-white/10
//                   text-white
//                   opacity-80
//                   cursor-not-allowed
//                   focus:outline-none
//                 "
//               />
//             </div>


//             {/* Subject */}
//             <div>
//               <label className="block text-sm text-white/60 mb-2">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 placeholder="Job opportunity/Collaboration"
//                 className="
//                   w-full px-4 py-3 rounded-xl
//                   bg-black/40
//                   border border-white/10
//                   text-white
//                   placeholder-white/40
//                   focus:outline-none
//                   focus:border-teal-400/60
//                 "
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm text-white/60 mb-2">
//                 Message
//               </label>
//               <textarea
//                 rows="5"
//                 placeholder="Write your message..."
//                 className="
//                   w-full px-4 py-3 rounded-xl
//                   bg-black/40
//                   border border-white/10
//                   text-white
//                   placeholder-white/40
//                   resize-none
//                   focus:outline-none
//                   focus:border-teal-400/60
//                 "
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="
//                 w-full mt-4 py-3 rounded-xl
//                 bg-gradient-to-r from-teal-400 to-emerald-500
//                 text-black font-semibold
//                 transition-all
//                 hover:scale-[1.02]
//                 active:scale-[0.98]
//               "
//             >
//               Send Mail
//             </button>
//           </form>
//           {/* DOCK (CENTERED BOTTOM) */}


//         <div className="flex justify-center w-full mt-20">
//             <div className="fixed bottom-1 justify-center -translate-x-1/2 z-40">
//               <Dock
//                 items={items}
//                 panelHeight={50}
//                 baseItemSize={34}
//                 magnification={54}
//               />
//             </div>
//           </div>
//           </div>
//       </div>
//     </section>
//   )
// }

// export default Contact


import React, { useState } from "react"
import { motion } from "framer-motion"
import Dock from "../layouts/Dock"
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"
import emailjs from 'emailjs-com'

const Contact = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})


  const resetForm = () => {
    setEmail("")
    setSubject("")
    setMessage("")
    setErrors({})
  }

  const items = [
    {
      icon: <FaLinkedinIn size={15} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/fayiz-p-85b3612a1/",
          "_blank"
        ),
    },
    {
      icon: <FaGithub size={15} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/muhammedfayizp", "_blank"),
    },
    {
      icon: <FaWhatsapp size={15} />,
      label: "WhatsApp",
      onClick: () =>
        window.open("https://wa.me/916235360618", "_blank"),
    },
  ]

  const hasLetter = (text) => /[a-zA-Z]/.test(text)
  const hasNumber = (text) => /\d/.test(text)
  const hasSpecialChar = (text) => /[^a-zA-Z0-9\s]/.test(text)

  const isOnlyNumbers = (text) => /^\d+$/.test(text)
  const isOnlySpecialChars = (text) => /^[^a-zA-Z0-9]+$/.test(text)

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)


  const validate = () => {
    const newErrors = {}
  
    /* ---------- Email ---------- */
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(email)) {
      newErrors.email = "Enter a valid email address"
    } else if (email.toLowerCase() === "fayizp6235@gmail.com") {
      newErrors.email = "Please enter your own email address"
    }
  
    /* ---------- Subject ---------- */
    if (!subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (isOnlyNumbers(subject)) {
      newErrors.subject = "Subject cannot contain only numbers"
    } else if (isOnlySpecialChars(subject)) {
      newErrors.subject = "Subject cannot contain only special characters"
    } else if (!hasLetter(subject)) {
      newErrors.subject = "Subject must contain letters"
    }
  
    /* ---------- Message ---------- */
    if (!message.trim()) {
      newErrors.message = "Message cannot be empty"
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (isOnlyNumbers(message)) {
      newErrors.message = "Message cannot contain only numbers"
    } else if (isOnlySpecialChars(message)) {
      newErrors.message = "Message cannot contain only special characters"
    } else if (!hasLetter(message)) {
      newErrors.message = "Message must contain letters"
    }
  
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          subject,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!")
        resetForm() 
      })
      .catch(() => {
        alert("Failed to send message")
      })
  }


  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-10 text-white text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="relative text-4xl sm:text-5xl font-serif mb-16"
      >
        <span className="relative z-10 px-4 rounded-lg bg-[#020c05]">
          Get In Touch
        </span>
        <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.h2>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="max-w-xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* To */}
            <div>
              <label className="block text-sm text-white/60 mb-2">
                To
              </label>
              <input
                type="email"
                value="fayizp6235@gmail.com"
                readOnly
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white opacity-80 cursor-not-allowed"
              />
            </div>

            {/* From Email */}
            <div>
              <label className="block text-sm text-white/50 mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400/60"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>


            {/* Subject */}
            <div>
              <label className="block text-sm text-white/60 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Job opportunity / Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-teal-400/60"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-white/60 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 resize-none focus:outline-none focus:border-teal-400/60"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold"
            >
              Send Mail
            </motion.button>
          </form>

          {/* Dock */}
          <div className="flex justify-center w-full mt-20">
            <div className="fixed bottom-1 justify-center -translate-x-1/2 z-40">
              <Dock
                items={items}
                panelHeight={50}
                baseItemSize={34}
                magnification={54}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
