import callAPI from '../api/CallAPI';
import * as types from './ActionTypes';

export const actFetchBlogsRequest = () => {
    return dispatch => {
        dispatch(actFetchBlogs());
        callAPI("blog", 'GET', null)
            .then(res => {
                dispatch(actFetchBlogsSuccess(res.data));
            });
    }
}

export const actFetchPortfoliosRequest = () => {
    return dispatch => {
        dispatch(actFetchPortfolio());
        callAPI("portfolio", 'GET', null)
            .then(res => {
                dispatch(actFetchPortfolioSuccess(res.data));
            });
    }
}

export const actFetchBlogs = () => {
    return {
        type: types.FETCH_BLOGS
    }
}

export const actFetchBlogsSuccess = (blogs) => {
    return {
        type: types.FETCH_BLOGS_SUCCESS,
        payload: blogs
    }
}


export const actFetchPortfolio = () => {
    return {
        type: types.FETCH_PORTFOLIO
    }
}

export const actFetchPortfolioSuccess = (portfolio) => {
    return {
        type: types.FETCH_PORTFOLIO_SUCCESS,
        payload: portfolio
    }
}
