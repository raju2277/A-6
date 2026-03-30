import React from 'react';

const Workflow = () => {
    return (
        <div className='mt-10'>
            <div className='p-20 bg-linear-to-r  from-[#5b51a5] to-[#9514FA] flex justify-center items-center'>
                    <div className='space-y-2'>
                        <h3  className='text-center text-xl md:text-4xl font-bold text-white'>Ready To Transform Your Workflow?</h3>
                        <p className='text-center text-base-300 text-[12px]'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                        <div className='flex gap-2 justify-center'>
                            <button className='btn rounded-full text-purple-500'>Explore Products</button>
                            <button className='text-white hover:text-purple-400 btn btn-outline rounded-full'>View Pricing</button>
                        </div>
                        <p className='text-center text-sm text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
            </div>
        </div>
    );
};

export default Workflow;