import React from "react";

function Button() {
    return (
        <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-purple-600 rounded-lg font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
            <span className="relative z-10">Add TODO</span>
        </button>
    );
}

export default Button
