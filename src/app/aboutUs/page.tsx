"use client";

import Image from "next/image";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function page() {
  const aboutStyle = {
    background: "url(discout-section.jpg) 0 -30% no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <>
    <Header/>
      <div className="text-center text-white py-36" style={aboutStyle}>
        <h1 className="text-2xl font-bold pb-7">Cybersecurity Solutions</h1>

        <p className="text-base font-medium">
        Protecting and creting the new world with cybersafe development and new technologies.
        </p>
      </div>

      <div className="bg-[#ffffff]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto my-auto">
            <Image
              src="/Capture1.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>

          <div className="mx-auto">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
               Swipe Connect :
              </h1>
              &nbsp; &nbsp;
              <span className="text-sm font-normal">
              The Perfect Solution For Application Security
              </span>
            </div>

            <p className="text-base">
            SwipeConnect Technology Company remains dedicated to delivering cutting-edge cybersecurity solutions and empowering businesses through unmatched development and marketing services. As we continue to evolve alongside the dynamic tech landscape, our unwavering commitment to excellence and client satisfaction remains the driving force behind our success. Trust in SwipeConnect and embark on a journey towards a safer and more prosperous digital tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#807d7d2b]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto md:order-first order-last">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
              Our Mission :
              </h1>
              &nbsp; &nbsp;
            </div>

            <p className="text-base mb-4">
        
At SwipeConnect, our mission is crystal clear - to provide our clients with robust and reliable technology solutions that enable them to navigate the complex digital realm with confidence. We strive to protect their assets, data, and reputation from the ever-evolving threats of the cyber world, while also elevating their online presence and market reach through innovative development and marketing strategies.
            </p>
          </div>

          <div className="mx-auto my-auto">
            <Image
              src="/Capture10.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto my-auto">
            <Image
              src="/Capture3.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>

          <div>
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
                
Cybersecurity Excellence :
              </h1>
              &nbsp; &nbsp;
             
            </div>

            <p className="text-base">
             
In an age where cybersecurity is paramount, SwipeConnect stands at the forefront of safeguarding businesses against malicious actors and cyber threats. Our team of skilled cybersecurity experts leverages the latest tools and methodologies to fortify our clients&apos; digital infrastructures. Whether it&apos;s protecting sensitive data, preventing cyber-attacks, or ensuring compliance with industry regulations, our tailored solutions cater to businesses of all sizes and sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#807d7d2b]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto md:order-first order-last">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
                
Development Process: :
              </h1>
              &nbsp; &nbsp;
              
            </div>

            <p className="text-base">
             
Innovation drives our development team, and we take pride in crafting bespoke software solutions that cater to our clients&apos; unique needs. From web and mobile applications to enterprise-grade software, we blend creativity with functionality to deliver exceptional user experiences. Our agile development approach ensures swift turnarounds, making us the go-to partner for businesses seeking a competitive edge through technology.
            </p>
          </div>

          <div className="mx-auto my-auto">
            <Image src="/retail.svg" width={350} height={150} alt="product-image" />
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto my-auto">
            <Image
              src="/Capture5.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>

          <div className="mx-auto">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
                
Marketing Strategies That Soar: :
              </h1>
              &nbsp; &nbsp;
             
            </div>

            <p className="text-base">
            
In the vast digital landscape, standing out is crucial for success. SwipeConnect&apos;s marketing experts employ data-driven strategies to elevate our clients&apos; brand awareness and drive business growth. Through search engine optimization (SEO), social media marketing, content creation, and targeted advertising, we ensure our clients&apos; messages resonate with their target audience, leading to increased engagement and conversions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#807d7d2b]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto md:order-first order-last">
            <div className="mb-5">
              <h1 className="text-3xl font-bold border-b-2 text-cyan-400 border-[#ae8db3] inline-block">
                
Client-Centric Approach: :
              </h1>
              &nbsp; &nbsp;
            </div>

            <p className="text-base">
              
Integrity is the backbone of our operations. We uphold the highest ethical standards in all our endeavors, ensuring transparency and trust in every interaction. Our clients can rely on us not only as technology experts but as reliable partners who prioritize their interests above all else.
            </p>
          </div>

          <div className="mx-auto my-auto">
            <Image
              src="/Capture6.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto my-auto">
            <Image
              src="/Capture7.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>

          <div className="mx-auto">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
               
Join the SwipeConnect Movement :
              </h1>
              &nbsp; &nbsp;
             
            </div>

            <p className="text-base">
          
Whether you are a startup striving to make a mark or an established enterprise looking to fortify your digital presence, SwipeConnect is your ideal technology partner. We invite you to join our ever-growing family of satisfied clients and take the leap towards a secure digital future.

Contact Us: We are here to assist you in protecting your digital assets from cyber threats. To learn more about our cybersecurity solutions or to discuss your specific requirements, please contact us at:

Phone: +91 80944 96471 & Email: info@swipeconnecttechnology.com

Thank you for choosing SwipeConnect Technology Pvt. Ltd. Together, let&apos;s secure your digital future!
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#807d7d2b]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="mx-auto md:order-first order-last">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
                Cyberroot<sup>™</sup> PIS :
              </h1>
              &nbsp; &nbsp;
              <span className="text-sm font-normal">
                Personal Information software for your customer database.
              </span>
            </div>

            <p className="text-base">
              Cyberroot™ Personal Information System is online software to maintain
              categorized records of clients, friends, relatives and other
              business entities with their family members.
            </p>
          </div>

          <div className="mx-auto my-auto">
            <Image
              src="/Capture8.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]">
        <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="my-auto mx-auto">
            <Image
              src="/Capture9.PNG"
              width={350}
              height={150}
              alt="product-image"
            />
          </div>

          <div className="mx-auto">
            <div className="mb-5">
              <h1 className="text-3xl text-cyan-400 font-bold border-b-2 border-[#ae8db3] inline-block">
                Cyberroot<sup>™</sup> Mini :
              </h1>
              &nbsp; &nbsp;
              <span className="text-sm font-normal">
                Maximum Mobility - Easy Portability - Increase Productivity -
                High Adaptability.
              </span>
            </div>

            <p className="text-base">
              Cyberroot™ Mobile ERP and inventory management application are known
              as Cyberroot™ Mini is designed to solve the challenges that keep
              Jewellery manufacturers tied to their desks. Cyberroot Infosystems
              mobile technology extends manufacturing ERP functionality beyond
              the desk to mobile devices located anywhere in the world and
              process complete information via smart phones, PDAs, and tablets,
              available whenever and wherever you need it.
            </p>
          </div>
        </div>
      </div> */}
      <Footer/>      
    </>
  );
}

export default page;
