import { INCREAMENT, DECREAMENT, SET_DIFF} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    data : "0"
}

const restAPI = (state = initState, action) => {
    switch(action.type){
        case SEARCHED_STOCK_ITEMS : 
            return Object.assign({}, state, {
                data : "test"
            });
            default:
                return state;
    }
}

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const restAPIApp = combineReducers({
    restAPI,
    extra
});

export default restAPIApp;