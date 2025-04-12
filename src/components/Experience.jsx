import { OrbitControls, MeshReflectorMaterial, Stage} from "@react-three/drei";
import { Suspense } from "react";
import { Mesh, MeshNormalMaterial } from "three";
import Chair from './Chair';

const Experience = () => {
      
    return (
        <>
        <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minPolarAngle={-0.1}  
        maxPolarAngle={Math.PI / 2.8}
      />

       <Stage environment={"city"} intensity={3} shadows="contact" adjustCamera={0}>
       </Stage>

       <Suspense fallback={null}>
               <Chair />
          </Suspense>

       
       <mesh rotation={[-Math.PI / 2, 0, 0]} >
          <planeGeometry args={[170, 170]}/>
          <MeshReflectorMaterial
             blur={[300, 100]}
             resolution={1024}
             mixBlur={1}
             mixStrength={40}
             roughness={1}
             depthScale={1.2}
             minDepthThreshold={0.4}
             maxDepthThreshold={1.4}
             color="#101010"
             metalness={0.5}
          />
       </mesh>
       </>
    )
};

export default Experience;