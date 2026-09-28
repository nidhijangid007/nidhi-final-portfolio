import { Text, Image } from "@react-three/drei";

export const ProjectsZone = () => {
    return (
        <group position={[0, 0, -15]}>
            <Text position={[0, 4, 0]} fontSize={0.6} color="white" anchorX="center">
                Featured Projects
            </Text>

            <group position={[-3, 1.5, 0]} rotation={[0, 0.2, 0]}>
                <mesh>
                    <planeGeometry args={[3, 2]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.25} color="white">Project Alpha</Text>
            </group>

            <group position={[3, 1.5, 0]} rotation={[0, -0.2, 0]}>
                <mesh>
                    <planeGeometry args={[3, 2]} />
                    <meshStandardMaterial color="gray" />
                </mesh>
                <Text position={[0, -1.2, 0]} fontSize={0.25} color="white">Project Beta</Text>
            </group>
        </group>
    );
};
