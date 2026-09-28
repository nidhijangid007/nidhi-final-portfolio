import { Environment, Sky } from "@react-three/drei";
import { Player } from "./Player";
import { World } from "./World";
import { IntroZone } from "./zones/IntroZone";
import { AboutZone } from "./zones/AboutZone";
import { SkillsZone } from "./zones/SkillsZone";
import { ProjectsZone } from "./zones/ProjectsZone";
import { ExperienceZone } from "./zones/ExperienceZone";
import { ContactZone } from "./zones/ContactZone";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
            />

            <Sky sunPosition={[100, 20, 100]} />
            <Environment preset="city" />

            <World />

            <IntroZone />
            <AboutZone />
            <SkillsZone />
            <ProjectsZone />
            <ExperienceZone />
            <ContactZone />

            <Player />
        </>
    );
};
