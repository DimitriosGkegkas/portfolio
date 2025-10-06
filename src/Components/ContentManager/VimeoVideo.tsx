import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Html } from "@react-three/drei";
import * as THREE from "three";
import "./VimeoVideo.css";
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import Window from "../DraggableWindow/Window";

interface VimeoVideoProps {
    videoId: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

export const VimeoVideo: React.FC<VimeoVideoProps> = ({
    videoId,
    autoplay = true,
    loop = true,
    muted = true
}) => {

    const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&title=0&byline=0&portrait=0&background=1&transparent=1`;

    return (
        <>
            <Window 
                isVisible={true}
                setIsVisible={() => {}}
                onClose={() => {}}
                isDragging={false}
                menuButtons={[]}
                style={{
                    width: "530px",
                    height: "300px",
                    pointerEvents: 'none'
                }}
            >
                <div className="vimeo-container">
                    <iframe
                        src={vimeoUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="vimeo-iframe"
                    />
                </div>
            </Window>
        </>
    );
};
