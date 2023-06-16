import React from 'react';
import ChefBanner from '../Shared/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ChefRecipesTable from '../../componets/ChefRecipesTable';
import LoadSpinner from '../Shared/LoadSpinner';


const ChefRecipes = () => {
      const chef = useLoaderData();
      const {data: recipes=[], isLoading}= useQuery({
            queryKey:['recipes'],
            queryFn:async()=>{
                  const res = await fetch(`https://dragon-delights-server.vercel.app/chefs/recipes/${chef.id}`);
            return res.json()
            }
      })

      if(isLoading){
            return <LoadSpinner></LoadSpinner>
      }

      // console.log(recipes);
  
      
      return (
            <div>
                  <ChefBanner key={chef.id} chef={chef}></ChefBanner>
                  <ChefRecipesTable key={chef.id} recipes={recipes}></ChefRecipesTable>
                  
            </div>
      );
};

export default ChefRecipes;