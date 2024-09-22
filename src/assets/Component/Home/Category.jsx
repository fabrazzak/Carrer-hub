import React, { useEffect, useState } from 'react';
import Categore from './Categore';

const Category = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])



    return (
        <div className='container mx-auto  my-10'>

            <div className='my-10 flex flex-col justify-center text-center gap-7'>
                <h2 className='text-4xl font-bold mt-6 '>Job Category List {categories.length}</h2>
                <p className='text-xl '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4 gap-8">
                {
                    categories.map(category => <Categore category={category} key={category.id}></Categore>)
                }
            </div>


            
        </div>
    );
};

export default Category;