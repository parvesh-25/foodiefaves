

import React, { useEffect, useState } from 'react';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { getMealListByCategory } from '../utils/data';
import DetailMeal from '../page/DetailMeal';


function CategoryCard({ categoryName }) {
    const [meals, setMeals] = useState([]);
    // useLocation = hook yar untuk mendapatkan informasi tentang lokasi saat ini (URL dan state) di dalam komponen. Dalam kode tersebut, useLocation digunakan untuk mendapatkan objek location yang berisi informasi tentang URL dan state dari halaman yang sedang dilihat.
    const location = useLocation();
    const navigate = useNavigate();
    const navigateToDetail = (idMeal) => {
      navigate('/detail', { state: { idMeal } });
    }

    // location disimpan di strCategory, strcategory ini digunakan sebagai param dari url kedua
    const strCategory = location.state?.strCategory;
  
    useEffect(() => {
      fetchData();
    }, [strCategory]);
  
    const fetchData = async () => {
      if (strCategory) {
        const data = await getMealListByCategory(strCategory);
        setMeals(data);
      }
    };

  return (
    <div className="flex flex-wrap">
      {meals.map((meal) => (
        
        
          <Link 
          key={meal.idMeal} 
          to={`/detail`}
          onClick={()=>{
            navigateToDetail(meal.idMeal)
          }}
           className="cardWithOverlay items-end justify-center flex md:w-1/2 xl:w-1/3">
            <img id="mealImage" src={meal.strMealThumb} alt={meal.strMeal} className="w-screen object-cover sm:h-96 lg:h-auto" />
            <h3 id="mealTitle" className="absolute m-6 text-cream font-semibold text-2xl text-center md:text-[28px]">
              {meal.strMeal}
            </h3>
          </Link>
      ))}
    </div>
  );
}

export default CategoryCard;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getMealListByCategory } from '../utils/data';

// function CategoryCard({ categoryName }) {
//   const [meals, setMeals] = React.useState([]);
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     fetchData();
//   }, [categoryName]);

//   const fetchData = async () => {
//     const data = await getMealListByCategory(categoryName);
//     setMeals(data);
//   };

//   const navigateToDetail = (idMeal) => {
//     navigate('/detail', { state: { idMeal } });
//   };

//   return (
//     <div className="flex flex-wrap">
//       {meals.map((meal) => (
//         <Link
//           key={meal.idMeal}
//           to={`/detail`}
//           onClick={() => navigateToDetail(meal.idMeal)}
//           className="cardWithOverlay items-end justify-center flex md:w-1/2 xl:w-1/3"
//         >
//           {/* Render meal card */}
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default CategoryCard;
