import React, { useState } from "react"
import { Html } from "@react-three/drei"

export default function Marker({ position, image }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <mesh
        position={position}
        onClick={() => setShow(!show)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {show && (
        <Html position={position}>
          <img src={image} width="120" />
        </Html>
      )}
    </>
  )
}