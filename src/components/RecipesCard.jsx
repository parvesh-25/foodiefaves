
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


import { getRecipeList } from '../utils/data'

function RecipesCard() {
const [categories, setCategories] = useState([]);
// 
const navigate = useNavigate();

// fungsi navigateToCategory untuk melakukan navigasi ke halaman /category dengan menyertakan strCategory sebagai state. Dalam hal ini, strCategory berasal dari properti category.strCategory yang diberikan pada saat card kategori diklik di komponen RecipesCard.
const navigateToCategory = (strCategory) => {
  navigate('/category', { state: { strCategory } });
};


useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const data = await getRecipeList();
setCategories(data);
};

return (
<div className="flex flex-wrap">
  {categories.map((category) => (

<div key={category.strCategory} className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
    <Link
      to={`/category`}
      className="bg-cream py-6 flex flex-col justify-between items-center rounded-xl"
      onClick={() => navigateToCategory(category.strCategory)}
    >
      <h3 className="listTitle text-xl font-semibold text-center mb-8 sm:mb-10 md:text-2xl md:mb-14 lg:mb-16 xl:mb-24">{category.strCategory}</h3>
      <img className="p-2 rounded-xl md:rounded-2xl" src={category.strCategoryThumb} alt={category.strCategory} />
    </Link>
  </div>
  ))}
</div>
);
}
export default RecipesCard;