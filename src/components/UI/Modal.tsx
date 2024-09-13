import React, {ReactElement} from "react";

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  children: ReactElement,
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
          <div className="max-h-full w-full overflow-y-auto rounded-lg bg-white flex max-w-sm md:max-w-sm">
            <div className="relative w-full">
              <div className="m-8 my-20 max-w-[400px] mx-auto px-2">
                <button className="absolute right-1 top-1" onClick={onClose}>X</button>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;