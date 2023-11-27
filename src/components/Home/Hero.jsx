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
        <div className='flex items-center justify-between'>
            <div className='w-1/2'>
                <h2 className='font-bold text-4xl'>Hi there, I’m <span className='specialColor'>Ixartz</span>👋</h2>
                <p className='font-medium text-xl py-12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                    Lorem ipsum dolor sit amet, <span className='specialColor'>consectetur</span> adipexs
                    sed do eiusmod tempor incididunt ut labore et <span className='specialColor'>dolore</span>.
                </p>
                <div className='flex items-center gap-4'>
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