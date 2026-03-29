import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="card w-69 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-between'>
        <span>icon</span>
        <span className="badge badge-xs badge-warning">Most Popular</span>
    </div>
    <div className="space-y-2">
      <h2 className="text-3xl font-bold">Ai Writing Pro</h2>
      <p className='text-sm text-[#627382]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id quod consequuntur at ratione quasi libero ex iusto impedit laboriosam.</p>
      <span className="text-xl">$29/<span className='text-[#627382] text-sm'>Mo</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#627382]'>High-resolution image generation</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full">Buy Now</button>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Cart;