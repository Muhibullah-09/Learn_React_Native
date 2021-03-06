import axios from 'axios';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from './postTypes'

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    axios
      // .get('https://jsonplaceholder.typicode.com/posts')
      .get('https://restcountries.eu/rest/v2/all')
      // .get('https://mocki.io/v1/aac8b81a-139c-4235-82e6-0dbadf33f2b7')
      .then(response => {
        // response.data is the POSTS
        const posts = response.data
        dispatch(fetchPostsSuccess(posts))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchPostsFailure(error.message))
      })
  }
}

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}
