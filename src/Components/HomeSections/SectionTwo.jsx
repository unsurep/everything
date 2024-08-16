'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import Image from "next/image";
import one from '../Images/1.png'
import two from '../Images/2.png'
import three from '../Images/3.png'
import four from '../Images/4.png'
import five from '../Images/4(1).png'
import six from '../Images/5.png'
import seven from '../Images/5(1).png'
import eight from '../Images/6.png'
import { FaStar } from "react-icons/fa";

import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const SectionTwo=()=>{
    
    return(
<div className="px-[7rem]">

        <div className="py-20 ">
            <h1 className="font-bold text-5xl text-black">Discover more. <span className="text-gray-400">Good things are waiting for you</span></h1>
        </div>


    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">

        {/* swiper section 1 */}
        {/* swiper one */}
        <SwiperSlide>
            <div className='bg-orange-100 rounded-[12px] flex items-center p-5 gap-4 px-10'>
                <div className='text-left w-[100%]'>
                    <p>Explore new arrivals</p>
                    <h2 className='font-bold my-5'>Shop the latest <br />from top brands</h2>
                    <button className='bg-white p-3 rounded-[20px]'>Show me all</button>
                </div>

                <div>
                    <Image src={one} height={0} width={0} alt='picture'/>
                </div>
            </div>
        </SwiperSlide>

        {/* swiper two */}
        <SwiperSlide>
        <div className='bg-pink-100 rounded-[12px] flex items-center p-5 gap-4 px-10'>
                <div className='text-left w-[100%]'>
                    <p>Explore new arrivals</p>
                    <h2 className='font-bold my-5'>Shop the latest <br />from top brands</h2>
                    <button className='bg-white p-3 rounded-[20px]'>Show me all</button>
                </div>

                <div>
                    <Image src={two} height={0} width={0} alt='picture'/>
                </div>
        </div>
        </SwiperSlide>

        {/* swiper three */}
        <SwiperSlide>
        <div className='bg-blue-100 rounded-[12px] flex items-center p-5 gap-4 px-10'>
                <div className='text-left w-[100%]'>
                    <p>Explore new arrivals</p>
                    <h2 className='font-bold my-5'>Shop the latest <br />from top brands</h2>
                    <button className='bg-white p-3 rounded-[20px]'>Show me all</button>
                </div>

                <div>
                    <Image src={three} height={0} width={0} alt='picture'/>
                </div>
        </div>
        </SwiperSlide>

        {/* swiper four */}
        <SwiperSlide>
        <div className='bg-yellow-100 rounded-[12px] flex items-center p-5 gap-4 px-10'>
                <div className='text-left w-[100%]'>
                    <p>Explore new arrivals</p>
                    <h2 className='font-bold my-5'>Shop the latest <br />from top brands</h2>
                    <button className='bg-white p-3 rounded-[20px]'>Show me all</button>
                </div>

                <div>
                    <Image src={four} height={0} width={0} alt='picture'/>
                </div>
        </div>
        </SwiperSlide>

      </Swiper>
    </>


    {/* SWIPPER SECTION TWO */}


    <div className="py-20 ">
        <h1 className="font-bold text-5xl text-black">New Arrivals. <span className="text-gray-400">REY backpacks & bags</span></h1>
    </div>


    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">

        {/* Swipper section 2/1 */}
        <SwiperSlide>
        <div>
                <div className='bg-green-100 rounded-[12px] '>
                    <div><Image src={five} width={0} height={0} alt='picture' /></div>
                    <ul className='flex gap-5  justify-center p-3'>
                        <li className='bg-white p-3 rounded-[12px] font-semibold hover:bg-black hover:text-white'>XS</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>S</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>M</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>L</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>XL</li>
                    </ul>
                </div>

                <div className='flex gap-10 justify-center mt-5'>
                    <p className='h-6 w-[50px] bg-red-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-blue-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-green-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-yellow-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-purple-300 rounded-full'></p>
                </div>

                <div className='text-left mt-5'>
                    <h3 className='font-bold text-xl'>Leather Purse</h3>
                    <p className='text-gray-500 py-3 text-lg '>Perfect mint pink</p>
                </div>

                <div className='flex items-center '>
                    <button className='bg-white text-green-600 text-xl  py-2 px-4 rounded-[12px] border-green-800 border border-solid'>$42</button>
                    <button className='flex ml-auto text-3xl text-yellow-500'><FaStar /><span className='text-xl text-black'>4.9 (99 reviews)</span></button>
                </div>
                
        </div> 
        </SwiperSlide>



        {/* swipper section 2/2 */}
        <SwiperSlide>
        <div>
                <div className='bg-green-100 rounded-[12px] '>
                    <div><Image src={two} width={0} height={0} alt='picture' /></div>
                    <ul className='flex gap-5  justify-center p-3'>
                        <li className='bg-white p-3 rounded-[12px] font-semibold hover:bg-black hover:text-white'>XS</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>S</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>M</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>L</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>XL</li>
                    </ul>
                </div>

                <div className='flex gap-10 justify-center mt-5'>
                    <p className='h-6 w-[50px] bg-red-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-blue-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-green-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-yellow-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-purple-300 rounded-full'></p>
                </div>

                <div className='text-left mt-5'>
                    <h3 className='font-bold text-xl'>Leather Purse</h3>
                    <p className='text-gray-500 py-3 text-lg '>Perfect mint pink</p>
                </div>

                <div className='flex items-center '>
                    <button className='bg-white text-green-600 text-xl  py-2 px-4 rounded-[12px] border-green-800 border border-solid'>$42</button>
                    <button className='flex ml-auto text-3xl text-yellow-500'><FaStar /><span className='text-xl text-black'>4.9 (99 reviews)</span></button>
                </div>
                
        </div>
        </SwiperSlide>


        {/* swipper section 2/3 */}
        <SwiperSlide>
        <div>
                <div className='bg-green-100 rounded-[12px] '>
                    <div><Image src={seven} width={0} height={0} alt='picture' /></div>
                    <ul className='flex gap-5  justify-center p-3'>
                        <li className='bg-white p-3 rounded-[12px] font-semibold hover:bg-black hover:text-white'>XS</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>S</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>M</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>L</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>XL</li>
                    </ul>
                </div>

                <div className='flex gap-10 justify-center mt-5'>
                    <p className='h-6 w-[50px] bg-red-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-blue-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-green-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-yellow-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-purple-300 rounded-full'></p>
                </div>

                <div className='text-left mt-5'>
                    <h3 className='font-bold text-xl'>Leather Purse</h3>
                    <p className='text-gray-500 py-3 text-lg '>Perfect mint pink</p>
                </div>

                <div className='flex items-center '>
                    <button className='bg-white text-green-600 text-xl  py-2 px-4 rounded-[12px] border-green-800 border border-solid'>$42</button>
                    <button className='flex ml-auto text-3xl text-yellow-500'><FaStar /><span className='text-xl text-black'>4.9 (99 reviews)</span></button>
                </div>
                
        </div>
        </SwiperSlide>

        {/* swipper section 2/4 */}
        <SwiperSlide>
        <div>
                <div className='bg-green-100 rounded-[12px] '>
                    <div><Image src={eight} width={0} height={0} alt='picture' /></div>
                    <ul className='flex gap-5  justify-center p-3'>
                        <li className='bg-white p-3 rounded-[12px] font-semibold hover:bg-black hover:text-white'>XS</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>S</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>M</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>L</li>
                        <li className='bg-white p-3 rounded-[12px] font-semibold  hover:bg-black hover:text-white'>XL</li>
                    </ul>
                </div>

                <div className='flex gap-10 justify-center mt-5'>
                    <p className='h-6 w-[50px] bg-red-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-blue-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-green-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-yellow-300 rounded-full'></p>
                    <p className='h-6 w-[50px] bg-purple-300 rounded-full'></p>
                </div>

                <div className='text-left mt-5'>
                    <h3 className='font-bold text-xl'>Leather Purse</h3>
                    <p className='text-gray-500 py-3 text-lg '>Perfect mint pink</p>
                </div>

                <div className='flex items-center '>
                    <button className='bg-white text-green-600 text-xl  py-2 px-4 rounded-[12px] border-green-800 border border-solid'>$42</button>
                    <button className='flex ml-auto text-3xl text-yellow-500'><FaStar /><span className='text-xl text-black'>4.9 (99 reviews)</span></button>
                </div>
                
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>

    
            


















</div>
    )



};

export default SectionTwo;