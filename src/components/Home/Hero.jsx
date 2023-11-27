import React from 'react'
import HeroMan from '../../images/HomePage/heroMan.png'
import { BsTwitterX,BsLinkedin,BsGithub } from "react-icons/bs"; 
import {Link} from 'react-router-dom'




const Hero = () => {
    const styleSocialIcon ={
        color:"transparent",
        fontSize:"50px",
        backgroundColor:"red",
        borderRadius:"10px",
        padding:"12px",
        background: "#1e2d4e",
    } 

    return (
        <div className='flex items-center justify-between flex-col-reverse lg:flex-row '>
            <div className='lg:w-1/2 w-1/1 lg:text-start text-center mt-4'>
                <h2 className='font-bold lg:text-4xl text-[20px]'>Hi there, I’m <span className='specialColor'>Ixartz</span>👋</h2>
                <p className='font-medium lg:text-xl text-[12px] py-12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                    Lorem ipsum dolor sit amet, <span className='specialColor'>consectetur</span> adipexs
                    sed do eiusmod tempor incididunt ut labore et <span className='specialColor'>dolore</span>.
                </p>
                <div className='flex lg:justify-start justify-center items-center gap-4'>
                    <Link><BsTwitterX style={styleSocialIcon} /></Link>
                    <Link><BsLinkedin style={styleSocialIcon} /></Link>
                    <Link><BsGithub style={styleSocialIcon} /></Link>
                </div>
            </div>
            <div className='w-1/3'>
                <img src={HeroMan} alt="" />
            </div>
        </div>
    )
}

export default Hero