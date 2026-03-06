import React from "react"
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import Globe from "./Globe"

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ alpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Starfield background */}
        <Stars
          radius={100}       // radius of the star sphere
          depth={50}         // starfield depth
          count={1000}       // number of stars
          factor={4}         // size factor of stars
          saturation={0}     // optional color saturation
          fade               // stars fade at edges
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
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", // modern system font stack
        fontSize: "3rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        zIndex: 10
    }}
    >
    HéloWorld!
    </h1>
    </div>
  )
}