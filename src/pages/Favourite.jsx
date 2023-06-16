import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getShoppingCart, removeFromDb } from '../utilities/fakedb';
import SectionTitle from './Shared/SectionTitle';
import {  RiDeleteBin6Line } from "react-icons/ri";

const Favourite = () => {
      const [cart, setCart] = useState([]);
      // const recipes = useLoaderData()
      const savedRecipes = getShoppingCart()

      const { data: recipes = [],refetch} = useQuery({
            queryKey: ['recipes'],
            queryFn: async () => {
                  const res = await fetch(`http://localhost:3000/recipes`);
                  return res.json();
            }
      })

      let favouriteRecipes = [];
      for (const id in savedRecipes) {
            const foundRecipe = recipes.find(recipe => recipe.id == parseInt(id));
            if (foundRecipe) {
                  favouriteRecipes.push(foundRecipe);
                  // setCart(cart)
            }
      }

      const handleRemove=recipe=>{
            removeFromDb(recipe.id);
            const filterRecipe= favouriteRecipes.filter(r=>r.id !==recipe.id);
            setCart(filterRecipe)

      }

      console.log(favouriteRecipes);

      return (
            <div className=' mb-24 my-container'>
                  <SectionTitle title={'your favourite recipes'}></SectionTitle>

                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                                #
                                          </th>
                                          <th>Name</th>
                                          <th>Ratings</th>
                                          <th>Action</th>
                                          
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          favouriteRecipes.map((recipe,index) => <tr key={recipe.id}>
                                                <th>
                                                     {index+1}
                                                </th>
                                                <td>
                                                      <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                  <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={recipe.food_image} alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <div className="font-bold">{recipe.name}</div>
                                                                 
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>
                                                    {recipe.rating}
                                                </td>
                                               
                                                <th>
                                                      <button onClick={()=>handleRemove(recipe)} className="btn "><RiDeleteBin6Line size={35}></RiDeleteBin6Line></button>
                                                </th>
                                          </tr>)
                                    }

                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Favourite;