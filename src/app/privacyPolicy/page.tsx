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
          Privacy Policy
        </h1>
        <p className="text-lg  font-semibold mb-7">

          At Swipe Connect Technology, we are committed to protecting the privacy and security of our users&apos; personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our cybersecurity services. By accessing our website or utilizing our services, you consent to the practices described in this policy.
        </p>


      </div>


      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">
          1. Information We Collect:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">

          <strong>1.1.</strong> Personal Information: We may collect personally identifiable information, such as your name, email address, contact number, and any other information you provide to us voluntarily.
          <br />
          <strong>1.2.</strong> Log Data: When you visit our website, our servers automatically record certain information, including your IP address, browser type, referring/exit pages, and the date and time of your visit.
          <br />
          <strong>1.3.</strong> Cookies and Similar Technologies: We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and personalize content. You can manage your cookie preferences through your browser settings.
        </p>

      </div>
      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

          2. How We Use Your Information:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">


          2.1. Providing Services: We may use your personal information to deliver the cybersecurity services you have requested from us.
          <br />
          2.2. Communication: We may use your contact information to respond to your inquiries, provide customer support, and send you relevant information about our services, promotions, or updates.
          <br />
          2.3. Analytics: We may analyze the data collected to improve our website&apos;s performance, enhance user experience, and optimize our marketing efforts.
          <br />
          2.4. Legal Compliance: We may use your information to comply with applicable laws, regulations, or legal processes.
        </p>

      </div>
      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">
          3. Information Sharing and Disclosure:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">


          3.1. Service Providers: We may share your personal information with third-party service providers to help us perform various business functions (e.g., website hosting, data analysis, customer support).
          <br />
          3.2. Legal Requirements: We may disclose your information if required by law, in response to a court order, subpoena, or other legal process, or to protect our rights, privacy, safety, or property, or that of others.
          <br />
          3.3. Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction.
        </p>

      </div>
      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

          4. Data Security:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">


          We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Despite these efforts, no data transmission or storage method can be guaranteed to be 100% secure. Therefore, while we strive to protect your information, we cannot ensure or warrant the security of any information you transmit to us.
        </p>

      </div>
      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">

          5. Your Choices:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">


          5.1. Opt-Out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in our emails or by contacting us directly.
          <br />
          5.2. Access and Correction: If you wish to access, correct, or delete your personal information, please contact us using the information provided below.
        </p>

      </div>

      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">


          6. Children&apos;s Privacy:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">



          Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us to have the information removed.


        </p>

      </div>
      <div className="p-6 py-10   md:px-5 md:py-10 ">
        <h1 className="text-3xl text-center font-extrabold pb-7 text-cyan-400 ">


          7. Changes to this Privacy Policy:
        </h1>
        <p className="text-lg text-justify  p-5 font-semibold">



          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on our website, and the &apos;Effective Date&apos; at the top will indicate the most recent revision date.


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
