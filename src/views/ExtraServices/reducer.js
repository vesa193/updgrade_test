import { GET_CATEGORIES_FAILED, GET_CATEGORIES_SUCCESS, SET_EXTRA_PROP } from "./consts"

const initialState = {
  categories: null,
  errorCategories: null
}

function extraServicesReducer(state = initialState, action) {
  const { type } = action
	switch (type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      }
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        errorCategories: action.errorCategories
      }
    case SET_EXTRA_PROP:
      return {
        ...state,
        [action.key]: action.value
      }

	default:
		return state
	}
}

export default extraServicesReducer