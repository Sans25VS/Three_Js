import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

function BoxModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial color="orange" />
      </Box>
    </Canvas>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxModel />
  </React.StrictMode>
)
