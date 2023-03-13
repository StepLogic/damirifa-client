import cn from "classnames";
import s from "./index.module.css";

export type SocialMediaBarProps = {
    className?: string;
    linkedin?: string;
    gmail?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    whatsApp?: string;
    youtube?: string;
};
export default function SocialMediaBar({
                                           facebook = "",
                                           twitter = "",
                                           instagram = "",
                                           whatsApp = "",
                                           youtube = "",
                                           className,
                                       }: SocialMediaBarProps) {
    return (
        <div className={cn(className, s.root)}>
            {typeof facebook !== "undefined" ? (
                <a
                    href={facebook}
                    rel={"noreferrer"}
                    target={"_blank"}
                    className={cn(s.a, "mt-auto", s.button)}
                >
                    <svg
                        width="1em"
                        height="1em"
                        // height="512"
                        viewBox="0 0 152 152"
                        // width="512"
                        className={cn(s.svg)}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Color_Icon" data-name="Color Icon">
                                <g id="_01._Facebook" data-name="01. Facebook">
                                    <rect
                                        id="Background"
                                        fill="#4a6ea9"
                                        height="152"
                                        rx="12"
                                        width="152"
                                    />
                                    <path
                                        id="Icon"
                                        d="m66.44 81.17h-9.94c-1.56 0-2.12-.57-2.12-2.14q0-6.07 0-12.13c0-1.56.59-2.15 2.13-2.15h9.93v-8.75a21.89 21.89 0 0 1 2.73-11.26 16.51 16.51 0 0 1 8.93-7.42 21.91 21.91 0 0 1 7.65-1.32h9.83c1.41 0 2 .62 2 2v11.41c0 1.43-.6 2-2 2-2.69 0-5.38 0-8.06.11s-4.14 1.33-4.14 4.13c-.06 3 0 5.94 0 9h11.55c1.64 0 2.2.56 2.2 2.21q0 6 0 12.06c0 1.63-.52 2.14-2.17 2.15h-11.64v32.54c0 1.74-.54 2.29-2.26 2.29h-12.52c-1.51 0-2.1-.59-2.1-2.1z"
                                        fill="#fff"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
            ) : (
                <></>
            )}
            {typeof twitter !== "undefined" ? (
                <a
                    href={twitter}
                    rel={"noreferrer"}
                    target={"_blank"}
                    className={cn(s.a, s.button)}
                >
                    <svg
                        width="1em"
                        height="1em"
                        // height="512"
                        viewBox="0 0 152 152"
                        // width="512"
                        className={cn(s.svg)}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Color_Icon" data-name="Color Icon">
                                <g id="_04.Twitter" data-name="04.Twitter">
                                    <rect
                                        id="Background"
                                        fill="#03a9f4"
                                        height="152"
                                        rx="12"
                                        width="152"
                                    />
                                    <path
                                        id="Icon"
                                        d="m125.23 45.47a42 42 0 0 1 -11.63 3.19 20.06 20.06 0 0 0 8.88-11.16 40.32 40.32 0 0 1 -12.8 4.89 20.18 20.18 0 0 0 -34.92 13.8 20.87 20.87 0 0 0 .47 4.6 57.16 57.16 0 0 1 -41.61-21.11 20.2 20.2 0 0 0 6.21 27 19.92 19.92 0 0 1 -9.12-2.49v.22a20.28 20.28 0 0 0 16.17 19.82 20.13 20.13 0 0 1 -5.29.66 18 18 0 0 1 -3.83-.34 20.39 20.39 0 0 0 18.87 14.06 40.59 40.59 0 0 1 -25 8.61 36.45 36.45 0 0 1 -4.83-.28 56.79 56.79 0 0 0 31 9.06c37.15 0 57.46-30.77 57.46-57.44 0-.89 0-1.75-.07-2.61a40.16 40.16 0 0 0 10.04-10.48z"
                                        fill="#fff"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
            ) : (
                <></>
            )}
            {typeof instagram !== "undefined" ? (
                <a
                    href={instagram}
                    rel={"noreferrer"}
                    target={"_blank"}
                    className={cn(s.a, s.button)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        enableBackground="new 0 0 512 512"
                        viewBox="0 0 512 512"
                        className={cn(s.svg)}
                    >
                        <rect
                            width="512"
                            height="512"
                            fill="#c32aa3"
                            rx="20"
                            ry="20"
                        ></rect>
                        <path
                            fill="#fff"
                            d="M371.643 0H140.357C62.964 0 0 62.964 0 140.358v231.285C0 449.037 62.964 512 140.357 512h231.286C449.037 512 512 449.037 512 371.643V140.358C512 62.964 449.037 0 371.643 0zm110.121 371.643c0 60.721-49.399 110.121-110.121 110.121H140.357c-60.721 0-110.121-49.399-110.121-110.121V140.358c0-60.722 49.4-110.122 110.121-110.122h231.286c60.722 0 110.121 49.4 110.121 110.122v231.285z"
                            data-original="#000000"
                            transform="matrix(.62 0 0 .62 97.28 97.28)"
                        ></path>
                        <path
                            fill="#fff"
                            d="M256 115.57c-77.434 0-140.431 62.997-140.431 140.431S178.565 396.432 256 396.432c77.434 0 140.432-62.998 140.432-140.432S333.434 115.57 256 115.57zm0 250.627c-60.762 0-110.196-49.435-110.196-110.197S195.238 145.804 256 145.804c60.763 0 110.197 49.435 110.197 110.197S316.763 366.197 256 366.197zM404.831 64.503c-23.526 0-42.666 19.141-42.666 42.667 0 23.526 19.14 42.666 42.666 42.666 23.526 0 42.666-19.141 42.666-42.667s-19.14-42.666-42.666-42.666zm0 55.096c-6.853 0-12.43-5.576-12.43-12.43s5.577-12.43 12.43-12.43c6.854 0 12.43 5.577 12.43 12.43s-5.576 12.43-12.43 12.43z"
                            data-original="#000000"
                            transform="matrix(.62 0 0 .62 97.28 97.28)"
                        ></path>
                    </svg>
                </a>
            ) : (
                <></>
            )}

            {typeof whatsApp !== "undefined" ? (
                <a
                    href={whatsApp}
                    rel={"noreferrer"}
                    target={"_blank"}
                    className={cn(s.a, "!mb-[54vh]", s.button)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        width="1em"
                        height="1em"
                        // height="512"
                        // viewBox="0 0 152 152"
                        // width="512"
                        className={cn(s.svg)}
                        enableBackground="new 0 0 418.135 418.135"
                        version="1.1"
                        viewBox="0 0 418.135 418.135"
                        xmlSpace="preserve"
                    >
                        <g fill="#7AD06D">
                            <path
                                d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                            <path
                                d="M309.712 252.351l-40.169-11.534a14.971 14.971 0 00-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 001.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                        </g>
                    </svg>
                </a>
            ) : (
                <></>
            )}
            {/* {!whatsApp && (
        <a
          href={whatsApp}
          rel={"noreferrer"}
          target={"_blank"}
          className={cn(s.a, "mt-auto !mb-[4rem] ", s.button)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="1em"
            height="1em"
            className={cn(s.svg)}
            enableBackground="new 0 0 455.731 455.731"
            version="1.1"
            viewBox="0 0 455.731 455.731"
            xmlSpace="preserve"
          >
            <path fill="#1BD741" d="M0 0H455.731V455.731H0z"></path>
            <g fill="#FFF">
              <path d="M68.494 387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638 0-87.765 71.402-159.167 159.167-159.167s159.166 71.402 159.166 159.167-71.401 159.167-159.166 159.167c-27.347 0-54.125-7-77.814-20.292L68.494 387.41zm85.943-50.004l4.872 2.975c20.654 12.609 44.432 19.274 68.762 19.274 72.877 0 132.166-59.29 132.166-132.167S300.948 95.321 228.071 95.321 95.904 154.611 95.904 227.488c0 25.393 7.217 50.052 20.869 71.311l3.281 5.109-12.855 45.658 47.238-12.16z"></path>
              <path d="M183.359 153.407l-10.328-.563a12.49 12.49 0 00-8.878 3.037c-5.007 4.348-13.013 12.754-15.472 23.708-3.667 16.333 2 36.333 16.667 56.333 14.667 20 42 52 90.333 65.667 15.575 4.404 27.827 1.435 37.28-4.612 7.487-4.789 12.648-12.476 14.508-21.166l1.649-7.702a5.35 5.35 0 00-2.993-5.98L271.22 246.04a5.352 5.352 0 00-6.477 1.591l-13.703 17.764a3.921 3.921 0 01-4.407 1.312c-9.384-3.298-40.818-16.463-58.066-49.687a3.96 3.96 0 01.499-4.419l13.096-15.15a5.35 5.35 0 00.872-5.602l-15.046-35.201a5.352 5.352 0 00-4.629-3.241z"></path>
            </g>
          </svg>
        </a>
      )} */}
        </div>
    );
}
// export const Container = styled.div.attrs((props) => ({
//   className: props.className,
// }))`

// `