import { Text } from "@react-three/drei";

export const AboutZone = () => {
    return (
        <group position={[10, 0, -5]}>
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2, 3, 0.2]} />
                <meshStandardMaterial color="#0088ff" emissive="#002244" />
            </mesh>
            <Text position={[0, 3.5, 0]} fontSize={0.5} color="white" anchorX="center">
                About Me
            </Text>
            <Text
                position={[0, 1.5, 0.11]}
                fontSize={0.2}
                color="white"
                maxWidth={1.8}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
            >
                I am a creative developer passionate about building immersive web experiences.
            </Text>
        </group>
    );
};
