import React from "react";

interface ButtonProps {
    onClick: (active: boolean) => void,
}

function Button({ onClick }: ButtonProps) {

    return (
        <button onClick={() => onClick(true)} className="flex h-[50px] w-40 items-center justify-center overflow-hidden bg-purple-600 rounded-lg font-medium text-white">
            <span>Add TODO</span>
        </button>
    );
}

export default Button
