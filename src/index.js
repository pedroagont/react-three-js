import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'

import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

softShadows()

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} castShadow receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.4} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas colorManagement shadowMap camera={{ position: [0, 8, 15] }}>
      <fog attach="fog" args={[Colors.fog, 8, 30]} />
      <Lights />
      <Floor />
      <ShapeCluster />
      <OrbitControls />
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//Documentation:
//https://www.notion.so/Creative-Coding-with-React-f05cf5e59b4946b28465d9d378c143da
//https://threejs.org/docs/
