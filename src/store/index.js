import { createStore, combineReducers, applyMiddleware  } from 'redux';
import userReducer from "./Reducers/userReducer";
import apiUserReducer from "./Reducers/apiUserReducer";
import thunk from 'redux-thunk';
const rootReducers = combineReducers({
    users:userReducer,
    api:apiUserReducer
})
const store = createStore(rootReducers,applyMiddleware(thunk));
export default store