import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Swal from 'sweetalert2';

const PopularRecipe = () => {
      const { id } = useParams();
      const { data: recipe = [] } = useQuery({
            queryKey: ['selected-recipe'],
            queryFn: async () => {
                  const res = await fetch(`https://dragon-delights-server.vercel.app/recipe/${id}`)
                  return res.json()
            }
      })
      // console.log(recipe);
      const handleAdd = (recipe) => {
            addToDb(recipe.id)

            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
            })


      }
     


      return (
            <div className=' flex gap-10 flex-col-reverse md:flex-row py-20 my-container bg-base-200 justify-center items-center rounded-lg mb-10 md:px-16'>
                  <div className=' w-[90%] md:w-[70%] '>
                        <h1 className=' text-3xl font-semibold'>{recipe.name}</h1>
                        <h4 className=' font-semibold text-xl'>Ingredients :</h4>
                       <ul className=' mx-12'>
                        {
                              recipe.ingredients?.map((r,index)=><li key={index}>{index+1}. {r}</li>)
                        }
                       </ul>
                        <div>
                              <h1 className=' font-semibold text-xl'>Cooking Method</h1>
                              <p className=' mx-12'>{recipe.cooking_method}</p>
                        </div>
                        <button onClick={()=>handleAdd(recipe)} className=' btn btn-secondary mt-4'>ADD TO CART</button>
                  </div>
                  <div> <img className=' w-full' src={recipe.food_image} alt="" /></div>

            </div>
      );
};

export default PopularRecipe;