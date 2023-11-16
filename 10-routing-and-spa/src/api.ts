import { API_URL } from "./config";

const getMealByID = async (mealID: string) => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealID}`);
  return await response.json();
};

const getAllCategories = async (): Promise<IAPICategories> => {
  const response = await fetch(`${API_URL}categories.php`);

  return await response.json();
};

const getFilteredCategory = async (categoryName: string) => {
  const response = await fetch(`${API_URL}filter.php?c=${categoryName}`);
  return await response.json();
};

export { getMealByID, getAllCategories, getFilteredCategory };
