import axios from 'axios';

// best practice utk get api dgn try , catch

// Fetch recipe list
export const getRecipeList = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.data.categories;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fetch meal list by category
export const getMealListByCategory = async (categoryName) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    return response.data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};


// Fetch Detail Meal
export const getMealDetailById = async (mealId) => {
  try{
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    return response.data.meals;

  }catch(error){
    console.log(error);
    return [];
  }
}


// export const getMealListByCategory = async (categoryName) => {
//   try {
//     // const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
//     const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=beef`);
//     return response.data.meals;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };