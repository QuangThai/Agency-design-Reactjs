import * as types from '../actions/ActionTypes';

const initialState = {
   isLoading: true,
   currentBlog: [],
}

const blogs = (state = initialState, action) => {
   switch (action.type) {
      case types.FETCH_BLOGS:
         return {
            ...state,
            isLoading: true
         }
      case types.FETCH_BLOGS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            currentBlog: action.payload
         }
      default:
         return state
   }
}
export default blogs;