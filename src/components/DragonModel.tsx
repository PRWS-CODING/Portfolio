import { Suspense, useEffect } from "react"; // <-- Added useEffect
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import * as THREE from "three"; // <-- Added THREE to handle colors

// This function actually loads your downloaded file from the public folder
function Model() {
  const { scene } = useGLTF("./dragon.glb");

  // --- NEW COLOR OVERRIDE LOGIC ---
  useEffect(() => {
    // This traverses every piece of the 3D model
    scene.traverse((child: any) => {
      // If the piece is a physical shape with a material applied
      if (child.isMesh && child.material) {
        
        // Target the color and change it (using a purple hex here)
        child.material.color = new THREE.Color("#a78bfa"); 
        
        // Make it slightly metallic so it catches the ambientLight you added
        child.material.roughness = 0.2;
        child.material.metalness = 0.8;
        
        // Tell the engine to apply the changes
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

      <Suspense
        fallback={null}
      >
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