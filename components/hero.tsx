import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 text-center relative overflow-hidden font-sans">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white opacity-5 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg tracking-wide animate-fade-in font-serif">
                    Welcome to <span className="text-yellow-300">JCI Ponda</span>
                </h1>

                <p 
                    className="text-xl md:text-2xl font-medium mb-6 px-6 py-3 inline-block" 
                    style={{
                        background: "linear-gradient(90deg, #FFD700, #FFA500)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                >
                    Celebrating the 53rd year of JCI Ponda
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
