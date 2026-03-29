import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { IoMdLocate } from 'react-icons/io';
import BannerImg from '././../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto w-3/4 mt-8'>
            <div className='md:flex justify-between gap-2 items-center space-y-4'>
                <div className='space-y-3'>
                    <span className=' bg-[#E1E7FF] gap-1 rounded-full px-4 py-1 text-sm text-[#9514FA] inline-block'><p className='flex items-center  gap-1'>< IoMdLocate  /> New:AI-Powered Tools </p></span>
                    <h2 className='text-5xl font-bold'>Supercharge Your Digital Workflow</h2>
                    <p className='text-sm text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br></br> software—all in one place. Start creating faster today.<br></br> Explore Products</p>
                    <div className='flex gap-2'>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'>Explore Products</button>
                        <button className='btn btn-outline rounded-full'><CiPlay1 /> Watch Demo</button>
                    </div>
                </div>

                <div className='' >
                    
                    <img src={BannerImg} className='w-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;