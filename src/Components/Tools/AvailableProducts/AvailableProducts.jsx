import React, {  } from 'react';
import { toast } from 'react-toastify';

const AvailableProducts = ({products,price,setPrice,setCartCount,selectedProducts,setSelectedProducts}) => {
    
    

    const handleProducts=(product)=>{

        const isAdded=selectedProducts.some(added=>added.id===product.id);
        if(!isAdded)  {
            setSelectedProducts([...selectedProducts,product]);
        setCartCount(selectedProducts.length+1);
        setPrice(price+product.price);
        toast.success(`${product.name} Has been added`);
        }
    }

    const badgeStyles={
        new:"badge-warning",
        popular:"badge-success",
        "best seller":"badge-primary"

    };
    return (
        <div className='grid md:grid-cols-3 w-3/4 mx-auto gap-3 mt-8'>
           {
            products.map(product=>{
                const isAdded=selectedProducts.some(added=>added.id===product.id);
               return <div key={product.id} className="card w-65 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-between'>
        <span>{product.icon}</span>
        <span className={`badge badge-xs ${badgeStyles[product.tagType]} `}>{product.tagType}</span>
    </div>
    <div className="space-y-2">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className='text-sm text-[#627382]'>{product.description}</p>
      <span className="text-xl">${product.price}/<span className='text-[#627382] text-sm'>Mo</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {product.features.map((feature,index)=>{
        return <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[#627382]'>{feature}</span>
      </li>
      })}
      
    </ul>
    <div className="mt-6">
      <button onClick={()=>handleProducts(product)} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full" disabled={isAdded}>{!isAdded? "Buy Now":"Added to cart"}</button>
    </div>
  </div>
            </div>
            })
           }
        </div>
    );
};

export default AvailableProducts;