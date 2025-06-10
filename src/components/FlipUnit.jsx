import { motion } from "framer-motion";


const FlipUnit = ({ value, labelLeft, labelRight }) => {
    return (
        <div className="relative text-gray-300 rounded-3xl w-[360px] h-[290px] flex items-center justify-center overflow-hidden ">

            {/* Flipping Number */}
            <motion.div
                key={value}
                initial={{ rotateX: 90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[18rem] font-extrabold leading-none z-20"
            >
                {value}
            </motion.div>

            {/* Animated AM/PM flip */}
            {labelLeft && (
                <motion.div
                    key={`left-${labelLeft}`}
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-4 text-2xl font-bold text-gray-400 z-30"
                >
                    {labelLeft}
                </motion.div>
            )}

            {/* Animated seconds flip */}
            {labelRight && (
                <motion.div
                    key={`right-${labelRight}`}
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 right-4 text-2xl font-bold text-gray-400 z-30"
                >
                    {labelRight}
                </motion.div>
            )}
        </div>
    );
};

export default FlipUnit;

