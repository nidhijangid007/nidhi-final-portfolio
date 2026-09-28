import { Text } from "@react-three/drei";

export const IntroZone = () => {
  return (
    <group position={[0, 2, -5]}>
      <Text
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Welcome
      </Text>
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.5}
        color="#a0a0a0"
        anchorX="center"
        anchorY="middle"
      >
        Explore the world
      </Text>
    </group>
  );
};
