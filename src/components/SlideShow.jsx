import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlidShow = () => {
    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const content = [
        //{ type: 'image', src: '/assets/slide1.jpeg' },
        { type: 'video', src: '/assets/messiermarathon2011.mp4', text: 'EXPLORE THE UNIVERSE WITH NASA' },
        { type: 'video', src: '/assets/1851190-uhd_3840_2160_25fps.mp4', text: 'EXPLORE THE UNIVERSE WITH NASA' },
        { type: 'video', src: '/assets/7615696-uhd_3840_2160_30fps.mp4', text: 'EXPLORE THE UNIVERSE WITH NASA' }
    ];

    const handleChangeIndex = (index) => {
        setCurrentIndex(index);
        slideRef.current.goTo(index);
    };

    return (
        <div className="slide-container w-full mx-0 relative">
            <Slide
                ref={slideRef}
                onChange={(oldIndex, newIndex) => setCurrentIndex(newIndex)}
                indicators={false}
                arrows={false}
                autoplay={false}
            >
                {content.map((item, index) => (
                    <div key={index} className="each-slide flex justify-center items-center">
                        <div className="slide-content  w-full relative" style={{ height: '700px' }}>
                            <video className="h-full w-full object-cover" autoPlay loop>
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="text-section absolute inset-0 flex flex-col justify-center items-center text-white">
                                <p className="text-4xl font-semibold text-white mb-4">{item.text}</p>
                                <br></br>
                                <a href="#" className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-800">Get Started</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
            <div className="dots-container absolute bottom-4 left-0 w-full flex justify-center">
                {content.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentIndex === index ? 'bg-white' : ' bg-gray-900'} rounded-full w-3 h-3 mx-2 cursor-pointer`}
                        onClick={() => handleChangeIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlidShow;
