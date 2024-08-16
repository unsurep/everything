'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { useState } from 'react';
import logo from '../Components/Images/logo.svg'
import React from 'react';
import Image from 'next/image';
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io"; 
// import dog from '../Components/Images/dog-bg.png'
import { GoChecklist } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import profile from '../Components/Images/profileR.png'
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';







const Navbar=()=>{
    const [showExplore, setShowExplore]=useState(false);
    const [showCategoryPage, setShowCategoryPage]=useState(false);
    const [showProductPage, setShowProductPage]=useState(false);
    const [showBlogPage, setShowBlogPage]=useState(false);
    const [showOtherPage, setShowOtherPage]=useState(false);
    const [showSignUp, setShowSignUp]=useState(false);
    const [showSearchBar, setShowSearchBar]=useState(false);
    



    const handleShowExplore=()=>{
        setShowExplore(!showExplore)
        setShowCategoryPage(false)
        setShowProductPage(false) 
        setShowBlogPage(false)  
        setShowOtherPage(false)
        setShowSignUp(false)
        setShowSearchBar(false)

    }

    const handleShowCategoryPage=()=>{
        setShowCategoryPage(!showCategoryPage)  
        setShowProductPage(false) 
        setShowBlogPage(false)  
        setShowOtherPage(false)
    }

    const handleShowProductPage=()=>{
        setShowProductPage(!showProductPage)
        setShowCategoryPage(false)  
        setShowBlogPage(false)  
        setShowOtherPage(false)
    }

    const handleShowBlogPage=()=>{
        setShowBlogPage(!showBlogPage)
        setShowProductPage(false)
        setShowCategoryPage(false)  
        setShowOtherPage(false)
        
    }

    const handleShowOtherPage=()=>{
        setShowOtherPage(!showOtherPage)
        setShowCategoryPage(false)
        setShowProductPage(false) 
        setShowBlogPage(false)
    }

    const handleShowSignUp=()=>{
        setShowSignUp(!showSignUp)
        setShowExplore(false)
        setShowCategoryPage(false)
        setShowProductPage(false) 
        setShowBlogPage(false)  
        setShowOtherPage(false)
        setShowSearchBar(false)
    }

    const handleShowSearchBar=()=>{
        setShowSearchBar(!showSearchBar)
        setShowExplore(false)
        setShowSignUp(false)
    }


    return(
        <div>






            <div className='flex items-center justify-between py-6 px-[5rem] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] z-50 fixed w-full '>

                <Link href={'/'}>
                <div>
                    <Image src={logo} width={0} height={0}/>
                </div>
                
                </Link>
                


                <ul className='flex gap-10 text-xl items-center justify-center relative'>
                    <Link href={'/product'}><li className='hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Product</li></Link>

                    
                    <li className='hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Men</li>
                    <li className='hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Women</li>
                    <li className='hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Beauty</li>
                    <li className='hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Sport</li>

                    <li className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Template <IoIosArrowDown /> </li>

                    {/* drop down for template page */}
                    {/* to be continued later */}
                    {/* <div className=' '>
                        <div className='absolute top-[6rem] right-0 flex items-center justify-between gap-20'>
                            <ul className='flex flex-col gap-5'>
                                <li><b>Home</b></li>
                                <li>Home 1</li>
                                <li>Home 2</li>
                                <li>Home 3</li>
                                <li>Home 4</li>
                                <li>Home 5</li>
                            </ul>

                            <ul className='flex flex-col gap-5'>
                                <li><b>Shop</b></li>
                                <li>Shop 1</li>
                                <li>Shop 2</li>
                                <li>Shop 3</li>
                                <li>Shop 4</li>
                                <li>Shop 5</li>
                            </ul>

                            <ul className='flex flex-col gap-5'>
                                <li><b>Other Page</b></li>
                                <li>Other 1</li>
                                <li>Other 2</li>
                                <li>Other 3</li>
                                <li>Other 4</li>
                                <li>Oher5</li>
                            </ul>

                            <ul className='flex flex-col gap-5'>
                                <li><b>Blog Page</b></li>
                                <li>Blog 1</li>
                                <li>Blog 2</li>
                                <li>Blog 3</li>
                                <li>Blog 4</li>
                                <li>Blog 5</li>
                            </ul>

                            <div className='flex'>
                                <p>sale collection</p>
                                <h1 className='text-2xl font-bold mt-4 mb-9'>Up to <br /> 80% off Retail</h1>
                                <button className='bg-white rounded-full py-4 px-6'>Show me all</button>
                                
                                <div>
                                    <Image src={dog} width={0} height={0} alt='image'/>
                                </div>
                            </div>

                    

                        </div>














                    </div> */}






                    <li onClick={handleShowExplore} className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-3 rounded-full hover:transition-all hover:ease-linear'>Explore <IoIosArrowDown /></li>
                    {/* drop down for explore */}

                    {showExplore===true && <ul data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[5rem] right-[-8rem] flex flex-col gap-3 bg-white py-6 px-8 rounded-[12px]'>
                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Home 1</li>
                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Home 2</li>

                        <li onClick={handleShowCategoryPage} className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category Page <IoIosArrowDown /></li>
                        {/* Category drop down */}

                        {showCategoryPage===true && <ul data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[9rem] right-[-14rem] flex flex-col gap-3 bg-white py-6 px-8 rounded-[12px]'>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 1</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 2</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 3</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 4</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 5</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Category 6</li>
                        </ul> }

                        


                        <li onClick={handleShowProductPage} className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product Page <IoIosArrowDown /></li>
                        {/* Drop down for Product Page */}

                        {showProductPage===true && <ul data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[13rem] right-[-13rem] flex flex-col gap-3 bg-white py-6 px-8 rounded-[12px]'>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 1</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 2</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 3</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 4</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 5</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Product 6</li>
                        </ul> }

                        


                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Cart Page</li>
                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Checkout Page</li>
                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Account Page</li>
                        <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Search Page</li>

                        <li onClick={handleShowBlogPage} className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog Page <IoIosArrowDown /></li>
                        {/* drop down for blog page */}

                        {showBlogPage===true && <ul data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[20rem] right-[-11rem] flex flex-col gap-3 bg-white rounded-[12px] py-6 px-8'>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 1</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 2</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 3</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 4</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 5</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Blog 6</li>
                        </ul> }



                        <li onClick={handleShowOtherPage} className='flex gap-3 items-center hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other Page <IoIosArrowDown /></li>
                        {/* drop down for other page */}

                        {showOtherPage===true && <ul data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[20rem] right-[-11rem] flex flex-col gap-3 bg-white rounded-[12px] py-6 px-8  '>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 1</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 2</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 3</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 4</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 5</li>
                            <li className='hover:bg-slate-200 cursor-pointer py-2 px-4 rounded-[8px] hover:transition-all hover:ease-linear'>Other 6</li>
                        </ul> }

                    
                    </ul> }

                </ul>


                <div className='flex gap-2 text-2xl relative'>
                    <p onClick={handleShowSearchBar} className='hover:bg-slate-200 cursor-pointer py-3 px-3 rounded-full hover:transition-all hover:ease-linear'><GoSearch /></p>
                    {/* doing search bar */}

                    {showSearchBar=== true && <form className='absolute right-[23rem] top-0'> 
                        <input type="text"
                        placeholder='type & press enter' 
                        className='w-[800px] py-3 rounded-[10px] border-black border outline-none border-solid pl-[60px] '
                        /> 
                        <label className='absolute top-[0.5rem] left-0 text-4xl pl-5 '><GoSearch /></label>

            
                        <label className='absolute top-[0.5rem] right-0 text-4xl pr-5 cursor-pointer'><IoMdClose /></label>

                    </form> }



                    
                    
                    <p onClick={handleShowSignUp} className='hover:bg-slate-200 cursor-pointer py-3 px-5 rounded-full hover:transition-all hover:ease-linear'><FaRegUser /></p>
                    {/* user login */}

                    {showSignUp===true && <div data-aos="fade-up"
                        data-aos-duration="500" className='absolute top-[5rem] left-[-6rem] bg-white py-8 px-12 pr-20 text-lg rounded-[18px]'>
                        <div className='pb-5 flex flex-col gap-1'> 
                            <Image src={profile} alt='pic' width={0} height={0} className='w-[50%]'/>
                            <h3><b>Louis Maro</b></h3>
                            <p>Rivers State, Nig</p>
                        </div>
                        <hr />
                        <div className='mt-5 mb-5 flex flex-col gap-5'>
                            <p className='flex items-center gap-2 cursor-pointer'><FaRegUser />My Account</p>
                            <p className='flex items-center gap-2 cursor-pointer'><GoChecklist/>My Order</p>
                            <p className='flex items-center gap-2 cursor-pointer'><IoIosHeartEmpty/>Wishlist</p>
                        </div>
                        <hr />
                        <div className='flex flex-col gap-5 mt-5'>
                            <p className='flex items-center gap-2 cursor-pointer'><FaRegLightbulb/>Dark Theme</p>
                            <p className='flex items-center gap-2 cursor-pointer'><IoHelpBuoyOutline/>Help</p>
                            <p className='flex items-center gap-2 cursor-pointer'><CiLogout/>Logout</p>
                        </div>
                    </div>}

                    
                    




                    <p className='hover:bg-slate-200 cursor-pointer py-3 px-3 rounded-full hover:transition-all hover:ease-linear'><GrCart /></p>
                </div>

            </div>







           
        </div>
    )


};

export default Navbar;