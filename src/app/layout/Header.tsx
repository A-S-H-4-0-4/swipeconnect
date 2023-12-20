"use client";

import { useState } from "react";
import { Dialog, Popover, } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import "../globals.css";
import Tooltip from '@mui/material/Tooltip';
import CallIcon from '@mui/icons-material/Call';
import LoginIcon from '@mui/icons-material/Login';




export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <div className="sticky z-30 top-0 shadow ">
      <motion.div className="origin-[0%] fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transf" style={{ scaleX }} />
      <header className="bg-white">
        <nav
          className="mx-auto flex items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/home" className="-m-1.5 p-1.5">
              <span className="uppercase text-2xl font-bold text-cyan-500 font-mono tracking-wider">Swipe Connect</span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-10">
            <Link
              href="/home"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>

            <Link
              href="/aboutUs"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </Link>
            <Link
              href="/service"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </Link>
            <span
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Popover className="relative">
                <Popover.Button>CyberSecurity</Popover.Button>
                <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                  <div className="grid grid-cols">
                    <a className=" m-2 " href="/itsm">ITSM (Request Management)</a>
                    <a className=" m-2 " href="/networkMonitoring">Network Monitoring</a>
                    <a className=" m-2 " href="/vulnerability">Vulnerability Analysis</a>
                    <a className=" m-2" href="/penetrationTesting">Penetration Testing</a>
                    <a className=" m-2" href="/itSecurityAudit">IT Security Audit</a>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </span>
            <span
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Popover className="relative">
                <Popover.Button>Digital</Popover.Button>

                <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                  <div className="grid grid-cols">
                    <a className=" m-2 " href="/graphicDesigning">Graphics Designing</a>
                    <a className=" m-2 " href="/secureWebDevelopment">Secure Web Development</a>
                    <a className=" m-2 " href="/secureAppDevelopment">Secure App Development</a>
                    <a className=" m-2" href="/secureDesktopDevelopment">Secure Desktop Application</a>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </span>
            <span
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Popover className="relative">
                <Popover.Button>Cloud</Popover.Button>
                <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                  <div className="grid grid-cols">
                    <a className=" m-2 " href="/cloudMigration">Cloud Migration</a>
                    <a className=" m-2 " href="/aws">AWS Services</a>
                    <a className=" m-2 " href="/azure">Azure Services</a>
                    <a className=" m-2" href="/domainANDhosting">Domain And Hosting</a>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </span>
            <span
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Popover className="relative">
                <Popover.Button>Customer</Popover.Button>
                <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                  <div className="grid grid-cols">
                    <a className=" m-2 " href="/crm">CRM Solutions</a>
                    <a className=" m-2 " href="/voip">VOIP Services</a>
                    <a className=" m-2 " href="/freeSwitch">Free Switch</a>
                    <a className=" m-2" href="/asterics">Asterics</a>
                    <a className=" m-2" href="/sbc">SBC Integrations</a>
                    <a className=" m-2" href="/Kamailio">Kamailio Integration</a>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </span>
            <span
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <Popover className="relative">
                <Popover.Button>Corporate</Popover.Button>
                <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                  <div className="grid grid-cols">
                    <a className=" m-2 " href="/cybersecurity">CyberSecurity</a>
                    <a className=" m-2 " href="/devops">DEVOPS</a>
                    <a className=" m-2 " href="/freeSwitch">Free Switch</a>
                    <a className=" m-2" href="/aiANDml">AI And ML</a>
                    <a className=" m-2" href="/Blockchain">Blockchain Technologies</a>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </span>

          </Popover.Group>

          <div className="hidden  lg:flex lg:flex-1 justify-end ">

         
              <Tooltip title="Log In">
                <Link
                  href="/"
                  className="text-sm  font-semibold leading-6 text-gray-900"
                >
                  <span className="mr-8" ><LoginIcon /></span>
                </Link>
              </Tooltip>


              <Tooltip title="Conatct Us">
                <Link
                  href="/contactUs"
                  className="text-sm  font-semibold leading-6 text-gray-900"
                >
                  <CallIcon />
                </Link>
              </Tooltip>
            </div>


        </nav>

        <Dialog
          as="div"
          className="lg:hidden text-black"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/home" className="-m-1.5 p-1.5">
                <span className="sr-only text-black">Swipe Connect</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/home"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    href="/aboutUs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/service"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <span
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Popover className="relative">
                      <Popover.Button>CyberSecurity</Popover.Button>
                      <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                        <div className="grid grid-cols">
                          <a className=" m-2 " href="/itsm">ITSM (Request Management)</a>
                          <a className=" m-2 " href="/networkMonitoring">Network Monitoring</a>
                          <a className=" m-2 " href="/vulnerability">Vulnerability Analysis</a>
                          <a className=" m-2" href="/penetrationTesting">Penetration Testing</a>
                          <a className=" m-2" href="/itSecurityAudit">IT Security Audit</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                      </Popover.Panel>
                    </Popover>
                  </span>

                  <span
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Popover className="relative">
                      <Popover.Button>Digital</Popover.Button>

                      <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                        <div className="grid grid-cols">
                          <a className=" m-2 " href="/graphicDesignin">Graphics Designing</a>
                          <a className=" m-2 " href="/secureWebDevelopment">Secure Web Development</a>
                          <a className=" m-2 " href="/secureAppDevelopment">Secure App Development</a>
                          <a className=" m-2" href="/secureDesktopDevelopment">Secure Desktop Application</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                      </Popover.Panel>
                    </Popover>
                  </span>
                  <span
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Popover className="relative">
                      <Popover.Button>Cloud</Popover.Button>
                      <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                        <div className="grid grid-cols">
                          <a className=" m-2 " href="/cloudMigration">Cloud Migration</a>
                          <a className=" m-2 " href="/aws">AWS Services</a>
                          <a className=" m-2 " href="/azure">Azure Services</a>
                          <a className=" m-2" href="/domainANDhosting">Domain And Hosting</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                      </Popover.Panel>
                    </Popover>
                  </span>
                  <span
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Popover className="relative">
                      <Popover.Button>Customer</Popover.Button>
                      <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                        <div className="grid grid-cols">
                          <a className=" m-2 " href="/crm">CRM Solutions</a>
                          <a className=" m-2 " href="/voip">VOIP Services</a>
                          <a className=" m-2 " href="/freeSwitch">Free Switch</a>
                          <a className=" m-2" href="/asterics">Asterics</a>
                          <a className=" m-2" href="/sbc">SBC Integrations</a>
                          <a className=" m-2" href="/Kamailio">Kamailio Integration</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                      </Popover.Panel>
                    </Popover>
                  </span>
                  <span
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <Popover className="relative">
                      <Popover.Button>Corporate</Popover.Button>
                      <Popover.Panel className="absolute z-10 w-max p-4 bg-white flex-col ">
                        <div className="grid grid-cols">
                          <a className=" m-2 " href="/cybersecurity">CyberSecurity</a>
                          <a className=" m-2 " href="/devops">DEVOPS</a>
                          <a className=" m-2 " href="/freeSwitch">Free Switch</a>
                          <a className=" m-2" href="/aiANDml">AI And ML</a>
                          <a className=" m-2" href="/Blockchain">Blockchain Technologies</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                      </Popover.Panel>
                    </Popover>
                  </span>

                </div>
                <div className="py-6">
                  {/* <Tooltip title="Conatct Us"> */}
                  <Link
                    href="/contactUs"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  {/* </Tooltip> */}
                </div>
                <div className="py-6">
                  {/* <Tooltip title="Conatct Us"> */}
                  <Link
                    href="/"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  {/* </Tooltip> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
