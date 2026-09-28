import { Text, Float } from "@react-three/drei";

export const SkillsZone = () => {
    return (
        <group position={[-10, 0, -5]}>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white" anchorX="center">
                Skills
            </Text>

            {/* Floating Skill Orbs */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <group position={[0, 1.5, 0]}>
                    <mesh position={[-1, 0, 0]}>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshStandardMaterial color="#61dbfb" /> {/* React Blue */}
                    </mesh>
                    <Text position={[-1, -0.6, 0]} fontSize={0.2} color="white">React</Text>

                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.6, 0.6, 0.6]} />
                        <meshStandardMaterial color="#ffffff" /> {/* Three.js White */}
                    </mesh>
                    <Text position={[0, -0.6, 0]} fontSize={0.2} color="white">Three.js</Text>

                    <mesh position={[1, 0, 0]}>
                        <coneGeometry args={[0.4, 0.8, 32]} />
                        <meshStandardMaterial color="#3178c6" /> {/* TS Blue */}
                    </mesh>
                    <Text position={[1, -0.6, 0]} fontSize={0.2} color="white">TypeScript</Text>
                </group>
            </Float>
        </group>
    );
};
