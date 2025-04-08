import * as React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {ArrowLeftProps} from "../../interfaces/MainInterface.ts";

const ArrowLeft: React.FC<ArrowLeftProps> = ({value, setValue}) => {

    const handleScrollMinus = () => {
        if (value > 0) {
            setValue(value - 100);
        }
        return
    }

    return (
        <div className='absolute w-[70px] h-full bg-white z-[10]'>
            <button
                className='absolute left-[10px] top-1/2 -translate-y-1/2
                        bg-white z-[20] rounded-full'>
                <KeyboardArrowLeftIcon
                    sx={{width: '50px', height: '50px'}}
                    onClick={handleScrollMinus}
                >
                </KeyboardArrowLeftIcon>
            </button>
        </div>
    );
};
export default ArrowLeft;