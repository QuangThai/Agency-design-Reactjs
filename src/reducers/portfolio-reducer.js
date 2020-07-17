import * as types from '../actions/ActionTypes';

const initialState = {
   isLoading: true,
   currentPortfolio : []
}

const portfolios = (state = initialState, action) => {
   switch (action.type) {
      case types.FETCH_PORTFOLIO:
         return {
            ...state,
            isLoading: true
         }
      case types.FETCH_PORTFOLIO_SUCCESS:
         return {
            ...state,
            isLoading: false,
            currentPortfolio: action.payload
         }
      default:
         return state
   }
}
export default portfolios;