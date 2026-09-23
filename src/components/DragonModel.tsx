import { Suspense, useEffect } from "react"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import * as THREE from "three"; 

function Model() {
  const { scene } = useGLTF("./dragon.glb");

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.color = new THREE.Color("#a78bfa");

        child.material.roughness = 0.2;
        child.material.metalness = 0.8;

        child.material.needsUpdate = true;
      }
    });
  }, [scene]);
  // --------------------------------

  return <primitive object={scene} />;
}

export default function DragonModel() {
  return (
    <Canvas
      gl={{ alpha: true }}
      legacy
      shadows
      camera={{ position: [0, 0, 3], fov: 50 }}
    >
      {/* Add some lights to illuminate the model */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />

      <Suspense fallback={null}>
        {/* Stage automatically centers your model and sets up great studio lighting */}
        <Stage environment={null} intensity={0.5}>
          <Model />
        </Stage>

        {/* OrbitControls lets you click and drag to spin the dragon around */}
        <OrbitControls autoRotate autoRotateSpeed={2.0} enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}
