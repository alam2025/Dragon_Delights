import React from 'react';
import ChefBanner from '../Shared/ChefBanner';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ChefRecipesTable from '../../componets/ChefRecipesTable';


const ChefRecipes = () => {
      const chef = useLoaderData();
      const {data: recipes=[]}= useQuery({
            queryKey:['recipes'],
            queryFn:async()=>{
                  const res = await fetch(`http://localhost:3000/chefs/recipes/${chef.id}`);
            return res.json()
            }
      })

      // console.log(recipes);
  
      
      return (
            <div>
                  <ChefBanner key={chef.id} chef={chef}></ChefBanner>
                  <ChefRecipesTable key={chef.id} recipes={recipes}></ChefRecipesTable>
                  
            </div>
      );
};

export default ChefRecipes;