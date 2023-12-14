"use client";

import "../styles/styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import CardCarousel from "../component/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleCarousel from "../component/SingleCarousel";
import Link from "next/link";
import Header from "../layout/Header";
import Footer from "../layout/Footer";



export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const sectionHeadStyle = {
    background: "url(discout-section.jpg) 0 -30% no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };


  return (
    <div >
      <Header />
      <SingleCarousel />

      <div className="lg:max-w-screen-lg mx-auto grid my-12 lg:grid-cols-2 gap-10 p-6 lg:px-8 overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="flex justify-center"
        >
          <img src="/aboutHome.jpg" alt="image" />
        </div>

        <div
          className="align-middle"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h3 className="text-3xl text-cyan-400 font-extrabold   mb-3">
            About Us
          </h3>

          <p className="mb-5 text-xl text-black">
            SwipeConnect Technology Company remains dedicated to delivering cutting-edge cybersecurity solutions and empowering businesses through unmatched development and marketing services. As we continue to evolve alongside the dynamic tech landscape, our unwavering commitment to excellence and client satisfaction remains the driving force behind our success. Trust in SwipeConnect and embark on a journey towards a safer and more prosperous digital tomorrow.
          </p>
        </div>
      </div>

      <div className="p-6 lg:px-8 pb-20 overflow-hidden">
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="relative border-4 py-12 rounded-2xl">
            <div className="w-10/12 mx-auto text-center">
              <Image
                src="/section-image-5.png"
                width={80}
                height={80}
                alt="service-image"
                className="mx-auto mb-6"
              />

              <h1
                className="text-cyan-400 mb-3 text-3xl font-semibold"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Want to know about our services?
              </h1>

              <p
                className="text-black mb-8"
                data-aos="zoom-in-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                What Swipe Connect Can Do For You
              </p>

              <Link href="/contactUs">
                <span
                  className="border-2 border-gray-300 font-extrabold rounded-lg p-2 bg-gray-300 hover:bg-transparent text-black"
                  data-aos="zoom-in-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          <div className="absolute right-24 -bottom-[76px] md:block hidden">
            <Image src="/Capture.PNG" alt="service-image" width={150} height={100} />
          </div>

          <div className="absolute -top-[24px] left-24 md:block hidden">
            <Image src="/annie-spratt-g9KFpAfQ5bc-unsplash.jpg" alt="service-image" width={150} height={100} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="pt-16 text-center flex-col mb-20 px-8"
      >
        <h4

          className="text-4xl text-cyan-400 font-extrabold   mb-10">
          WHAT WE DO?
        </h4>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  place-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl h-40 shadow-[#b5b3b3] shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              Secure And Creative Development
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              Dedicated Support to your Business
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >
            <h4 className="text-black font-semibold text-xl">Dedicated custom made softwares designed for you</h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              Access to Advanced and New technologies
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              Network Monitoring
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              Penetration Testing
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              AWS Services
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="bg-cyan-100 w-52 rounded-br-xl rounded-tl-3xl  h-40     shadow-[#b5b3b3]  shadow-lg p-2"
          >

            <h4 className="text-black font-semibold text-xl">
              CRM Solutions
            </h4>
          </div>
        </div>
      </div>
      
          {/* <div
            className="mb-10"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <CardCarousel
              image1="/zorba-diamond.jpg"
              image2="/valentine.jpg"
              image3="/savio.jpg"
              image4="/gie.jpg"
              image5="/gemplaza.jpg"
              image6="/bgjjpg.png"
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <CardCarousel
              image1="/surana-jewellers.jpg"
              image2="/jkm.jpg"
              image3="/vithaldas.jpg"
              image4="/rambhajo.jpg"
              image5="/vorra.jpg"
              image6="/kohinoor.jpg"
            />
          </div> */}
      
     

        <Footer />
    </div>
  );
}
