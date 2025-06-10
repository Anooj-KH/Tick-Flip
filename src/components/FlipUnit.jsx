import { motion } from "framer-motion";

const FlipUnit = ({ value, labelLeft, labelRight }) => {
    return (
        <div className="relative text-gray-300 rounded-3xl w-[220px] h-[180px] sm:w-[360px] sm:h-[290px] flex items-center justify-center overflow-hidden">
            {/* Flipping Number */}
            <motion.div
                key={value}
                initial={{ rotateX: 90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[8rem] sm:text-[18rem] font-extrabold leading-none z-20"
            >
                {value}
            </motion.div>

            {/* AM/PM */}
            {labelLeft && (
                <motion.div
                    key={`left-${labelLeft}`}
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-2 left-3 sm:bottom-0 sm:left-4 text-sm sm:text-2xl font-bold text-gray-400 z-30"
                >
                    {labelLeft}
                </motion.div>
            )}

            {/* Seconds */}
            {labelRight && (
                <motion.div
                    key={`right-${labelRight}`}
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-2 right-3 sm:bottom-0 sm:right-4 text-sm sm:text-2xl font-bold text-gray-400 z-30"
                >
                    {labelRight}
                </motion.div>
            )}
        </div>
    );
};

export default FlipUnit;
