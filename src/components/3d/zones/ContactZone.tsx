import { Text } from "@react-three/drei";

export const ContactZone = () => {
    return (
        <group position={[0, 0, -25]}>
            <Text position={[0, 3, 0]} fontSize={0.8} color="#ff0088" anchorX="center">
                Let's Connect
            </Text>

            <group position={[-1.5, 1.5, 0]}>
                <mesh onClick={() => window.open('https://github.com', '_blank')}>
                    <boxGeometry args={[1, 1, 0.2]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <Text position={[0, -0.7, 0]} fontSize={0.2} color="white">GitHub</Text>
            </group>

            <group position={[1.5, 1.5, 0]}>
                <mesh onClick={() => window.open('mailto:example@example.com', '_blank')}>
                    <boxGeometry args={[1, 1, 0.2]} />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <Text position={[0, -0.7, 0]} fontSize={0.2} color="white">Email</Text>
            </group>
        </group>
    );
}
