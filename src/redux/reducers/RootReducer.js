import {combineReducers} from 'redux';
import homeReducer from './HomeReducer';


const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;