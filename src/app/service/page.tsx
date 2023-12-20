"use client";

import Image from "next/image";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function page() {
  const servicebackground = {
    background: "url(services.jpg) no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const WebDevelopment = {
    background: "url(slide-2.jpg) no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  const MobileDevelopment = {
    background: "url(bg-1.jpg) no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  const digitalMarketing = {
    background: "url(bg.jpg) no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <>
    <Header/>
      <div
        className="text-center relative py-28 pb-48 p-6 text-white"
        style={servicebackground}
      >
        <div className="lg:max-w-screen-lg mx-auto">
          <div className="mb-10">
            <h1 className="text-2xl font-bold pb-7"> SERVICES</h1>

            <p className="md:w-3/5 mx-auto text-base font-medium">
              We are consistently providing variety of services with an aim to
              fulfill all kinds of requirement raised by clients across the
              world. We not only deliver assignments but also the satisfaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10">
           

            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Graphic Designing</h1>

    
            </div>

            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Web Development</h1>

      
            </div>

            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Mobile Development</h1>

          
            </div>

            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Desktop Development</h1>

         
            </div>
            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Penetration Testing</h1>

           
            </div>
            <div className="bg-slate-700 border-2 border-[#000] p-3 cursor-pointer">
              <Image
                src="/coding2.png"
                height={40}
                width={40}
                alt="coding"
                className="block mx-auto"
              />

              <h1 className="my-3">Network Monitoring</h1>

       
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
        <div className="mx-auto my-auto">
          <Image
            src="/Capture13.PNG"
            width={350}
            height={150}
            alt="product-image"
          />
        </div>

        <div className="mx-auto">
          <div className="mb-5">
            <h1 className="text-3xl text-cyan-400 font-bold">
              Softwear Development
            </h1>
          </div>

          <p className="text-base">
             For a robust cybersecurity platform, our software development team employs 
             cutting-edge technologies and industry best practices to craft a comprehensive 
             suite of security solutions. We prioritize the development of highly secure
             and scalable applications, integrating advanced encryption algorithms, multi-factor
             authentication, and real-time threat detection mechanisms. Our agile development
             approach ensures rapid adaptation to evolving security landscapes, enabling us
             to deliver timely updates and patches. From secure application development to
             network protection, our team is committed to creating software that fortifies
             your digital infrastructure against cyber threats, providing peace of mind for
             your organization and safeguarding sensitive data with the highest standards of security.
          </p>
        </div>
      </div>

      <div style={WebDevelopment}>
        <div className="p-6 py-16 lg:max-w-screen-lg mx-auto text-white">
          <div className="text-center mb-8">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">
                Web Development (Ecommerce Web Solutions)
              </h1>
            </div>

            <p className="text-base">
            In the realm of web development for our cybersecurity-focused website, we
            meticulously craft a user-centric and highly secure online presence. Leveraging
            the latest web technologies, our development team ensures a seamless and intuitive
            user experience, prioritizing both accessibility and robust security measures. From
            fortified login systems incorporating multi-factor authentication to encrypted data 
            transmission protocols, every aspect of our website is meticulously designed to 
            withstand cyber threats. Regular security audits, automated vulnerability scans,
            and prompt patch deployment are integral parts of our development lifecycle,
            guaranteeing that our online platform remains a vigilant fortress against evolving
            cyber risks. Explore our website with confidence, knowing that our commitment to 
            cutting-edge web development is synonymous with your digital safety and peace of mind.

            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-center mb-6">
              
            </h1>

            <div className="grid grid-cols-2 gap-10">
              <div className="mx-auto">
                <ul className="font-extrabold text-xl">
                  
                </ul>
              </div>

              <div className="mx-auto">
                <ul className="font-extrabold text-xl">
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
        <div className="mx-auto md:order-first order-last">
          <div className="mb-5">
            <h1 className="text-3xl text-cyan-400 font-bold">
              Server Setup &apos; s
            </h1>
          </div>

          <p className="text-base">
          We implement a multi-layered approach to ensure optimal performance,
          resilience, and, above all, uncompromising security. Our servers are 
          strategically configured with the latest security protocols, employing
          robust firewalls, intrusion detection and prevention systems, and continuous 
          monitoring mechanisms. We utilize encrypted communication channels, employing
          SSL/TLS protocols, to safeguard data in transit. Additionally, our server
          infrastructure undergoes regular security audits and penetration testing to 
          identify and remediate potential vulnerabilities. 
          </p>
        </div>

        <div className="mx-auto my-auto">
          <Image
            src="/Capture12.PNG"
            width={350}
            height={150}
            alt="product-image"
          />
        </div>
      </div>

      <div style={MobileDevelopment}>
        <div className="p-6 text-white py-16 lg:max-w-screen-lg mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="mx-auto my-auto">
              <Image
                src="/Capture13.PNG"
                width={350}
                height={150}
                alt="product-image"
              />
            </div>

            <div className="mx-auto">
              <div className="mb-5">
                <h1 className="text-3xl font-bold">Mobile Development</h1>
              </div>

              <p className="text-base mb-5">
              In the realm of mobile development for our cybersecurity
              provider website, we prioritize delivering a seamless and
              secure user experience on the go. Our mobile applications 
              are crafted with a user-centric approach, ensuring intuitive 
              interfaces while maintaining robust security measures. Leveraging
              the latest in mobile technology, we implement advanced encryption 
              algorithms, secure authentication mechanisms, and real-time threat
              detection features to fortify your digital defenses. 
              </p>

              <div className="flex justify-around">
                <div>
                  <h5>Apps For Android</h5>
                </div>

                <div>
                  <h5>Apps For IOS</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-fit mx-auto">
            <div className="inline-block p-2 px-3 rounded-md text-white border-2 border-indigo-400 bg-indigo-400 hover:bg-transparent">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 p-6 py-16 lg:max-w-screen-lg mx-auto">
        <div className="mx-auto md:order-first order-last">
          <div className="mb-5">
            <h1 className="text-3xl text-cyan-400 font-bold">
              Implemention & Support
            </h1>
          </div>

          <p className="text-base">
          At our cybersecurity provider, our commitment extends beyond
           just delivering cutting-edge solutions – we prioritize a seamless
            implementation process and unwavering support to ensure that your 
            digital assets remain fortified against evolving threats. Our
             implementation services are meticulously tailored to your organization &apos;s
              unique needs, encompassing a detailed assessment, strategic planning,
               and a phased deployment approach.
          </p>
        </div>

        <div className="mx-auto my-auto">
          <Image
            src="/Capture11.PNG"
            width={350}
            height={150}
            alt="product-image"
          />
        </div>
      </div>

      <div style={digitalMarketing}>
        <div className="p-6 py-16 lg:max-w-screen-lg mx-auto">
          <div className="text-white text-center mb-8">
            <h1 className="text-3xl font-bold mb-7">Digital Marketing</h1>

            <p className="text-base">
            In the dynamic landscape of digital marketing for our cybersecurity 
            provider website, we employ a strategic and targeted approach to reach
            and empower our audience. Through comprehensive online campaigns,
            we highlight the critical importance of cybersecurity in today 
            digital age. Our digital marketing initiatives include SEO
            optimization to ensure our website ranks prominently in relevant 
            searches, compelling content creation to engage and educate our audience
            </p>
          </div>

          <div className="flex justify-between text-white mb-12">
            <div>
              <h1></h1>
            </div>

            <div>
              <h1></h1>
            </div>

            <div>
              <h1></h1>
            </div>
          </div>

          <div className="w-fit mx-auto">
            <div className="inline-block p-2 px-3 rounded-md text-white border-2 border-indigo-400 bg-indigo-400 hover:bg-transparent">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default page;
