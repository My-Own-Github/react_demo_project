import { combineReducers } from 'redux';
import SharedReducer from '../app/duck/reducer'


const appReducer = combineReducers({
  shared: SharedReducer
});

export const RootReducer = (state, action) => {   
    // Clear all data in redux store to initial.
    if(action.type === 'CLEAR_SESSION')
       state = undefined;
    
    return appReducer(state, action);
 };

