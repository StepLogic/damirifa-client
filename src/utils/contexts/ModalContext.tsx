import Modal from "@components/modals/Modal";
import PremiumModal from "@components/modals/premium-modal";
import React, {
  ComponentType,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

type MyContextType = {
  setModalType: (value: string) => void;
  openModal: { (content: ReactNode, title: string, noHeader?: boolean): void };
  closeModal: { (): void };
};
const MyContext = React.createContext<MyContextType>({
  openModal: (content: ReactNode, title: string, noHeader?: boolean) => {},
  closeModal: () => {},
  setModalType: (value: string) => {},
});
type State = {
  modalVisible?: boolean;
  content: ReactNode;
  title: string;
  noHeader?: boolean;
};

enum ActionType {
  changeContent,
  close,
}

type Action = {
  type: ActionType;
  payload: State;
};
type ParentProps = {
  children?: ReactNode;
};
const initialState: State = {
  noHeader: false,
  modalVisible: false,
  content: <></>,
  title: "",
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.changeContent:
      const _state: State = {
        modalVisible: true,
        ...action.payload,
      };
      return _state;
    case ActionType.close:
      return { modalVisible: false, ...action.payload };
    default:
      throw new Error();
  }
}

function ModalContext(props: ParentProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modalType, setModalType] = useState<string>("dashboard");
  const { children } = props;
  const getModalType = () => {
    switch (modalType) {
      case "dashboard":
        return Modal;
      case "premium":
        return PremiumModal;
    }
  };
  const Component: ComponentType = getModalType();
  return (
    <MyContext.Provider
      value={{
        setModalType: (value: string) => setModalType(value),
        openModal: (content: ReactNode, title: string, noHeader?: boolean) => {
          dispatch({
            type: ActionType.changeContent,
            payload: { content, title, noHeader },
          });
        },
        closeModal: () => {
          dispatch({
            type: ActionType.close,
            payload: { content: <></>, title: "", noHeader: false },
          });
        },
      }}
    >
      {children}
      {
        <Component
          title={state.title}
          isOpen={state.modalVisible}
          noHeader={state.noHeader}
          onRequestClose={() =>
            dispatch({
              type: ActionType.close,
              payload: { content: <></>, title: "", noHeader: false },
            })
          }
        >
          {state.content}
        </Component>
      }
    </MyContext.Provider>
  );
}

export default ModalContext;
export const useModalContext = () => {
  return useContext(MyContext);
};
