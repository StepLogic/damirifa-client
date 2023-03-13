import { useState, useEffect, useRef, RefObject } from "react";

const useFullScreen = (): {
  containerRef: RefObject<HTMLElement>;
  fullScreen: boolean;
  toggleFullScreen: Function;
} => {
  const [fullScreen, setFullScreen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const updateState = (event: Event) => {
      //@ts-ignore
      if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement
      ) {
        setFullScreen(true);
        // console.log("Fullscreen true", document.fullscreenElement);
      } else {
        setFullScreen(false);
        // console.log("Fullscreen false", document.fullscreenElement);
      }
      // console.log("Fullscreen", document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", updateState);
  }, []);
  useEffect(() => {
    console.log("Fullscreen ", fullScreen);
  }, [fullScreen]);
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen)
        containerRef.current?.requestFullscreen();
      else if (containerRef.current?.msRequestFullscreen)
        containerRef.current?.msRequestFullscreen();
      else if (containerRef.current?.mozRequestFullscreen)
        containerRef.current?.mozRequestFullscreen();
      else if (containerRef.current?.webkitRequestFullscreen) {
        containerRef.current?.webkitRequestFullscreen();
        // Because IOS Does not supoort Fullscreen yet lets update state to remove thumbnails in Fa Portrait
      } else {
        setFullScreen((prev) => !prev);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return { containerRef, fullScreen, toggleFullScreen };
};

export default useFullScreen;
