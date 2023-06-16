import React from 'react';

const SectionTitle = ({title,subTitle}) => {
      return (
            <div>
                  <p className=' text-xl text-violet-700'>{subTitle}</p>
                  <h1 className=' text-3xl font-bold uppercase'>{title}</h1>

            </div>
      );
};

export default SectionTitle;