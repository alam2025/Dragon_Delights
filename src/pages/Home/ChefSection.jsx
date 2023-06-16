import React, { useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import useChefs from '../../hooks/useChefs';
import ChefCard from '../../componets/chefCard';
import LoadSpinner from '../Shared/LoadSpinner';

const ChefSection = () => {
      const [isFold, setFold]=useState(false)
      let [chefs,isLoading] = useChefs()
      if(isLoading){
            return <LoadSpinner></LoadSpinner>
      }


      !isFold ? chefs=chefs.slice(0, 6):chefs
      // chefs = chefs.slice(0, 6)
      return (
            <div className=' text-center my-10'>
                  <SectionTitle title={"Popular Chefs"} subTitle={'Explore chefs Profile'}></SectionTitle>


                  <div>
                        <div className=' flex justify-end mb-3'>
                              <button onClick={()=>setFold(!isFold)}  className=' btn btn-secondary btn-sm '>{!isFold?'See All':'Show Less'}</button>
                        </div>
                        <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
                        </section>
                  </div>
            </div>
      );
};

export default ChefSection;