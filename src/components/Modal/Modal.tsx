import { FC } from "react";
// import ReactDOM from "react-dom";
import "./Modal.css";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  // onClose?: () => void;
}

export const Modal: FC<Props> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  // return ReactDOM.createPortal(
  //   <dialog open aria-modal="true" aria-labelledby="dialog-title" className="modal">
  //     {children}
  //   </dialog>,
  //   document.body
  // );

  return (
    // <dialog open aria-modal="true" aria-labelledby="dialog-title" className="modal">
    <dialog open className="modal">
      {children}
    </dialog>
  );
};
