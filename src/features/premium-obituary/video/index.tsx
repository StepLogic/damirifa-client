import ErrorBoundary from "@lib/error-boundaries/component-boundary";
import ReactPlayer from "react-player";
import cn from "classnames";
import s from "./index.module.css";

const Video = () => {
    return (
        <>
            <ErrorBoundary>
                <div className={cn(s.playerWrapper)}>
                    <ReactPlayer
                        light={true}
                        className="react-player"
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        width="100%"
                        height="100%"
                        // wrapper={(props: any) => <div className="">{...props}</div>}
                        controls={false}
                        playing={true}
                    />
                </div>
            </ErrorBoundary>
        </>
    );
};
export default Video;
