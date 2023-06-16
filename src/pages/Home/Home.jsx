import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import Testimonials from './Testimonials';
import Services from './Servises/Services';

const Home = () => {
      return (
            <div className='md:px-[10%]'>
                  <Banner></Banner>
                  <Services></Services>
                  <ChefSection></ChefSection>

                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;