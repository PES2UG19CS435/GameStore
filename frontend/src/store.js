import{createStore,combineReducers,applyMiddleware,compose} from 'redux';
import{TopGamesListReducer,GamePlayDetailsReducer} from './reducers/TopGamesReducers';
import Cookie from 'js-cookie';
import{libraryReducer}from'./reducers/libraryReducers';
import{gamelibraryReducer}from'./reducers/gamelibraryReducers';
import{userSigninReducer,userRegisterReducer}from'./reducers/userReducers';
import{bordPaymentReducer,bordDetailsReducer}from'./reducers/bordReducers';
import{TopFreeListReducer,FreegameDetailsReducer}from'./reducers/CategoriesReducers'
import thunk from 'redux-thunk';

const libraryItems=Cookie.getJSON("libraryItems")|| [];
const userInfo=Cookie.getJSON("userInfo")|| null;
const bordInfo=Cookie.getJSON("bordInfo")|| null;
const gamelibraryItems=Cookie.getJSON("gamelibraryItems")|| []

const initialState={library:{libraryItems},userSignin:{userInfo},bordPayment:{bordInfo},gamelibrary:{gamelibraryItems}};
const reducer=combineReducers({
    TopGamesList:TopGamesListReducer,
    GamePlayDetails:GamePlayDetailsReducer,
    library:libraryReducer,
    userSignin:userSigninReducer,
    userRegister: userRegisterReducer,
    bordPayment:bordPaymentReducer,
    bordDetails:bordDetailsReducer,
    TopFreeList:TopFreeListReducer,
    FreegameDetails:FreegameDetailsReducer,
    gamelibrary:gamelibraryReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;