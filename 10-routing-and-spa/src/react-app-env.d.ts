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

const MapCategory = (source: IAPICategory): ICategory => {
  return {
    id: source.idCategory,
    name: source.strCategory,
    image: source.strCategoryThumb,
    desc: source.strCategoryDescription,
  };
};
