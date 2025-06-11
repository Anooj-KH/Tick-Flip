import React, { useEffect, useState } from "react";
import FlipUnit from "./FlipUnit";

const FlipClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, "0");
    const [is24Hour, setIs24Hour] = useState(false);
    const hours = formatNumber(time.getHours() % 12 || 12);
    const fullHours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());
    const ampm = time.getHours() >= 12 ? "PM" : "AM";

    const dateStr = time.toLocaleDateString("en-GB");
    const weekday = time.toLocaleDateString("en-US", { weekday: "long" });

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-black font-mono text-white px-4 sm:px-6 relative gap-8">
            {/* Center Stripe */}
            <div className="absolute top-[52%] left-0 w-290 h-1 bg-black opacity-60 z-100" />

            {/* Hour Block */}
            <div
                className="bg-[#1a1a1a] rounded-3xl px-4 py-3 sm:px-6 sm:py-4 flex flex-col items-center shadow-lg cursor-pointer sm:mr-10"
                onClick={() => setIs24Hour(prev => !prev)}
            >
                <div className="text-white text-base sm:text-lg font-semibold mb-1">{dateStr}</div>
                <FlipUnit value={is24Hour ? fullHours : hours} labelLeft={!is24Hour ? ampm : ""} />
            </div>

            {/* Minute Block */}
            <div className="bg-[#1a1a1a] rounded-3xl px-4 py-3 sm:px-6 sm:py-4 flex flex-col items-center shadow-lg">
                <div className="text-white text-base sm:text-xl font-semibold mb-1">{weekday}</div>
                <FlipUnit value={minutes} labelRight={seconds} />
            </div>
        </div>
    );
};

export default FlipClock;
