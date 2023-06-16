import React, { useState } from 'react';
import SectionTitle from '../pages/Shared/SectionTitle';
import { AiOutlineHeart } from "react-icons/ai";
import { addToDb } from '../utilities/fakedb';
import Swal from 'sweetalert2';
const ChefRecipesTable = ({ recipes }) => {
      const [isDisabled, setIsDisabled] = useState(false);
      const handleAdd = (recipe) => {
            addToDb(recipe.id)
            console.log(recipe);
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your work has been saved',
                  showConfirmButton: false,
                  timer: 1500
            })
            setIsDisabled(true)
      }
      return (
            <div className=' mb-24 my-container'>
                  <SectionTitle title={'Recipes'}></SectionTitle>


                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr className=' text-xl bg-slate-300'>
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
                                    {recipes.map((recipe, index) => <tr key={index}>
                                          <th>
                                                {index + 1}
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
                                                {recipe.ingredients.map((r, index) => <ul key={r.index}>
                                                      <li>{index + 1}. {r}</li>

                                                </ul>)}
                                          </td>
                                          <td>
                                                <p >{recipe.cooking_method.slice(0, 40)}...</p>
                                          </td>
                                          <th>
                                                {recipe.rating}
                                          </th>
                                          <th>
                                                <button disabled={isDisabled} onClick={() => handleAdd(recipe)}><AiOutlineHeart className=' hover:text-red-500' size={35}></AiOutlineHeart></button>
                                          </th>
                                    </tr>)}


                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default ChefRecipesTable;