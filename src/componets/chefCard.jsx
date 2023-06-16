import React from 'react';

const ChefCard = ({ chef }) => {
      return (
            <div className=" flex flex-col shadow-md border rounded-md justify-center items-center">
                  <figure><img className='w-[400px] h-[300px] rounded-md' src={chef.pictureUrl} alt="Shoes" /></figure>
                  <div className="card-body text-start">
                        <h2 className="card-title">{chef.chefName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Experiences : {chef.yearsOfExperience}</p>
                        <p>Recipes : {chef.numRecipes}</p>
                        <p>Likes : {chef.likes}</p>

                  </div>
                  <div className="mt-auto mb-3  justify-center items-center">
                        <button className="btn btn-secondary">View Recipes</button>
                  </div>
            </div>
      );
};

export default ChefCard;