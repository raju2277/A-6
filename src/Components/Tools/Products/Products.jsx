import React, { useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import Cart from '../Cart/Cart';
import { use } from 'react';
import { toast } from 'react-toastify';

const Products = ({productTools,setCartCount,cartCount}) => {

    const products=use(productTools);
    const [selected,setSelected]=useState("products");
    const [selectedProducts,setSelectedProducts]=useState([]);
    const [price,setPrice]=useState(0);

    const handleCheckout=()=>{
        setSelectedProducts([]);
        setCartCount(0);
        setPrice(0);
        toast.info("Checkout Completed Successfully")
    }

    const handleCartProducts=(product)=>{
        const newProducts=selectedProducts.filter(item => item.id!==product.id);
        setSelectedProducts(newProducts);
        setCartCount(prev=>prev-1);
        setPrice(price-product.price);
        toast.error(`${product.name} removed from cart.`)
    };
    return (
        <div className=''>
            <div className='w-3/4 mx-auto space-y-3 mt-6'>
                <h2 className='text-center font-bold text-3xl'>Premium Digital Tools</h2>
                <p className='text-center text-sm text-[#627382]' >Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex justify-center gap-1'>
                    <button type='button' onClick={()=>setSelected("products")} className={`btn rounded-full ${selected==="products"?"bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white":""}  text-[#000000]`}>Products</button>
                    <button type='button' onClick={()=>setSelected("cart")} className={`btn rounded-full ${selected==="cart"?"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}  text-[#000000]`}>Cart ({cartCount})</button>
                    
                </div>
            </div>
            {selected==="products"?<AvailableProducts products={products} setPrice={setPrice} price={price} setCartCount={setCartCount} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}></AvailableProducts>:<Cart handleCartProducts={handleCartProducts} handleCheckout={handleCheckout} price={price} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}></Cart>}
        </div>
    );
};

export default Products;