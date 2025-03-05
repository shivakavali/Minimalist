import { useState, useEffect } from "react";
import '../Styles/slider.css';

const Slider = () => {
    const [ind, setInd] = useState(0);
    const arr = [
        "Trust Circle: Earn rewards on your skincare journey!",
        "Buy 2 products and get a Free Surprise Gift",
        "Free Gift 🎁 on all app orders. Download Now"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setInd((prev) => (prev + 1) % arr.length);
        }, 2000); // Slower transition for better readability

        return () => clearInterval(interval); // Cleanup to prevent multiple intervals
    }, []);

    return (
        <div className="slider-container">
            <button className="button left" onClick={() => setInd((prev) => (prev - 1 + arr.length) % arr.length)}>&lt;</button>
            <div className="message">{arr[ind]}</div>
            <button className="button right" onClick={() => setInd((prev) => (prev + 1) % arr.length)}>&gt;</button>
        </div>
    );
}

export default Slider;
