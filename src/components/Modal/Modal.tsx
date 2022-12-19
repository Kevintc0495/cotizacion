import React from "react";
import "./modal.scss";

interface modal {
  open: boolean;
  handleClose: () => void;
  heightContain: number;
  reference: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Modal = ({
  open,
  handleClose,
  heightContain,
  reference,
  children,
}: modal) => {
  return (
    <>
      <div
        className={`modal__layer ${open ? "modal--view " : ""}`}
        onClick={handleClose}
        data-testid="modal-layer"
      ></div>
      <div
        className={`modal__contain ${open ? "modal--view " : ""}`}
        ref={reference}
        style={{ top: `calc(50% - ${heightContain / 2}px` }}
        data-testid="modal-contain"
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
