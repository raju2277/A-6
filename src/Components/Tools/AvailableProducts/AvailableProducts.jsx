import React from 'react';

const AvailableProducts = ({products}) => {
    
    return (
        <div className='grid md:grid-cols-3 w-3/4 mx-auto gap-3 mt-8'>
           {
            products.map(product=>{
               return <div className="card w-65 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-between'>
        <span>{product.icon}</span>
        <span className="badge badge-xs badge-warning">{product.tagType}</span>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className='text-sm text-[#627382]'>{product.description}</p>
      <span className="text-xl">${product.price}/<span className='text-[#627382] text-sm'>Mo</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {product.features.map(feature=>{
        return <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#627382]'>{feature}</span>
      </li>
      })}
      
    </ul>
    <div className="mt-6">
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full">Buy Now</button>
    </div>
  </div>
            </div>
            })
           }
        </div>
    );
};

export default AvailableProducts;