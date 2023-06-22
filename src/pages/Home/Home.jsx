import React from 'react';
import Banner from './Banner';
import ChefSection from './ChefSection';
import Testimonials from './Testimonials';
import Services from './Servises/Services';
import Recipes from './PopularRecipes.jsx/Recipes';

const Home = () => {
      return (
            <div className='md:px-[10%]'>
                  <Banner></Banner>
                  <Services></Services>
                  <ChefSection></ChefSection>
                  <Recipes></Recipes>

                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;