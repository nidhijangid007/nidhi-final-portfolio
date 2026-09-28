export const Interface = () => {
    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 z-50">
            <div className="text-white font-bold text-xl drop-shadow-md">
                Nidhi's 3D Portfolio
            </div>

            <div className="text-white/70 text-sm text-center font-mono bg-black/50 p-4 rounded-lg backdrop-blur-sm self-center">
                WASD to Move | Mouse to Look | Click to Start
            </div>
        </div>
    );
};
