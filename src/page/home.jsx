import React from "react";
import RecipesCard from "../components/RecipesCard";
import Navbar from "../components/navbar";

function Home() {
return (
<>
    <Navbar />
    <section className="bg-red min-w-full min-h-screen">
        <div className="content-center flex flex-col justify-center py-10 px-5 gap-5 md:gap-7 md:px-8">
            {/* title */}
            <h1 data-aos="zoom-in" data-aos-duration="2000"
                className="text-cream font-bold text-5xl text-center uppercase tracking-wide lg:text-7xl">
                Recipes
            </h1>
            {/* desc */}
            <p data-aos="zoom-in-up" data-aos-duration="3000"
                className="text-cream font-light text-center text-sm mb-[2rem] tracking-wide  sm:px-12 sm:text-base md:font-normal md:text-xl md:px-24   md:mb-16 lg:font-medium  lg:px-40 lg:font- xl:px-80">
                Explore a treasure trove of culinary delights with FoodieFaves' recipe categories, bringing you a world
                of
                mouthwatering dishes to savor and enjoy.
            </p>

            {/* list */}
            <RecipesCard data-aos="fade-up" data-aos-duration="3000" />
        </div>
    </section>
</>

);
}

export default Home;