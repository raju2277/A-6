import React from 'react';

const Details = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-6 h-[120px] flex items-center text-white'>
            <div className='w-3/4 mx-auto flex justify-around items-center '>
                <div className=''>
                   
                        <h2 className='text-2xl font-bold sm:text-center'>50K+</h2>
                        <p className='text-sm text-[#FFFFFF]/50'>Active users</p>
                    
                </div>

                  <div className="divider  before:bg-white/50 after:bg-white/50 text-white divider-horizontal"></div>

                    
                <div className=''>
                        <h2 className='text-2xl font-bold sm:text-center'>200+</h2>
                    <p className='text-sm text-[#FFFFFF]/50'>Premium Tools</p>
                </div>

                 <div className="divider  before:bg-white/50 after:bg-white/50 text-white divider-horizontal"></div>
                    
                <div>
                    <h2 className='text-2xl font-bold sm:text-center'>4.9</h2>
                    <p className='text-sm text-[#FFFFFF]/50'>Rating</p>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Details;