import React, { useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import Cart from '../Cart/Cart';
import { use } from 'react';

const Products = ({productTools}) => {

    const products=use(productTools);
    const [selected,setSelected]=useState("products");
    return (
        <div className=''>
            <div className='w-3/4 mx-auto space-y-3 mt-6'>
                <h2 className='text-center font-bold text-3xl'>Premium Digital Tools</h2>
                <p className='text-center text-sm text-[#627382]' >Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex justify-center gap-1'>
                    <button onClick={()=>setSelected("products")} className={`btn rounded-full ${selected==="products"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}  text-[#000000]`}>Products</button>
                    <button onClick={()=>setSelected("cart")} className={`btn rounded-full ${selected==="cart"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}  text-[#000000]`}>Cart (2)</button>
                    
                </div>
            </div>
            {selected==="products"?<AvailableProducts products={products}></AvailableProducts>:<Cart></Cart>}
        </div>
    );
};

export default Products;