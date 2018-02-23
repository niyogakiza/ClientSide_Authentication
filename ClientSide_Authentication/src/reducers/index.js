import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
    auth: authReducer,
     form  // means my form will be produced by reducer

});

export default rootReducer;
