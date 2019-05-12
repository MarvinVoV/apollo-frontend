import {combineReducers} from 'redux';
import articleReducer from './ArticleReducer';


const rootReducer = combineReducers({
    article: articleReducer
});

export default rootReducer;