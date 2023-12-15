"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function page() {

    const aboutStyle = {
        background: "url(sliderbg_01.jpg) 0 -30% no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    };

    return (
        <>
            <Header />
            <div className="text-center text-cyan-500  py-36" style={aboutStyle}>
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">
                    Swipe Connect
                </h1>
            </div>
            <div className="p-3 mt-10  text-center ">
                <h1 className="text-3xl font-bold pb-7 text-cyan-400 ">
                    Graphic Designing
                </h1>
            </div>
            <div className="lg:max-w-screen-lg mx-auto grid my-12 lg:grid-cols-2 gap-10 p-6 lg:px-8 overflow-hidden">
                <div
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="flex justify-center items-center  "
                >
                    <img  src="/digital.jpeg" alt="image" />
                </div>

                <div
                    className="align-middle"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <h3 className="text-3xl  font-extrabold pb-7 text-cyan-400 ">
                        Unleash Creativity and Make a Lasting Impression with Professional Graphic Designing
                    </h3>
                    <p className="text-lg text-justify  p-5 font-semibold">
                        Our Graphic Designing service combines artistic expertise and strategic thinking to create visually stunning and impactful designs tailored to your brand. From eye-catching logos to captivating marketing materials, we transform your ideas into compelling visuals that resonate with your audience.
                    </p>
                </div>
                <b className="font-black">
                    Customized Design Solutions:  </b>Our team of skilled designers works closely with you to understand your brand identity, values, and target audience. We create custom designs that reflect your unique personality and effectively communicate your message.
                <br />
                <br />
                <b className="font-black">
                    Branding and Identity: </b>We help you establish a strong brand identity by creating memorable logos, brand guidelines, and visual assets that convey your brand&apos;s essence. Stand out from the competition and leave a lasting impression on your customers.
                <br />
                <br />
                <b className="font-black">
                    Engaging Marketing Collateral: </b>  From brochures and flyers to social media graphics and banners, we design marketing materials that captivate your audience&apos;s attention and drive engagement. Our designs are crafted to enhance your brand visibility and attract potential customers.
                <br />
                <br />
                <b className="font-black">
                    User-Focused Web Design:  </b> We create visually appealing and user-friendly website designs that leave a positive impression on visitors. Our designs are optimized for seamless navigation, intuitive user experience, and responsiveness across different devices.
                <br />
                <br />
                <b className="font-black">
                    Illustrations and Infographics:   </b>Our illustrators bring your concepts to life through captivating illustrations and infographics. Visualize complex information in a simple and engaging manner, making it easier for your audience to understand and remember.
                <br />
                <br />
                <b className="font-black">
                    Print and Packaging Design: </b>We provide striking print and packaging designs that elevate the perception of your products and enhance the unboxing experience. Our designs are tailored to create a strong visual impact and leave a memorable impression.
                <b className="font-black">
                    Consistency and Timeliness:  </b>We value your time and ensure timely delivery of your design projects. Our team maintains consistent communication throughout the design process, keeping you updated and incorporating your feedback at every stage.
                <br />
                Unlock the power of professional graphic designing and make a lasting impact with visually stunning designs. Enhance your brand presence, captivate your audience, and elevate your business to new heights.
                <br />
                Contact us today to explore our Graphic Designing services and take your visual communications to the next level.
                <br />
                <br />
            </div>
            <Footer />
        </>
    );
}

export default page;
