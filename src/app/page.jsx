'use client'

import SectionOne from "@/Components/HomeSections/SectionOne";
import React, { useState } from "react";
import Image from "next/image";
import SectionTwo from "@/Components/HomeSections/SectionTwo";
import SectionThree from "@/Components/HomeSections/SectionThree";

const Home=()=>{
  const [show, setShow]=useState(false)

  return(

    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  )



};

export default Home;