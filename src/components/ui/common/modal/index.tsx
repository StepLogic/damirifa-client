import React, {useState} from "react";
// import styled from 'styled-components'\

// import { Modal as MainModal } from 'react-bootstrap'
// const Container = styled.div`
//   & .modal-header {
//     background: var(--damirifa-red);
//     border-radius: 20px 20px 0px 0px;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 22px;
//     line-height: 27px;
//     color: #ffffff;
//     height: min(80px, 9vh);
//     justify-content: center;
//     @media only screen and (max-width: 900px) {
//       font-size: 16px;
//     }
//   }
//   textarea {
//     width: 100%;
//     height: 117px;
//     background: rgba(228, 228, 228, 0.5);
//     border-radius: 5px;
//     border: none;
//   }
//   & .scrollbar-container {
//     display: block;
//     height: 71vh;
//   }
//   & .dropdown-menu {
//     width: 100%;
//     background: #f8f8f8;
//     box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
//     border-radius: 20px;
//     & .dropdown-item {
//       height: min(60px, 6vh);
//     }
//     & .dropdown-item:hover {
//       background: rgba(184, 0, 12, 0.1);
//     }
//     & .dropdown-item:active {
//       background: rgba(184, 0, 12, 0.1);
//     }
//     & .dropdown-item:hover {
//       background: rgba(184, 0, 12, 0.1);
//     }
//   }
//   & .text-mute {
//     color: rgba(0, 0, 0, 0.3);
//   }
//   & .dropdown-toggle::after {
//     font-size: 28px;
//     height: 14px;
//     color: var(--damirifa-red);
//   }
//   input[type='checkbox'] {
//     width: 17px;
//     aspect-ratio: 1;
//     border: 1.5px solid rgba(0, 0, 0, 0.3);
//     box-sizing: border-box;
//     border-radius: 1px;
//   }
//   & .dropdown {
//     display: flex;
//     width: 100%;
//     & .dropdown-toggle {
//       background: rgba(228, 228, 228, 0.5);
//       border-radius: 5px;
//       width: 100%;
//       height: 50px;
//       font-size: 15px;
//       line-height: 18px;
//       color: rgba(0, 0, 0, 0.35);
//       display: flex;
//       flex-direction: row;
//       align-items: center;
//       justify-content: center;
//       padding-left: 20px;
//       padding-right: 25px;
//       input {
//         background: rgba(228, 228, 228, 0);
//         margin-right: auto;
//       }
//       input:focus {
//         outline: none;
//       }
//       span {
//         width: 100%;
//       }
//     }
//   }
//   label {
//     display: block;
//     font-weight: 400;
//     font-size: 15px;
//     line-height: 18px;
//     color: rgba(0, 0, 0, 0.5);
//     text-transform: capitalize;
//     span {
//       color: var(--damirifa-red);
//     }
//   }
//   & .text-input {
//     width: 100%;
//     height: 50px;
//     background: rgba(228, 228, 228, 0.5);
//     border-radius: 5px;
//   }
//   & .file-button {
//     height: 50px;
//     width: 100%;
//     background: rgba(228, 228, 228, 0.5);
//     border-radius: 5px;
//     border: 1px dashed var(--damirifa-red);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     span {
//       color: var(--damirifa-red);
//       padding-bottom: 0.5rem;
//       border-bottom: 1px solid var(--damirifa-red);
//     }
//   }
// `

export type ModalProps = {
    children?: React.ReactNode;
    show?: boolean;
    toggle?: any;
    defaultTitle: string;
    showByDefault: boolean;
    toggleModal: any;
};
export const ModalContext = React.createContext({
    toggleModal: () => {
    },
    setTitle: (value: string) => {
    },
    title: "",
});
export default function Modal({
                                  children,
                                  showByDefault,
                                  defaultTitle,
                                  toggleModal,
                              }: ModalProps) {
    const [title, setTitle] = useState(defaultTitle || "");
    return <dialog></dialog>;
}
