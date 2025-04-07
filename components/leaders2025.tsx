import React from "react";

const ProfileCard: React.FC = () => {
    return (
        <div
            className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('')",
            }}
        >
            <div className="max-w-4xl flex flex-wrap items-center mx-auto">
                {/* Main Card */}
                <div className="w-full lg:w-3/5 bg-white opacity-75 rounded-lg lg:rounded-r-none shadow-2xl p-6 lg:p-12 text-center lg:text-left mx-6 lg:mx-0">
                    {/* Mobile Image */}
                    <div
                        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
                        }}
                    ></div>

                    <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
                    <div className="w-4/5 mx-auto lg:mx-0 border-b-2 border-green-500 opacity-25 pt-3"></div>

                    <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                        <svg
                            className="h-4 w-4 fill-current text-green-700 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        Web Developer
                    </p>

                    <p className="pt-2 text-sm text-gray-600 flex items-center justify-center lg:justify-start">
                        <svg
                            className="h-4 w-4 fill-current text-green-700 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm7.75-8a8.01 8.01 0 000-4h-3.82a28.81 28.81 0 010 4h3.82zM3.07 14a8.03 8.03 0 004.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07z" />
                        </svg>
                        Location - 25.0000° N, 71.0000° W
                    </p>

                    <p className="pt-8 text-sm">
                        A short description about you — what you do, your interests, goals,
                        or current work.
                    </p>

                    <div className="pt-8 pb-8">
                        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                            Get In Touch
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-4 flex justify-between max-w-xs mx-auto lg:mx-0">
                        {[
                            { title: "Facebook", href: "#", d: "M22.676 0H1.324..." },
                            { title: "Twitter", href: "#", d: "M23.954 4.569c-..." },
                            { title: "GitHub", href: "#", d: "M12 .297c-6.63..." },
                            { title: "Unsplash", href: "#", d: "M7.5 0v6h9V0H7.5zM22.5..." },
                        ].map((icon, i) => (
                            <a key={i} href={icon.href} aria-label={icon.title}>
                                <svg
                                    className="h-6 w-6 fill-current text-gray-600 hover:text-green-700"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>{icon.title}</title>
                                    <path d={icon.d}></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Profile Image on Desktop */}
                <div className="w-full lg:w-2/5">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Profile"
                        className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
