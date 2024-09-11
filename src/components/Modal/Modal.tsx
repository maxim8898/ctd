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
              <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
                  <div className="max-h-full w-full overflow-y-auto rounded-lg bg-white flex max-w-sm md:max-w-none pt-6">
                      <div className="w-full">
                          <div className="m-8 my-20 max-w-[400px] mx-auto px-2">
                              <button onClick={() => onClose()}>X</button>
                              { children }
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </>
    );
}

export default Modal;