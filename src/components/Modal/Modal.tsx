import { FC, forwardRef } from "react";
import "./Modal.css";

interface Props {
  children: React.ReactNode;
  // isOpen: boolean;
  // onClose?: () => void;
  // toggleDialog: () => void;
}

// TODO - remove - or make and use modal component

export const Modal: FC<Props> = forwardRef<HTMLDialogElement, Props>(({ children }, ref) => {
  // if (!isOpen) return null;

  return (
    // <dialog open aria-modal="true" aria-labelledby="dialog-title" className="modal">
    <dialog open className="modal" ref={ref}>
      {children}
    </dialog>
  );
});
