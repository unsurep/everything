'use clent'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import React, { useState } from "react";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import hero from '../Images/hero.png'
import hero2 from '../Images/hero2.png'
import hero3 from '../Images/hero3.png'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const SectionOne=()=>{
    const [showSectionOne, setShowSectionOne]=useState(true)
    const [showSectionTwo, setShowSectionTwo]=useState(false)
    const [showSectionThree, setShowSectionThree]=useState(false)

    const handleSectionOne=()=>{
        setShowSectionOne(true)
        setShowSectionTwo(false)
        setShowSectionThree(false)
    }

    const handleSectionTwo=()=>{
        setShowSectionOne(false)
        setShowSectionTwo(true)
        setShowSectionThree(false)
    }

    const handleSectionThree=()=>{
        setShowSectionOne(false)
        setShowSectionTwo(false)
        setShowSectionThree(true)

    }


    return(
        <div className="relative pt-20">

            <div>
                <p className="absolute cursor-pointer bg-white rounded-full p-2 text-2xl top-[40vh] left-8"><FaChevronLeft/></p>
                <p className="absolute cursor-pointer bg-white rounded-full p-2 text-2xl top-[40vh] right-8"><FaChevronRight/></p>
            </div>

            <div className="absolute bottom-[20px] right-0 left-0 flex justify-center items-center gap-5">
                <p onClick={handleSectionOne} className={`h-2 w-36 cursor-pointer  ${showSectionOne === true ? 'bg-black' : 'bg-white' } rounded-full `}></p>

                <p onClick={handleSectionTwo} className={`h-2 w-36 cursor-pointer ${showSectionTwo === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>

                <p onClick={handleSectionThree} className={`h-2 w-36 cursor-pointer ${showSectionThree === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
            </div>





            {/* ==========================SECTION 1==================== */}
            {showSectionOne===true && <section data-aos="fade-up"
                data-aos-duration="1000" className="px-[7rem] py-24 flex items-center bg-green-100 h-[80vh]">
                <div>
                    <p className="text-2xl font-semibold">In this Season, Find the Best 🔥</p>
                    <h1 className="text-6xl font-bold mt-8 mb-14">Exclusive collections <br /> for everyone</h1>
                    <button className="bg-black py-8 px-12 rounded-full text-white text-xl font-bold flex gap-3 items-center">Explore Now <GoSearch/></button>
                </div>

                <div className="ml-auto w-[]">
                    <Image className='w-[]' src={hero} alt='pic' width={0} height={0}/>
                </div>


            </section> }

            




            {/*=============================== SECTION 2================ */}
            {showSectionTwo===true &&  <section data-aos="fade-up"
                data-aos-duration="1000" className="px-[7rem] py-24 flex items-center bg-green-100 h-[80vh]">
                <div>
                    <p className="text-2xl font-semibold">In this Season, Find the Best 🔥</p>
                    <h1 className="text-6xl font-bold mt-8 mb-14">Exclusive collections <br /> for everyone</h1>
                    <button className="bg-black py-8 px-12 rounded-full text-white text-xl font-bold flex gap-3 items-center">Explore Now <GoSearch/></button>
                </div>

                <div className="ml-auto w-[]">
                    <Image className='w-[]' src={hero2} alt='pic' width={0} height={0}/>
                </div>


            </section> }

           





            {/* ==========================SECTION 3======================================= */}
            {showSectionThree===true && <section data-aos="fade-up"
                data-aos-duration="1000" className="px-[7rem] py-24 flex items-center bg-green-100 h-[80vh]">
                <div>
                    <p className="text-2xl font-semibold">In this Season, Find the Best 🔥</p>
                    <h1 className="text-6xl font-bold mt-8 mb-14">Exclusive collections <br /> for everyone</h1>
                    <button className="bg-black py-8 px-12 rounded-full text-white text-xl font-bold flex gap-3 items-center">Explore Now <GoSearch/></button>
                </div>

                <div className="ml-auto w-[]">
                    <Image className='w-[]' src={hero3} alt='pic' width={0} height={0}/>
                </div>


            </section>}

            

            










        </div>
    )


};

export default SectionOne;