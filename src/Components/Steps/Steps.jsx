import React from 'react';
import user from '../../assets/user.png'
import packaged from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='mt-8 mb-7 w-3/4 mx-auto'>
            <div className=''>
                <h3 className='text-center font-bold text-xl'>Get Started In 3 Steps</h3>
                <p className='text-xs text-[#627382] text-center'>Start using premium  digital tools in minute not hours</p>
            </div>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                <div className='card bg-base-100 w-66 shadow-sm'>
                    <div className='flex justify-end w-3/4 mx-auto'>
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-1 py-0.5 rounded-full text-white text-sm'>01</p>
                    </div>
                    <div className='pb-3' >
                        <div className='space-y-2'>
                            <span className='flex justify-center'><span className=' bg-[#627382]/20 rounded-full inline-block px-2 py-1'><img  src={user} /></span></span>
                        <h3 className='text-center font-bold'>Create Account</h3>
                        <p className='text-center text-xs text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>

                    </div>
                </div>
                <div className='card bg-base-100 w-66 shadow-sm'>
                    <div className='flex justify-end w-3/4 mx-auto'>
                        <p className='bg-linear-to-r from-[#5b51a5] to-[#9514FA] px-1 py-0.5 rounded-full text-white text-sm'>02</p>
                    </div>
                    <div className='pb-3' >
                        <div className='space-y-2'>
                            <span className='flex justify-center'><span className=' bg-[#627382]/20 rounded-full inline-block px-2 py-1'><img  src={packaged} alt="" /></span></span>
                        <h3 className='text-center font-bold'>Choose Products </h3>
                        <p className='text-center text-xs text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>

                    </div>
                </div>
                <div className='card bg-base-100 w-66 shadow-sm'>
                    <div className='flex justify-end w-3/4 mx-auto'>
                        <p className='bg-linear-to-r from-[#363255] to-[#9514FA] px-1 py-0.5 rounded-full text-white text-sm'>03</p>
                    </div>
                    <div className='pb-3' >
                        <div className='space-y-2'>
                            <span className='flex justify-center'><span className=' bg-[#627382]/20 rounded-full inline-block px-2 py-1'><img  src={rocket} alt="" /></span></span>
                        <h3 className='text-center font-bold'>Start Creating</h3>
                        <p className='text-center text-xs text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;