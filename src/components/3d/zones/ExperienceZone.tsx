import { Text } from "@react-three/drei";

export const ExperienceZone = () => {
    return (
        <group position={[15, 0, -15]}>
            <Text position={[0, 4, 0]} fontSize={0.6} color="white" anchorX="center">
                Career Journey
            </Text>

            {/* Simulation of a timeline path */}
            <group position={[0, 0, 2]}>
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                    <meshStandardMaterial color="lime" />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">2023 - Start</Text>
            </group>

            <group position={[2, 0, 0]}>
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                    <meshStandardMaterial color="lime" />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">2024 - Growth</Text>
            </group>

            <group position={[4, 0, -2]}>
                <mesh position={[0, 0.1, 0]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.5]} />
                    <meshStandardMaterial color="lime" />
                </mesh>
                <Text position={[0, 0.5, 0]} fontSize={0.2} color="white">2025 - Expert</Text>
            </group>
        </group>
    );
};
