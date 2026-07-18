import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

// This function actually loads your downloaded file from the public folder
function Model() {
  // CHANGE 'dragon.glb' to match the exact name of your file in the public folder!
  const { scene } = useGLTF("./dragon.glb");
  return <primitive object={scene} />;
}

export default function DragonModel() {
  return (
    <Canvas legacy shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense
        fallback={<span style={{ color: "#a78bfa" }}>Loading Dragon...</span>}
      >
        {/* Stage automatically centers your model and sets up great studio lighting */}
        <Stage environment="city" intensity={0.5}>
          <Model />
        </Stage>

        {/* OrbitControls lets you click and drag to spin the dragon around */}
        <OrbitControls autoRotate autoRotateSpeed={2.0} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
