import { Canvas } from "@react-three/fiber";
import './App.css';
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./Context/customizable";


function App() {
  return (
  <CustomizationProvider>
  <div className="App">
     <Canvas camera={{ position: [3, 5, 10], fov: 45 }}>
       <color attach="background" args={["#101010"]} />
       <fog attach="fog" args={['#101010', 10, 20]} />
       <Experience />
     </Canvas>
     <Configurator />

    </div>
   </CustomizationProvider> 
  );
}

export default App
