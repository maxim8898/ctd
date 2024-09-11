import React, {ReactElement} from "react";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactElement,
}

function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
      <>
          {isOpen && (
              <div className="modal" onClick={() => onClose()}>
                  { children }
              </div>
          )}
      </>
    );
}

export default Modal;