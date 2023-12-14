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
<Header/>
            <div className="text-center text-cyan-500  py-36" style={aboutStyle}>
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">
                    Swipe Connect
                </h1>
            </div>


            <div className="p-6 py-10 md:px-5 md:py-10 text-center">
                <h1 className="text-2xl font-bold pb-7 text-cyan-400 ">
                    TERMS & CONDITIONS
                </h1>
                <p className="text-lg  font-semibold mb-7">


                    Welcome to Swipe Connect Technology. These Terms and Conditions govern your use of our website and the cybersecurity services we provide. By accessing our website or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our website or services.    </p>


            </div>


            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    1. Use of Our Website and Services:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">


                    1.1. Eligibility: You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our website and services.
                    <br />
                    1.2. Account Registration: In order to access certain features of our services, you may need to register for an account. You are responsible for providing accurate and up-to-date information during the registration process.
                    <br />
                    1.3. Acceptable Use: You agree not to use our website or services for any unlawful, harmful, or unauthorized purposes. You will not engage in any activity that could disrupt, damage, or impair the functionality or security of our website or services.
                </p>

            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">


                    2. Intellectual Property:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">


                    2.1. Ownership: All content, trademarks, logos, and intellectual property on our website are the property of Swipe Connect Technology or its licensors. You may not use, reproduce, or distribute any content without our explicit permission.
                </p>

            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    3. Disclaimer of Warranties:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">


                    3.1. Our website and services are provided &apos;as is&apos;without any warranties or representations, whether express or implied. We do not guarantee the accuracy, completeness, or reliability of any content or information on our website.
                    <br />
                    3.2. We do not warrant that our website or services will be error-free, secure, or uninterrupted, or that any defects will be corrected. You use our website and services at your own risk.
                </p>

            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    4. Limitation of Liability:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">


                    4.1. To the maximum extent permitted by law, Swipe Connect Technology and its officers, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with the use or inability to use our website or services.
                </p>

            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

                    5. Third-Party Links:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">


                    5.1. Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these third-party sites. Your use of such linked sites is subject to their terms and conditions.
                </p>

            </div>

            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">


                    6. Termination:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">



                    6.1. We reserve the right to suspend or terminate your access to our website and services at any time and for any reason without prior notice.


                </p>

            </div>
            <div className="p-6 py-10   md:px-5 md:py-10 ">
                <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">


                    7. Changes to Terms and Conditions:
                </h1>
                <p className="text-lg text-justify  p-5 font-semibold">



                    7.1. We may update these Terms and Conditions from time to time without prior notice. The most current version will be posted on our website, and your continued use of our website and services after the changes are posted will signify your acceptance of the updated terms.


                </p>

            </div>
            <div className="p-6 py-10 text-center  md:px-5 md:py-10 ">
                <h1 className="text-3xl  font-extrabold pb-7 text-cyan-400 ">


                    8. Contact Us:
                </h1>
                <p className="text-lg  p-5 font-semibold">



                    If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:
                    <br />
                    info@swipeconnecttechnology.com
                    <br />
                    Thank you for trusting Swipe Connect Technology with your cybersecurity needs.


                </p>

                <Link href="/contactUs" className="" >
                    <span
                        className="border-2 border-gray-300 font-extrabold rounded-lg p-2 bg-gray-300 hover:bg-transparent text-black "
                        data-aos="zoom-in-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        Contact Us
                    </span>
                </Link>

            </div>

<Footer/>
        </>
    );
}

export default page;
