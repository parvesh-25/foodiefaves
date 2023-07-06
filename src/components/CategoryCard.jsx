// import React, { useEffect, useState } from 'react';
// import { getMealListByCategory } from '../utils/data';

// function CategoryCard({ categoryName }) {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, [categoryName]);

//   const fetchData = async () => {
//     const data = await getMealListByCategory(categoryName);
//     setMeals(data);
//   };

//   return (
//     <div className="flex flex-wrap">
//       {meals.map((meal) => (
        
//           <a key={meal.idMeal}  id="mealCard" href={`/view/meal-detail.html?meal=${meal.idMeal}`} className="cardWithOverlay items-end justify-center flex md:w-1/2 xl:w-1/3">
//             <img id="mealImage" src={meal.strMealThumb} alt={meal.strMeal} className="w-screen object-cover sm:h-96 lg:h-auto" />
//             <h3 id="mealTitle" className="absolute m-6 text-cream font-semibold text-2xl text-center md:text-[28px]">
//               {meal.strMeal}
//             </h3>
//           </a>

//       ))}
//     </div>
//   );
// }

// export default CategoryCard;

import React, { useEffect, useState } from 'react';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { getMealListByCategory } from '../utils/data';
import DetailMeal from '../page/DetailMeal';


function CategoryCard({ categoryName }) {
    const [meals, setMeals] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
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
          onClick={()=>{navigate(DetailMeal)
            
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
