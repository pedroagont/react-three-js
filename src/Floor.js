import React from 'react'

export const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} castShadow receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.4} />
    </mesh>
  )
}
