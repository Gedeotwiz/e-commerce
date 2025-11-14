
export interface Category {
  _id: string;
  name: string;
  image: string;
  parentCategory: string | null;
  subcategories?: Category[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 export interface CategoryResponse {
  message: string;
  payload: Category[];
}