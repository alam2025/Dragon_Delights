import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/banners/banner-2.jpg';
import banner2 from '../../assets/banners/banner-3.jpg';
import banner3 from '../../assets/banners/banner-4.jpg';
// import LazyLoad from 'react-lazy-load';

const Banner = () => {
      return (
            <Carousel>
                  <div className='relative'>
                        <div className='absolute left-0 top-0 bg-opacity-50 bg-black h-full w-1/2' />
                        <img src={banner1} alt='Banner 1' className='object-cover w-full h-full' />
                        <div className='absolute md:w-1/2 w-3/4 left-5 top-1/2 transform -translate-y-1/2 text-white'>
                              <h1 className='text-4xl font-bold'>Delicious and Authentic Chinese Cuisine</h1>
                              <p className='text-lg'>Savor the flavors of traditional Chinese dishes crafted with passion and expertise.</p>
                        </div>
                  </div>
                  <div className='relative'>
                        <div className='absolute left-0 top-0 bg-opacity-50 bg-black h-full w-1/2' />
                       
                              <img src={banner2} alt='Banner 1' className='object-cover w-full h-full' />
                       
                        <div className='absolute md:w-1/2 w-3/4  left-5 top-1/2 transform -translate-y-1/2 text-white'>
                              <h1 className='text-4xl font-bold'>Explore the Culinary Wonders of China</h1>
                              <p className='text-lg'>Embark on a gastronomic journey through China's diverse cuisine, from spicy Sichuan delicacies to delicate dim sum.</p>
                        </div>
                  </div>
                  <div className='relative'>
                        <div className='absolute left-0 top-0 bg-opacity-50 bg-black h-full w-1/2' />
                        <img src={banner3} alt='Banner 1' className='object-cover w-full h-full' />
                        <div className='absolute md:w-1/2 w-3/4  left-5 top-1/2 transform -translate-y-1/2 text-white'>
                              <h1 className='text-4xl font-bold'>Taste the Essence of Chinese Cooking</h1>
                              <p className='text-lg'>Indulge in mouthwatering dishes that showcase the rich heritage and exquisite flavors of Chinese culinary traditions.</p>
                        </div>
                  </div>

            </Carousel>
      );
};

export default Banner;
