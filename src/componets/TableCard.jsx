import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import Swal from 'sweetalert2';
const TableCard = ({ recipe, index }) => {
      const [isDisabled, setIsDisabled] = useState(false)
      const savedCart = getShoppingCart();
      let matchItem;
      for (const id in savedCart) {
            if (recipe.id == id) {
                  matchItem = id;
            }
      }


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
            setIsDisabled(recipe)

      }
      return (
            <>
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
                        <button disabled={recipe.id == matchItem} onClick={() => {
                              handleAdd(recipe)
                        }

                        }><AiFillHeart className={`${recipe.id == matchItem ? ' text-slate-300' : 'hover:text-red-500'} `} size={35}></AiFillHeart></button>
                  </th>
            </>
      );
};

export default TableCard;