
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

export interface IAPIResponse<T> {
    message: string
    payload: T
    translatedMessage: string
}

export interface CreateUserInput{
    names:string,
    email:string,
    phone:string,
    address:string,
    password:string
}
export interface LoginInput{
    email:string,
    password:string
}
export interface ForgotInput{
    email:string,
}
export interface VerfyOtpInput{
    email:string,
    otp:string
}
export interface ResentPasswordInput{
    email:string,
    otp:string,
    newPassword:string,
    confirmPassword:string
}


