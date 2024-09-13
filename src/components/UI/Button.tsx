import React, {ReactElement} from "react";

interface ButtonProps {
  onClick: () => void,
  children: ReactElement,
}

const Button: React.FC<ButtonProps> = ({onClick, children}: ButtonProps) => {

  return (
    <button onClick={onClick}
            className="flex h-[50px] w-40 items-center justify-center overflow-hidden bg-purple-600 rounded-lg font-medium text-white">
      {children}
    </button>
  );
}

export default Button
