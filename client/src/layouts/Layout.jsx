import React from "react"
const Layout = ({ children }) => {
    return (
      <div className="relative min-h-screen overflow-hidden text-white">
        
        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#000f03] via-[#020a05] to-black" />
  
          {/* Soft glow */}
          <div className="absolute right-[-20%] top-[-20%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />
          <div className="absolute left-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-green-400/10 blur-[140px]" />
        </div>
  
        {/* PAGE CONTENT */}
        {children}
      </div>
    )
  }
  
  export default Layout
  