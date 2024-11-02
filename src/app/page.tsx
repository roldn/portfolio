'use client'

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/public/dev-ed-wave.png";
import design from "../../public/public/design.png";
import code from "../../public/public/code.png";
import consulting from "../../public/public/consulting.png";
import web1 from "../../public/public/web1.png";
import web2 from "../../public/public/web2.png";
import web3 from "../../public/public/web3.png";
import web4 from "../../public/public/web4.png";
import web5 from "../../public/public/web5.png";
import web6 from "../../public/public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900" >
        <section className=" min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">
              devlopedbyfran
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill  onClick={() => {setDarkMode(!darkMode)}} className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Roldán Francisco
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">QA Ssr</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              2+ years of rethinking and re-inventing quality in software development procesess
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
            <AiFillYoutube/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="" src={deved} layout="fill" objectFit="cover"/> 
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freel
              developer, I've done remote work for <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span> and collaborated with talanted people
              to create digital products both for business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I offer a wide range of services, programming and tesching
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={consulting} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freel
              developer, I've done remote work for <span className="text-teal-500">agencies</span>
              consulted for <span className="text-teal-500">startups</span> and collaborated with talanted people
              to create digital products both for business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              I offer a wide range of services, programming and tesching
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web1} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web2} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web3} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web4} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web5} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
            <div className="basis-1/5  flex-1 relative aspect-square">
              <Image alt="" src={web6} className="rounded-lg object-cover w-full h-full" fill={true}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
