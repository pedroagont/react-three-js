import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'
import { Text } from './Text'
import { Floor } from './Floor'
import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

softShadows()

const App = () => {
  return (
    <React.Fragment>
      <Text />
      <Canvas colorManagement shadowMap camera={{ position: [0, 8, 15] }}>
        <fog attach="fog" args={[Colors.fog, 8, 30]} />
        <Lights />
        <Floor />
        <ShapeCluster />
        <OrbitControls />
      </Canvas>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//Documentation:
//https://www.notion.so/Creative-Coding-with-React-f05cf5e59b4946b28465d9d378c143da
//https://threejs.org/docs/
