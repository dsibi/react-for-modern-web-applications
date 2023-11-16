export const MapCategory = (source: IAPICategory): ICategory => {
  return {
    id: source.idCategory,
    name: source.strCategory,
    image: source.strCategoryThumb,
    desc: source.strCategoryDescription,
  };
};
