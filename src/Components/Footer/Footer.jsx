import React from 'react';
import { FaFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-black px-4 md:px-16 py-15'>
            <div className='grid text-center sm:text-start space-y-3 md:grid-cols-5 text-white items-center'>
                <div className=''>
                    <h2 className='text-2xl font-bold mb-2'>DigiTools</h2>
                    <p className='text-[12px]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='font-bold'>Product</h2>
                    <ul>
                        <li><a href="" className='text-[10px]'>Features</a></li>
                        <li><a href="" className='text-[10px]'>Pricing</a></li>
                        <li><a href="" className='text-[10px]'>Templates</a></li>
                        <li><a href="" className='text-[10px]'>Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Company</h2>
                    <ul>
                        <li><a href="" className='text-[10px]'>About</a></li>
                        <li><a href="" className='text-[10px]'>Blog</a></li>
                        <li><a href="" className='text-[10px]'>Careers</a></li>
                        <li><a href="" className='text-[10px]'>Press</a></li>
                    </ul>
                </div>
                <div className='cursor'>
                    <h2 className='font-bold'>Resources</h2>
                    <ul>
                        <li><a href="" className='text-[10px]'>Documentation</a></li>
                        <li><a href="" className='text-[10px]'>Help Center</a></li>
                        <li><a href="" className='text-[10px]'>Community</a></li>
                        <li><a href="" className='text-[10px]'>Contact</a></li>
                    </ul>
                </div>
                
                
                <div>
                    <h2 className='font-bold'>Social Links</h2>
                    <ul className='flex gap-2 justify-center sm:justify-start'>
                        <li><FaSquareInstagram /></li>
                        <li><FaFacebook/></li>
                        <li><FaXTwitter /></li>
                    </ul>

                </div>
            </div>
             <div className="divider divider-start before:bg-white after:bg-white opacity-30"></div>
             <div className='sm:flex justify-between text-center sm:text-start'>
                <div>
                    <p className='text-white opacity-30'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div>
                    <ul className='sm:flex space-y-1 mt-3 sm:mt-0 gap-3 text-sm  text-white opacity-30'>
                        <li className='text-center'><a href="#"></a>Privacy Policy</li>
                        <li className='text-center'><a href="#"></a>Terms of Service </li>
                        <li className='text-center'><a href="#"></a>Cookies</li>
                    </ul>
                </div>
             </div>

        </footer>
    );
};

export default Footer;