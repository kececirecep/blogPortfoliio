import React from 'react'
import { PiTwitterLogoThin,PiGithubLogoThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Footer = () => {
    const iconStyle={
        fontSize:"45px",
    }
    return (
        <div>
            <div className='py-20 container mx-auto'>
                <div className='flex items-center'>
                    <div className='w-3/4'>
                        <h2 className='font-bold text-[48px]'>Subscribe to my <br /> <span className='specialColor'>Newsletters</span></h2>
                        <p className='text-[#CBD5E1] text-[20px] font-medium py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
                    </div>
                    <form className='bg-[#192338] w-2/4 px-4 py-2 flex items-center justify-between rounded-full'>
                        <input type="email" placeholder='Enter your Email' className='w-[100%] bg-transparent border-none outline-none pl-4' />
                        <button className='text-[#1E293B] font-bold text-[20px] rounded-full px-8 py-2' style={{ background: "linear-gradient(to right, #0EA6E9, #22D3EE)" }}>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-white py-8'>
                <div className='container mx-auto flex items-center justify-between'>
                    <h2 className='text-[#CBD5E1]'>© Copyright 2022 by Ixartz’s blog. Built with <span className='text-red-500 text-xl'>♥</span> by CreativeDesignsGuru</h2>
                    <div className='flex gap-4'>
                        <Link><PiGithubLogoThin style={iconStyle}/></Link>
                        <Link><CiLinkedin style={iconStyle}/></Link>
                        <Link><PiTwitterLogoThin style={iconStyle}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer