
import { combineReducers } from 'redux';
import blogs from './blog-reducer';
import portfolios from './portfolio-reducer';

const reducer = combineReducers({
    blogs,
    portfolios
});

export default reducer;