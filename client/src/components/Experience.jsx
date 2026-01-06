import React from "react"
import { motion } from "framer-motion"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa"

/* ------------------ Animation ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ------------------ Styles ------------------ */

const contentStyle = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  backdropFilter: "blur(14px)",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
  color: "#fff",
}

const arrowStyle = {
  borderRight: "7px solid rgba(255,255,255,0.15)",
}

const iconStyle = {
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "#020c05",
  boxShadow: "0 0 25px rgba(34,197,94,0.5)",
}

/* ------------------ Component ------------------ */

const Experience = () => {
  return (
    <section id="experience" className="text-white">
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeUp}
        className="relative text-4xl sm:text-6xl font-serif text-center mb-20"
      >
        <span className="relative z-10 px-6 py-2 rounded-lg bg-[#020c05]">
          Experience
        </span>
        <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.h2>

      <VerticalTimeline lineColor="rgba(255,255,255,0.15)" >
        {/* Item 1 */}
        <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="2023 – 2025"
          iconStyle={iconStyle}
          icon={<FaBriefcase />}
        >
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h3 className="text-lg font-serif">MERN Stack Developer</h3>
            <h4 className="text-sm text-white/60 mt-1">Trainee, Brototype</h4>
            <ul className="text-sm text-white/70 mt-3 leading-relaxed list-disc ml-2 space-y-1">
              <li>
                Designed and developed two main Projects. <strong className="text-white">Worqzone</strong>, a virtual co-working platform
                focused on productivity, collaboration, and real-time interaction.
              </li>
              <li>Built <strong className="text-white">Sportkit</strong>, a full-featured e-commerce application with product management and user-friendly shopping experience.</li>
              <li>Gained hands-on experience in developing scalable web applications and <strong className="text-white">RESTful</strong> APIs.</li>
              <li>Implemented responsive and high-performance user interfaces using modern frontend practices.</li>
              <li>Strengthened skills in <strong className="text-white">JavaScript, React.js, Node.js, Express.js,</strong> and <strong className="text-white">MongoDB</strong> through real-world project development.</li>
            </ul>
          </motion.div>
        </VerticalTimelineElement>

        {/* Item 2 */}
        {/* <VerticalTimelineElement
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="2010 – 2011"
          iconStyle={iconStyle}
          icon={<FaBriefcase />}
        >
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h3 className="text-lg font-serif">Art Director</h3>
            <h4 className="text-sm text-white/60 mt-1">
              San Francisco, CA
            </h4>
            <p className="text-sm text-white/70 mt-3">
              Creative Direction, UX, Visual Design, SEO, Marketing
            </p>
          </motion.div>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </section>
  )
}

export default Experience




