import React, { useState } from 'react';
import SectionTitle from '../pages/Shared/SectionTitle';

// import { addToDb } from '../utilities/fakedb';
// import Swal from 'sweetalert2';
import TableCard from './TableCard';
const ChefRecipesTable = ({ recipes }) => {
      // const [isDisabled, setIsDisabled] = useState(false);
     
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
                                          <th>Rating</th>
                                          <th>Add to CART</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {recipes.map((recipe, index) => <tr key={index}>

                                          <TableCard key={recipe.id} recipe={recipe} index={index} ></TableCard>
                                    </tr>)}


                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default ChefRecipesTable;