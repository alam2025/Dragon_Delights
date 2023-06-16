import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
      return (
            <div className=" flex flex-col shadow-md border rounded-md justify-center items-center">
                  <LazyLoad height={400} width={400} threshold={0.95}>
                        <figure><img className='w-[400px] h-[300px] rounded-md' src={chef.pictureUrl} alt="Shoes" /></figure>
                  </LazyLoad>
                  <div className="card-body text-start">
                        <h2 className="card-title">{chef.chefName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Experiences : {chef.yearsOfExperience}</p>
                        <p>Recipes : {chef.numRecipes}</p>
                        <p>Likes : {chef.likes}</p>

                  </div>
                  <div className="mt-auto mb-3  justify-center items-center">
                        <Link to={`/chefInfo/${chef.id}`}> <button className="btn btn-secondary">View Recipes</button></Link>
                  </div>
            </div>
      );
};

export default ChefCard;