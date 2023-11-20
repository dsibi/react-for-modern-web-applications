export const MapCategory = (source: IAPICategory): ICategory => {
  return {
    id: source.idCategory,
    name: source.strCategory,
    image: source.strCategoryThumb,
    desc: source.strCategoryDescription,
  };
};

export const MapMeal = (source: IAPIMeals): IMeals => {
  return {
    id: source.idMeal,
    name: source.strMeal,
    image: source.strMealThumb,
  };
};
