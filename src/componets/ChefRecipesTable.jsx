import React from 'react';
import SectionTitle from '../pages/Shared/SectionTitle';
import { AiOutlineHeart } from "react-icons/ai";
const ChefRecipesTable = ({ recipes }) => {
      console.log(recipes);
      return (
            <div className=' mb-24'>
                  <SectionTitle title={'Recipes'}></SectionTitle>


                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>
                                               #
                                          </th>
                                          <th>Name</th>
                                          <th>Ingredients</th>
                                          <th>Cooking Method</th>
                                          <th>Ratng</th>
                                          <th>Add to CART</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {recipes.map((recipe,index )=> <tr key={recipe.id}>
                                          <th>
                                               {index+1}
                                          </th>
                                          <td>
                                                <div className="flex items-center space-x-3">
                                                      <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                  <img src={recipe.food_image} alt={recipe.name} />
                                                            </div>
                                                      </div>
                                                      <div>
                                                            <div className="font-bold">{recipe.name}</div>
                                                          
                                                      </div>
                                                </div>
                                          </td>
                                          <td>
                                                {recipe.ingredients.map((r,index)=><ul key={r.index}>
                                                      <li>{index+1}. {r}</li>

                                                </ul>)}
                                          </td>
                                          <td>
                                                <p >{recipe.cooking_method.slice(0,40)}...</p>
                                          </td>
                                          <th>
                                                {recipe.rating}
                                          </th>
                                          <th>
                                               <button><AiOutlineHeart className=' hover:text-red-500' size={35}></AiOutlineHeart></button>
                                          </th>
                                    </tr>)}


                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default ChefRecipesTable;