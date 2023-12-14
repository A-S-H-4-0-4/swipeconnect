


"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {

    const aboutStyle = {
        background: "url(sliderbg_01.jpg) 0 -30% no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    };

    return (
        <>
            <div className="text-center text-cyan-500  py-36" style={aboutStyle}>
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">
                    Swipe Connect
                </h1>
            </div>


            <div className="bg-gray-800 text-white p-4 text-center">
                <h1 className="text-3xl font-bold text-cyan-500">Meet Our Team</h1>
            </div>

            <section className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Team Member 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">SCOTT BLANKO</h2>
                    <p className="text-gray-500">WEB DEVELOPER</p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">JESSY PINKMAN</h2>
                    <p className="text-gray-500">
CO-FOUNDER</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">
ANU BHARDWAJ</h2>
                    <p className="text-gray-500">
CEO & FOUNDER</p>
                </div>

                {/* Team Member 4 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">ANDREW SMITH</h2>
                    <p className="text-gray-500">LEAD DEVELOPER</p>
                </div>
              

                {/* Team Member 5 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">JAMES ANDERSON</h2>
                    <p className="text-gray-500">CREATIVE DIRECTOR</p>
                </div>
                {/* Team Member 6 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">
OLIVER JAMES</h2>
                    <p className="text-gray-500">
MARKETING DIRECTOR

</p>
                </div>
                {/* Team Member 7 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">OLIVIA EMMA</h2>
                    <p className="text-gray-500">LEAD DESIGNER

</p>
                </div>
                {/* Team Member 8 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="/next.svg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 " />
                    <h2 className="text-lg font-semibold">BENJAMIN NOAH</h2>
                    <p className="text-gray-500">BENJAMIN NOAH</p>
                </div>
            </section>

            <div className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2023 Our Team</p>
            </div>



        </>
    );
}

export default page;
