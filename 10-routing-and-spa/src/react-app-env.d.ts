/// <reference types="react-scripts" />

interface ICategory {
  id: string;
  name: string;
  image: string;
  desc: string;
}

interface IAPICategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface IAPICategories {
  categories: IAPICategory[];
}

interface ICatalog {
  catalog: ICategory[];
}

interface IAPICategoryMeals {
  meals: IAPICategory[];
}

interface IAPIMeals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface ICategoryMeals {
  meals: IMeals[];
}

interface IMeals {
  name: string;
  image: string;
  id: string;
}

interface IAPIRecipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: boolean;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
}
