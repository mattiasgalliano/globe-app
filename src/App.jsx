import React from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import Globe from "./Globe"

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "black"
      }}
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Starfield background */}
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Lights */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        {/* Globe */}
        <Globe />
      </Canvas>

      {/* Title */}
      <h1
        style={{
          position: "absolute",
          top: "20px",
          width: "100%",
          textAlign: "center",
          color: "white",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          zIndex: 10
        }}
      >
        HéloWorld
      </h1>
    </div>
  )
}