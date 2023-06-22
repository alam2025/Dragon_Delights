import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import PopularRecipeCard from '../../../componets/PopularRecipeCard';

const Recipes = () => {
      const [isFold,setFold]= useState(false)
      let { data: popularRecipe = [] } = useQuery({
            queryKey: ['Recipe'],
            queryFn: async () => {
                  const res = await fetch(`https://dragon-delights-server.vercel.app/popular-recipes`);
                  return res.json();
            }
      })
      
      !isFold?popularRecipe = popularRecipe.slice(0,6):popularRecipe;



      return (
            <div>
                  <SectionTitle title={'Popular Recipes'} subTitle={'Best One For You'}></SectionTitle>
                  <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        {
                              popularRecipe.map((recipe, index) => <PopularRecipeCard key={index} recipe={recipe}></PopularRecipeCard>)
                        }
                  </div>
                  <div className=' flex justify-center  mt-6 mb-3'>
                        <button onClick={() => setFold(!isFold)} className={` btn btn-secondary btn-sm ${isFold && ' hidden'}`}>See All</button>
                  </div>
            </div>
      );
};

export default Recipes;