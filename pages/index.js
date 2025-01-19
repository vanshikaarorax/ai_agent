import React from 'react'
import HeadTag from '../components/HeadTag'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import Category from '../components/Category'
import ClintCat from '../components/ClintCat'
import { FaStar, FaUber, FaAtlassian } from 'react-icons/fa'
import { IoLogoUsd } from 'react-icons/io'
import { ImCheckmark, ImGoogle } from 'react-icons/im'
import { BsFillTrophyFill, BsWordpress } from 'react-icons/bs'
import { SiAdobe, SiUdacity } from 'react-icons/si'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import JobSuccessCard from '../components/JobSuccessCard'
import Link from 'next/link'
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export default function Home() {

  {/* ============== Hooks Call =============== */}
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col">

      {/* ============== Head Tag =============== */}
      <HeadTag title="AI Genie - The World's Work Marketplace"/>

      {/* ================= Header ================= */}
      <header className="header-bg">
        {/* ============== Navbar ============ */}
        <Navbar/>

        {/* ============= Head Container =============== */}
        <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
          {/* ============ First part [banner section] ============  */}
          <section className="mt-7 flex items-center justify-between">
            {/* ========= Right ======== */}
            <div className="flex flex-col space-y-5">
              <motion.h1 className="xl:text-7xl lg:text-6xl text-4xl font-bold text-[#0C4A6E]"
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.9}}
              >
                Choose your <br/>AI agents
              </motion.h1>
              <motion.h6 className='text-zinc-500 xl:text-3xl lg:text-xl text-lg font-semibold'
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.5}}
              >
              "Let us help you choose the perfect AI agent <br className='lg:block md:hidden block'/>
              so you can build trust.
              </motion.h6>
            </div>

            {/* ========= Left ======== */}
            <div className="relative">
              <Link href="/jobs/todays-jobs">
                <div className="absolute lg:flex hidden flex-col items-center z-[9] bg-[#F3FFFC] shadow-2xl py-2 px-3 rounded-xl cursor-pointer left-[-3rem] top-0 transition hover:scale-105">
                    <span className="text-[11px] font-semibold text-zinc-700 mb-1">
                      Today's Job
                    </span>
                    <Image src="/images/bag.png" height={30} width={40} alt="bag-image"/>
                </div>
              </Link>

              <div className="mr-10 mt-5 md:block hidden">
                <Image src="/images/headerimg.png" height={350} width={450} alt="header-img"/>
              </div>
              
              {/* ========== job success card Component ================= */}
              <JobSuccessCard/>
            </div>
          </section>
        </div>
      </header>

      {/* ================= Main ==================== */}
      <main>

        {/* ================= Trusted Company Section ================ */}
     

        {/* ======================== Talent Category ========================= */}
        <section className="container mx-auto mt-3 md:mt-7 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="text-[#0C4A6E] lg:text-4xl text-3xl font-bold mb-3"> 
             
            </h2>

            <span className="text-zinc-600 font-semibold lg:text-lg text-md">
            
              <Link href="">
                <a className="ml-2 text-cyan-700 cursor-pointer hover:underline">
                 
                </a>
              </Link>
            </span>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:gap-x-20 gap-x-10 xl:gap-y-7 sm:gap-y-4 gap-y-3 lg:mt-10 mt-7 md:px-0 sm:px-7">
              {/* ========== category component ========= */}
              <Category/>
            </div>
        </section>

        {/* ====================== Find Talent Section =================== */}
        <section className="container mx-auto lg:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-0 space-y-3">
            <div className="bg-[url('/images/grilswork.png')] bg-top w-full sm:rounded-xl rounded-none xl:px-14 px-5 py-8">
              <motion.h2 className="text-white font-semibold lg:text-3xl text-xl"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                For Clients
              </motion.h2>

              <motion.h3 className="text-white 2xl:font-bold font-semibold lg:text-6xl text-4xl lg:mt-28 mt-20 leading-tight my-3"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Talent <br/>
                Your Way
              </motion.h3>

              <motion.p className="text-white font-semibold lg:text-xl text-md"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Work with the largest network of Ai <br/>
                Efficiently provided to you and get things done—from quick <br/>
                turnarounds to big transformations. <br/>
              </motion.p>

              <motion.div className="grid md:grid-cols-3 grid-cols-1 2xl:gap-x-10 md:gap-y-0 gap-y-3 xl:gap-x-7 gap-x-5 mt-10"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                {/* ========= for clint ========== */}
                <ClintCat/>
              </motion.div>
            </div>
        </section>

        {/* ========================== Busines section ============================= */}
        <section className="container mx-auto lg:mt-5 mt-1 py-3 md:px-5 sm:px-7">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="md:bg-[#E4FDF7] bg-none col-span-2 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl sm:px-7 px-5 pt-10 pb-14 relative">
              <motion.h2 className="text-zinc-700 font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
               HybridFlowOrchestration:LLM <br/>
                Intelligence + ML Precision
              </motion.h2>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <FaStar/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                    Dual Engine Power
                  </h3>
                  <span className="text-zinc-500 font-semibold xl:text-md">
                  Combines LLM insights with ML accuracy for more reliable results
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <IoLogoUsd/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                  Smarter Outputs
                  </h3>
                  <span className="text-zinc-500 font-semibold text-md">
                  Processes inputs simultaneously through predictive LLMs and data-backed ML models
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <ImCheckmark/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                  Accuracy That Counts
                  </h3>
                  <span className="text-zinc-500 font-semibold text-md">
                  Ensures every output is  both creative and grounded in precise data
                  </span>
                </div>
              </motion.div>

              <div className="absolute lg:right-[-1rem] right-0 bottom-3 md:block hidden">
                <Image
                  src="/images/man-preg.png"
                  width={250}
                  height={400}
                  alt="man-image"
                />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#99F6E4] to-[#A5F3FC] lg:rounded-r-xl lg:rounded-bl-none md:rounded-b-xl md:rounded-none sm:rounded-xl rounded-none px-7 pt-10 pb-15 py-10">
              <motion.h2 className="text-zinc-700 font-semibold 2xl:text-5xl xl:text-4xl text-3xl"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                  we’re <br/>
                  the world’s work
                  marketplace
              </motion.h2>

              <motion.div className="flex items-start space-x-7 mt-10"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-4xl xl:text-3xl text-2xl text-zinc-700 mt-1">
                  <FaStar/>
                </span>

               
              </motion.div>

              <motion.div className="flex items-start space-x-7 xl:mt-10 md:mt-7 mt-5"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-4xl xl:text-3xl text-2xl text-zinc-700 mt-1">
                  <BsFillTrophyFill/>
                </span>

                
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================== oppertunity section ==============================  */}
        <section className="container mx-auto md:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-0 space-y-3">
          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <Image
                src="/images/manworking.png"
                width={1200}
                height={1200}
                alt="manworking-image"
                className="md:rounded-l-xl md:rounded-tr-none sm:rounded-t-xl rounded-none flex flex-grow"
              />

            <div className="bg-gradient-to-b from-[#A5F3FC] to-[#7DD3FC] 2xl:col-span-2 col-span-1 md:rounded-r-xl md:rounded-bl-none sm:rounded-b-xl rounded-none xl:px-10 px-5 lg:py-7 py-5">
              <motion.h5 className="font-semibold lg:text-2xl text-xl text-zinc-700"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                For Efficiency
              </motion.h5>
              <motion.h3 className="font-semibold lg:text-5xl text-4xl text-zinc-700 lg:mt-7 mt-5 lg:mb-3 mb-1"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Agents
              </motion.h3>
              <motion.p className="text-zinc-500 font-semibold"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
               Automating critical workflows across the enterprise
              </motion.p>

              <motion.div className="grid lg:grid-cols-3 grid-cols-2 2xl:gap-x-14 xl:gap-x-10 gap-x-5 gap-y-5 lg:gap-y-0 lg:mt-14 mt-4 border-t border-zinc-500 lg:py-5 py-3"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Find personalized AI with best accuracy
                </span>
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Control when, where, and how you work
                </span>
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Explore different ways to Learn
                </span>
              </motion.div>

              <motion.button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full xl:mt-16 lg:mt-7 mt-3" onClick={() => router.push("#")}
                initial={{x:30, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Agents
              </motion.button>
            </div>
          </div>
        </section>

        {/* =========================== Trusted Section ========================== */}
    

        <section className="container mx-auto lg:my-7 my-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
          <Skills/>
        </section>
      </main>

      {/* ==================== Footer ====================== */}
      <Footer/>
    </div>
  )
}