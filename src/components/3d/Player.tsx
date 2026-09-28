import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

export const Player = () => {
    const { camera } = useThree();
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case "ArrowUp":
                case "KeyW":
                    setMoveForward(true);
                    break;
                case "ArrowLeft":
                case "KeyA":
                    setMoveLeft(true);
                    break;
                case "ArrowDown":
                case "KeyS":
                    setMoveBackward(true);
                    break;
                case "ArrowRight":
                case "KeyD":
                    setMoveRight(true);
                    break;
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            switch (event.code) {
                case "ArrowUp":
                case "KeyW":
                    setMoveForward(false);
                    break;
                case "ArrowLeft":
                case "KeyA":
                    setMoveLeft(false);
                    break;
                case "ArrowDown":
                case "KeyS":
                    setMoveBackward(false);
                    break;
                case "ArrowRight":
                case "KeyD":
                    setMoveRight(false);
                    break;
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("keyup", onKeyUp);
        };
    }, []);

    useFrame((_, delta) => {
        const speed = 5.0;
        const direction = new THREE.Vector3();
        const frontVector = new THREE.Vector3(
            0,
            0,
            Number(moveBackward) - Number(moveForward)
        );
        const sideVector = new THREE.Vector3(
            Number(moveLeft) - Number(moveRight),
            0,
            0
        );

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(speed * delta);

        if (moveForward || moveBackward || moveLeft || moveRight) {
            // We move the camera relative to its local orientation but projected on floor? 
            // PointerLockControls usually rotates the camera. 
            // So moving along Z locally is moving forward/backward.
            // Moving along X locally is moving left/right.

            // This is easiest:
            camera.translateX(sideVector.x * speed * delta); // Inverted X? sideVector is (Left-Right). translateX(+) moves right.
            // If Left(1)-Right(0) = 1. translateX(1) -> moves right. Correct? No. key A is Left. 
            // Usually Left is -X. 
            // Let's use MoveRight - MoveLeft.

            camera.translateZ(frontVector.z * speed * delta);
        }

        // Clamp floor
        camera.position.y = 1.6;
    });

    return <PointerLockControls />;
};
