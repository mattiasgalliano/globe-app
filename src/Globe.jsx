import React from "react"
import { useRef } from "react"
import { Sphere, OrbitControls, useTexture } from "@react-three/drei"
import Marker from "./Marker"

export default function Globe() {
  const globeRef = useRef()
  
  const texture = useTexture("/globe-app/earth.jpg")

  const markers = [
    { lat: 40.7128, lon: -74.006, image: "https://picsum.photos/200?1" },
    { lat: 48.8566, lon: 2.3522, image: "https://picsum.photos/200?2" }
  ]

  const convertLatLng = (lat, lon, radius = 2.05) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)

    return [
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    ]
  }

  return (
    <>
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial map={texture} />
      </Sphere>

      {markers.map((m, i) => (
        <Marker
          key={i}
          position={convertLatLng(m.lat, m.lon)}
          image={m.image}
        />
      ))}

      <OrbitControls enableZoom />
    </>
  )
}