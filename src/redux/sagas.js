import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from './actions';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* saga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default saga;
