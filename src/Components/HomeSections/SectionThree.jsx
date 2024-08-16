'use client'

import React from "react"
import Image from "next/image"
import { mockData } from "../mockData";




const SectionThree=()=>{

    return(
        <div className="px-[7rem] pt-20">

            <section>
                <h2>What's trending now</h2>
                <p>Discover the most trending products in Ciseco.</p>

                <div className='grid grid-cols-4 items-center gap-10'>
                    {mockData.map((data)=>(
                        <div className='pt-10' >
                            <div  className='bg-blue-100 rounded-[18px] '>
                                <Image src={data.Image} height={0} width={0} alt="image"/>
                            </div>

                            {data?.id===1 && <ul className="flex gap-5 items-center justify-center pt-5">
                                <li className='bg-neutral-600 h-3 w-10 rounded-full'></li>
                                <li className='bg-neutral-600 h-3 w-10 rounded-full'></li>
                                <li className='bg-neutral-600 h-3 w-10 rounded-full'></li>
                                <li className='bg-neutral-600 h-3 w-10 rounded-full'></li>
                            </ul>}

                            {data?.id===2 && <ul className="flex gap-5 items-center justify-center pt-5">
                                <li className='bg-red-600 h-5 w-5 rounded-full'></li>
                                <li className='bg-red-600 h-5 w-5 rounded-full'></li>
                                <li className='bg-red-600 h-5 w-5 rounded-full'></li>
                                <li className='bg-red-600 h-5 w-5 rounded-full'></li>
                            </ul>}
                            


                            <div>
                                <h1 className="text-black font-bold">{data.Name}</h1>
                                <p className="text-neutral-400">{data.Description}</p>

                                <div className="flex gap-5 items-center ">
                                    <button className="text-green-950 border border-green-900 px-2 py-1 rounded-[8px]">{data.Price}</button>
                                    <p className="ml-auto">{data.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

                





                            












            </section>
















        </div>
    )




};

export default SectionThree;