import React from 'react';

const ChefBanner = ({chef}) => {
      // console.log(chef);
      return (
            <div className=' flex flex-col md:flex-row gap-10  px-[5%] md:px-[10%] bg-slate-200 py-10 justify-center items-center bg-opacity-50'>
                  <img src={chef.pictureUrl} alt="" />
                  <div>
                        <h3 className=' text-2xl font-semibold'>{chef.chefName}</h3>
                        <p><span className=' text-lg '>Total recipes :</span> {chef.numRecipes}</p>
                        <p><span className=' text-lg '>Experiences :</span> {chef.yearsOfExperience}</p>
                        <p><span className=' text-lg '>Likes :</span> {chef.likes}</p>
                        <p><span className=' text-lg '>Bio :</span> {chef.bio}</p>
                  </div>
            </div>
      );
};

export default ChefBanner;