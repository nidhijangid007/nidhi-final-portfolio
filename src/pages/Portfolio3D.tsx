import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "@/components/3d/Experience";
import { Interface } from "@/components/3d/ui/Interface";
import { Loader } from "@react-three/drei";

const Portfolio3D = () => {
    return (
        <>
            <div className="fixed inset-0 bg-black">
                <Canvas
                    shadows
                    camera={{ position: [0, 2, 5], fov: 75 }}
                    gl={{ antialias: true }}
                >
                    <Suspense fallback={null}>
                        <Experience />
                    </Suspense>
                </Canvas>
                <Loader />
                <Interface />
            </div>
        </>
    );
};

export default Portfolio3D;
