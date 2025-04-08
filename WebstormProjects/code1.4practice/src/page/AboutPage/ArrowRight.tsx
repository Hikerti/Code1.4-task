import * as React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {ArrowRightProps} from "../../interfaces/MainInterface.ts";

const ArrowRight: React.FC<ArrowRightProps> = ({value, setValue, posts}) => {

    const handleScrollMinus = () => {
        if (posts && value < (posts.length - 1) * 100) {
            setValue(value + 100);
        }
        return
    }

    return (
        <div className='absolute w-[70px] right-0 h-full bg-white z-[10]'>
            <button
                className='absolute left-[10px] top-1/2 -translate-y-1/2
                        bg-white z-[20] rounded-full'>
                <KeyboardArrowRightIcon
                    sx={{width: '50px', height: '50px'}}
                    onClick={handleScrollMinus}
                >
                </KeyboardArrowRightIcon>
            </button>
        </div>
    );
};

export default ArrowRight;