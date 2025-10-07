import "./VimeoVideo.css";
import Window from "../DraggableWindow/Window";

interface VimeoVideoProps {
    videoId: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    ratio?: number;
    width?: number;
    height?: number;
}

export const VimeoVideo: React.FC<VimeoVideoProps> = ({
    videoId,
    autoplay = true,
    loop = true,
    muted = true,
    ratio = 0.56,
    width = 50,
    height,

}) => {

    const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}&title=0&byline=0&portrait=0&background=1&transparent=1`;

    return (
        <>
            <Window
                isVisible={true}
                setIsVisible={() => { }}
                onClose={() => { }}
                isDragging={false}
                menuButtons={[]}
                style={{
                    pointerEvents: 'none'
                }}
            >
                <div className="vimeo-container">
                    <iframe
                        src={vimeoUrl}
                        style={height ? {
                            width: `${width / ratio}vh`,
                            height: `${height}vh`
                        } : {
                            width: `${width}vw`,
                            height: `${ratio * width}vw`
                        }}
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
