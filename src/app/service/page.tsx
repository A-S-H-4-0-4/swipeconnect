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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            porro? Atque aliquid quis nihil ipsa consequuntur consectetur
            veritatis delectus iusto sunt corrupti quos, placeat fugiat repellat
            ab non at illo error! Ipsum soluta dolorum debitis placeat cumque
            harum culpa laudantium totam ullam commodi quis eaque quidem, ab
            voluptates vitae saepe facilis aliquam quae similique omnis maxime
            adipisci impedit! Ullam suscipit impedit in architecto, quos
            repellat, nisi aliquid vero at ab molestiae fuga? Temporibus, ea
            neque explicabo maxime illum numquam magnam?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              porro? Atque aliquid quis nihil ipsa consequuntur consectetur
              veritatis delectus iusto sunt corrupti quos, placeat fugiat
              repellat ab non at illo error! Ipsum soluta dolorum debitis
              placeat cumque harum culpa laudantium totam ullam commodi quis
              eaque quidem, ab voluptates vitae saepe facilis aliquam quae
              similique omnis maxime adipisci impedit! Ullam suscipit impedit in
              architecto, quos repellat, nisi aliquid vero at ab molestiae fuga?
              Temporibus, ea neque explicabo maxime illum numquam magnam?
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-center mb-6">
              Creative Services
            </h1>

            <div className="grid grid-cols-2 gap-10">
              <div className="mx-auto">
                <ul className="font-extrabold text-xl">
                  <li>Lorem, ipsum.</li>
                  <li>Lorem.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem.</li>
                  <li>Lorem.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                </ul>
              </div>

              <div className="mx-auto">
                <ul className="font-extrabold text-xl">
                  <li>Lorem, ipsum.</li>
                  <li>Lorem.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem.</li>
                  <li>Lorem.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            porro? Atque aliquid quis nihil ipsa consequuntur consectetur
            veritatis delectus iusto sunt corrupti quos, placeat fugiat repellat
            ab non at illo error! Ipsum soluta dolorum debitis placeat cumque
            harum culpa laudantium totam ullam commodi quis eaque quidem, ab
            voluptates vitae saepe facilis aliquam quae similique omnis maxime
            adipisci impedit! Ullam suscipit impedit in architecto, quos
            repellat, nisi aliquid vero at ab molestiae fuga? Temporibus, ea
            neque explicabo maxime illum numquam magnam?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, porro? Atque aliquid quis nihil ipsa consequuntur
                consectetur veritatis delectus iusto sunt corrupti quos, placeat
                fugiat repellat ab non at illo error! Ipsum soluta dolorum
                debitis placeat cumque harum culpa laudantium totam ullam
                commodi quis eaque quidem, ab voluptates vitae saepe facilis
                aliquam quae similique omnis maxime adipisci impedit! Ullam
                suscipit impedit in architecto, quos repellat, nisi aliquid vero
                at ab molestiae fuga? Temporibus, ea neque explicabo maxime
                illum numquam magnam?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            porro? Atque aliquid quis nihil ipsa consequuntur consectetur
            veritatis delectus iusto sunt corrupti quos, placeat fugiat repellat
            ab non at illo error! Ipsum soluta dolorum debitis placeat cumque
            harum culpa laudantium totam ullam commodi quis eaque quidem, ab
            voluptates vitae saepe facilis aliquam quae similique omnis maxime
            adipisci impedit! Ullam suscipit impedit in architecto, quos
            repellat, nisi aliquid vero at ab molestiae fuga? Temporibus, ea
            neque explicabo maxime illum numquam magnam?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              porro? Atque aliquid quis nihil ipsa consequuntur consectetur
              veritatis delectus iusto sunt corrupti quos, placeat fugiat
              repellat ab non at illo error! Ipsum soluta dolorum debitis
              placeat cumque harum culpa laudantium totam ullam commodi quis
              eaque quidem, ab voluptates vitae saepe facilis aliquam quae
              similique omnis maxime adipisci impedit! Ullam suscipit impedit in
              architecto, quos repellat, nisi aliquid vero at ab molestiae fuga?
              Temporibus, ea neque explicabo maxime illum numquam magnam?
            </p>
          </div>

          <div className="flex justify-between text-white mb-12">
            <div>
              <h1>Lorem, ipsum dolor.</h1>
            </div>

            <div>
              <h1>Lorem, ipsum dolor.</h1>
            </div>

            <div>
              <h1>Lorem, ipsum dolor.</h1>
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
