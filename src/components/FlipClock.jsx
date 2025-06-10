import React from "react";
import { useEffect, useState } from "react";
import FlipUnit from "./FlipUnit"; 


const FlipClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, "0");

    const hours = formatNumber(time.getHours() % 12 || 12);
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());
    const ampm = time.getHours() >= 12 ? "PM" : "AM";

    const dateStr = time.toLocaleDateString("en-GB");
    const weekday = time.toLocaleDateString("en-US", { weekday: "long" });

    return (
        <div className="flex items-center justify-center min-h-screen bg-black font-mono text-white px-6">
            {/* Center Stripe */}
            <div className="absolute top-[52%] left-0 w-full h-1 bg-black opacity-60 z-100" />
            {/* Hour Block */}
            <div className="bg-[#1a1a1a] rounded-3xl px-6 py-4 mr-16 flex flex-col items-center shadow-lg">
                <div className="text-white text-xl font-semibold mb-1">{dateStr}</div>
                <FlipUnit value={hours} labelLeft={ampm} />
            </div>

            {/* Minute Block */}
            <div className="bg-[#1a1a1a] rounded-3xl px-6 py-4 flex flex-col items-center shadow-lg">
                <div className="text-white text-xl font-semibold mb-1">{weekday}</div>
                <FlipUnit value={minutes} labelRight={seconds} />
            </div>
        </div>
    );
};

export default FlipClock;
