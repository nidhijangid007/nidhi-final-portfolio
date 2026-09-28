import { Grid } from "@react-three/drei";

export const World = () => {
    return (
        <group>
            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Grid overlay for tech vibe */}
            <Grid
                args={[100, 100]}
                cellSize={1}
                cellThickness={0.5}
                cellColor="#6f6f6f"
                sectionSize={5}
                sectionThickness={1}
                sectionColor="#9d9d9d"
                fadeDistance={50}
                infiniteGrid
            />
        </group>
    );
};
