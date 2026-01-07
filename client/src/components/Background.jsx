import React from "react"
import LightRays from "../layouts/LightRays"

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* <div style={{ width: '100%', height: '750px', position: 'relative' }}> */}
      {/* <div className="relative w-full h-[60vh] sm:h-[900px] md:h-[750px]"> */}
      <div className="relative w-full min-h-screen">

        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={0.8}
          lightSpread={0.8}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Light Lines */}
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>

    </div>
  )
}

export default Background
