import { GET_CATEGORIES, GET_CATEGORIES_FAILED, GET_CATEGORIES_SUCCESS } from "./consts"

export const initGetCategories = () => {
  return {
    type: GET_CATEGORIES
  }
}

export const initGetCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export const initGetCategoriesFailed = (errorCategories) => {
  return {
    type: GET_CATEGORIES_FAILED,
    errorCategories
  }
}
