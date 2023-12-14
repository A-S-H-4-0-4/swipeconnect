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


            <div className="p-3 text-center">
                <h1 className="text-3xl font-bold pb-7 text-cyan-400 ">
                    Domain And Hosting
                </h1>
            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">






                    Reliable Domain and Hosting Solutions for Your Online Presence
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">

                    At Swipe Connect, we offer comprehensive domain and hosting services to help you establish a strong and reliable online presence. Whether you&apos;re a small business, a startup, or an established enterprise, our solutions are designed to meet your unique needs and empower your digital success.
                </p>
            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">

                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    Domain Services:
                </h1>
                <br />
                <p className="text-lg text-justify  p-5 ">

                    <b className="font-black">

                        Register and Manage Domains </b> We assist you in finding and registering the perfect domain name for your business. Our streamlined process ensures a hassle-free experience, and we handle all domain management tasks on your behalf.
                    <br />
                    <br />
                    <b className="font-black">
                        Comprehensive Service Offerings: </b>As a leading Azure service provider, we offer a wide range of services to cater to diverse business needs. From Azure consulting and architecture design to migration, deployment, monitoring, and ongoing management, we provide end-to-end solutions that help businesses fully harness the capabilities of Azure.
                    <br />
                    <br />
                    <b className="font-black">
                        Domain Transfer and Renewal: </b> If you already have a domain registered with another provider, we can help you seamlessly transfer it to our platform. We also take care of domain renewals to ensure your online identity remains intact.
                    <br />
                    <br />
                    <b className="font-black">
                        Domain Privacy and Protection:</b> Protect your personal information and enhance security with our domain privacy services. We shield your contact details from public WHOIS databases, reducing the risk of identity theft and spam.
                    <br />
                    <br />
                </p>
                <br />
                <br />
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    Hosting Solutions:
                </h1>
                <br />
                <p>

                    <b className="font-black">
                        Shared Hosting: </b>Our shared hosting plans provide a cost-effective solution for individuals and small businesses. Benefit from reliable server resources, a user-friendly control panel, and 24/7 technical support.
                    <br />
                    <br />
                    <b className="font-black">
                        Continuous Monitoring and Support:</b> We provide ongoing support and monitoring services to ensure the smooth and efficient operation of your Azure environment. Our dedicated team proactively monitors your infrastructure, identifies and resolves issues promptly, and optimizes performance. We are committed to minimizing downtime, maximizing uptime, and delivering a seamless experience for your business.
                    <br />
                    <br />
                    <b className="font-black">
                        VPS Hosting: </b>  Enjoy the power and flexibility of a virtual private server (VPS) tailored to your specific needs. Our VPS hosting offers dedicated resources, root access, and advanced customization options for optimal performance.
                    <br />
                    <br />
                    <b className="font-black">
                        Dedicated Servers:  </b>  For high-traffic websites and resource-intensive applications, our dedicated servers deliver unparalleled performance, security, and control. Experience maximum uptime and reliability with dedicated hardware and expert support.


                    <br />
                    <br />
                    <b className="font-black">
                        Managed WordPress Hosting:  </b>  Optimize your WordPress website with our managed hosting services. We handle all technical aspects, including security updates, backups, and performance optimization, so you can focus on growing your business.

                    <br />
                    At Swipe connect, we prioritize reliability, speed, and security. Our state-of-the-art infrastructure, robust security measures, and dedicated support team ensure a seamless hosting experience for your website or application.

                    <br />
                    Take your online presence to new heights with our trusted domain and hosting solutions. Contact us today to explore our offerings and find the perfect plan that suits your business requirements.


                    <br />

                </p>

            </div>


            <Footer />
        </>
    );
}

export default page;
