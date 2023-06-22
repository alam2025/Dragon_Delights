import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const PopularRecipeCard = ({ recipe }) => {
      const { food_image, name, rating, cooking_method, id
      } = recipe;

      return (
            <div className=' border shadow rounded-md mx-20 sm:mx-4'>
                  <LazyLoad threshold={0.90}>
                        <img src={food_image} alt="" className=' rounded-md w-full mx-auto transition-transform duration-300 transform-gpu hover:scale-110 duration-1000' />
                  </LazyLoad>
                  <div className=' px-4'>
                        <h1 className=' text-2xl font-semibold'>{name}</h1>
                        <p><span className='  font-semibold'>Cooking Method : </span> <br />{cooking_method.slice(0, 80)}... <Link to={`/recipe/${id}`} className=' text-rose-500'>See More</Link></p>
                        <p>{rating}</p>
                  </div>

            </div>
      );
};

export default PopularRecipeCard;