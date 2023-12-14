"use client";

import Image from "next/image";
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
    <Header/>
      <div className="text-center text-cyan-400  py-36" style={aboutStyle}>
        <h1 className="text-4xl font-bold pb-7">CYBERROOT ORNA</h1>
        <p className="text-large   font-bold text-white  ">
          We Bring Innovative Jewelry Manufacturing Solutions For Jewelry
          Enterprises.
        </p>
      </div>


      <div className="p-6 py-24 md:px-20 md:py-24 text-center">
        <h1 className="text-2xl font-bold pb-7 text-cyan-400 ">
          SOFTWARE DEVELOPMENT
        </h1>
        <p className="text-base font-medium mb-7">
          Delivering Potent Software Solutions For Service-Based Businesses And
          Enterprises.
        </p>

        <p className="text-base font-medium">
          <strong>Custom software development</strong> by Cyberroot Infosystems is
          often a matter of building a house upon a solid foundation. This can
          be done quickly and with top-notch quality designed to meet every
          clients needs.. With Cyberroot Custom Software Development your IT needs
          always fast forwarded....we make COST EFFECTIVE, SECURE & PROMISING
          software applications according to clients requirements.. We develop
          offline and online softwares as per your needs using technologies like
          VB 6.0, ASP.NET with databases like MS SQL Server 2005.
        </p>
      </div>

      <div className="p-6 md:px-20 md:py-24">
        <h1 className="text-2xl text-center font-bold pb-20 text-cyan-400 ">
          MORE SERVICES
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-3">
            <Image src="/programming-code.png" width={50} height={50} alt="WEB DEVELOPMENT" />
            <h4 className="mb-2 mt-5">WEB DEVELOPMENT</h4>
            <p>
              Complete e-commerce solutions to move your business online. we
              come with absolutely everything you need to sell online with easy
              to use unique built-in powerful features and marketing tools that
              drive more traffic to your online store. Our dedicatory made
              e-commerce portals using following technologies: Adobe Photoshop,
              Flash, Asp.net with C# and MS-SQL Server Database.
            </p>
          </div>
          
          <div className="p-3">
            <Image src="/programming-code.png" width={50} height={50} alt="WEB DEVELOPMENT" />
            <h4 className="mb-2 mt-5">WEB DEVELOPMENT</h4>
            <p>
              Complete e-commerce solutions to move your business online. we
              come with absolutely everything you need to sell online with easy
              to use unique built-in powerful features and marketing tools that
              drive more traffic to your online store. Our dedicatory made
              e-commerce portals using following technologies: Adobe Photoshop,
              Flash, Asp.net with C# and MS-SQL Server Database.
            </p>
          </div>

          <div className="p-3">
            <Image src="/programming-code.png" width={50} height={50} alt="WEB DEVELOPMENT" />
            <h4 className="mb-2 mt-5">WEB DEVELOPMENT</h4>
            <p>
              Complete e-commerce solutions to move your business online. we
              come with absolutely everything you need to sell online with easy
              to use unique built-in powerful features and marketing tools that
              drive more traffic to your online store. Our dedicatory made
              e-commerce portals using following technologies: Adobe Photoshop,
              Flash, Asp.net with C# and MS-SQL Server Database.
            </p>
          </div>

          <div className="p-3">
            <Image src="/programming-code.png" width={50} height={50} alt="WEB DEVELOPMENT" />
            <h4 className="mb-2 mt-5">WEB DEVELOPMENT</h4>
            <p>
              Complete e-commerce solutions to move your business online. we
              come with absolutely everything you need to sell online with easy
              to use unique built-in powerful features and marketing tools that
              drive more traffic to your online store. Our dedicatory made
              e-commerce portals using following technologies: Adobe Photoshop,
              Flash, Asp.net with C# and MS-SQL Server Database.
            </p>
          </div>

          <div className="p-3">
            <Image src="/programming-code.png" width={50} height={50} alt="WEB DEVELOPMENT" />
            <h4 className="mb-2 mt-5">WEB DEVELOPMENT</h4>
            <p>
              Complete e-commerce solutions to move your business online. we
              come with absolutely everything you need to sell online with easy
              to use unique built-in powerful features and marketing tools that
              drive more traffic to your online store. Our dedicatory made
              e-commerce portals using following technologies: Adobe Photoshop,
              Flash, Asp.net with C# and MS-SQL Server Database.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default page;
