"use client";

import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter, FaYoutube, FaLocationDot,FaGithub } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#807d7d2b] shadow-2xl">
      <div className="max-w-7xl text-black grid md:grid-cols-3 gap-8 p-5 lg:px-8">
        <div className="md:mx-auto">
          <h2 className="text-3xl mb-5 font-medium">
            <span className="border-b-2 border-black">Serv</span>ice
          </h2>



          <ul>
            <li className="mb-2">
              <Link href="/networkMonitoring">Network Monitoring
              </Link>
            </li>

            <li className="mb-2">
              <Link href="/penetrationTesting">Penetration Testing</Link>
            </li>

            <li className="mb-2">
              <Link href="/aws">AWS Services</Link>
            </li>

            <li className="mb-2">
              <Link href="/crm">CRM Solutions</Link>
            </li>



          </ul>
        </div>

        <div className="md:mx-auto">
          <h2 className="text-3xl mb-5 font-medium">
            <span className="border-b-2 border-black">Comp</span>any
          </h2>





          <ul>
            <li className="mb-2">
              <Link href="/team"> Our Team</Link>
            </li>

            <li className="mb-2">
              <Link href="/aboutUs">About Us</Link>
            </li>

            <li className="mb-2">
              <Link href="/contactUs">Contact Us</Link>
            </li>

            <li className="mb-2">
              <Link href="/termsAndCondition">Terms & Conditions</Link>
            </li>

            <li className="mb-2">
              <Link href="/privacyPolicy">Privacy Policy</Link>
            </li>


          </ul>
        </div>

        <div className="md:mx-auto">
          <h2 className="text-3xl mb-5 font-medium">
            <span className="border-b-2 border-black">CONT</span>ACT INFO
          </h2>

          <p className="flex items-center mb-4">
            <FaLocationDot className="me-2" />
            Office No. 5, Tower,
            <br /> Sitapura, Jaipur (Raj.) - 303905
          </p>

          <div className="flex mb-4 items-center">
            <FaPhoneAlt className="me-2" />
            <p className="flex w-max ">
              <a href="tel:+919785730238">+91 99998 88777</a>
            </p>
          </div>

          <p className="flex mb-4 items-center">
            <TbMailFilled className="me-2" />
            <a href="mailto:cyberrootsoftware@gmail.com">
              info@technology.com
            </a>
          </p>

           <p className="flex mb-4 items-center">
            <a href="https://www.facebook.com/" className="me-3">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="me-3">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/" className="me-3">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/manvi-gupta-73b4ab202" className="me-3">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Manvi911" className="me-3">
              <FaGithub />
            </a>           
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;