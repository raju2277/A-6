import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const Cart = ({selectedProducts,handleCheckout,price,handleCartProducts}) => {
    
    
    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <h2 className='font-bold'>Your Cart</h2>
               {selectedProducts.length===0?<div className='flex justify-center items-center p-5'> <h2 className='font-bold sm:text-xl flex gap-2 items-center'><FaFileAlt />NO Products Avaialble Please Add Some..</h2> </div>: selectedProducts.map(cartProduct=>{
               return <div className='flex justify-between p-4 shadow'>
                    <div className='flex gap-2 items-center'>
                        <p>{cartProduct.icon}</p>
                        <div>
                            <h2 className='font-bold'>{cartProduct.name}</h2>
                            <p className='text-sm text-[#627382]'>${cartProduct.price}</p>
                        </div>
                    </div>

                    
                    <button type='button' onClick={()=>handleCartProducts(cartProduct)} className="btn btn-soft btn-error">Remove</button>
               </div>
            })}
                <div className='flex justify-between px-3 my-2'>
                    <h2 className='text-[#627382]'>Total</h2>
                    <p className='mr-3 font-bold'>${price.toFixed(2)}</p>
                </div>
                <button type='button' onClick={handleCheckout} className='w-full my-3 btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white'>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default Cart;