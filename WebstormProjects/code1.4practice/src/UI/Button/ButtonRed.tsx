import * as React from "react";

const ButtonRed: React.FC<{children : React.ReactNode}> = ({children}) => {
    return (
        <button
            className='w-full bg-red-500 text-white
                font-family-primary-bold text-[1.25rem] py-[10px] rounded-xl duration-200
                hover:text-gray-200 hover:bg-red-600
                sm:text-[1.75rem]'
        >
            {children}
        </button>
    );
};

export default ButtonRed;