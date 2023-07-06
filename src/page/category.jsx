import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import CategoryCard from '../components/CategoryCard';

function Category(){
return (
<>
    <Navbar />
    <section class="bg-red min-w-full min-h-screen">
        <div class=" w-screen content-center flex flex-col justify-center   py-10  gap-9">
            {/* title */}
            <h1 data-aos="fade-down" data-aos-duration="1000"
                class="text-cream font-semibold text-5xl text-center  tracking-wide leading-relaxed">Meal Recipes</h1>
            {/* recipe list */}

            <div data-aos="fade-up" data-aos-duration="3000" id="mealList" class="flex  w-screen flex-wrap">
            <CategoryCard  />
                            </div>

        </div>
    </section>
</>
)
}
export default Category;