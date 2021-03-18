import { put, call, takeEvery } from 'redux-saga/effects'
import { getCategories } from '../lib/api'
import { GET_CATEGORIES, GET_CATEGORIES_FAILED, GET_CATEGORIES_SUCCESS } from '../views/ExtraServices/consts'
import { IS_LOADER_ACTIVE } from './consts'


function* initSaga() {
  yield put({ type: IS_LOADER_ACTIVE, isLoading: true })
  try {
    const res = yield call(getCategories)
    const data = yield res?.data?.data
    console.log('RES', data)
    const dataArr =  []
    yield data?.map(item => dataArr.push({ ...item, isChecked: false, isExpanded: false }))
    yield put({ type: GET_CATEGORIES_SUCCESS, categories: [...dataArr] })
    yield put({ type: IS_LOADER_ACTIVE, isLoading: false })
  } catch (error) {
      yield put({ type: GET_CATEGORIES_FAILED, categoriesError: error })
      yield put({ type: IS_LOADER_ACTIVE, isLoading: false })
  }
}

export function* watchInitSaga() {
  yield takeEvery(GET_CATEGORIES, initSaga)
}