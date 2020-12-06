import{TOPGAMES_LIST_REQUEST,TOPGAMES_LIST_SUCCESS,TOPGAMES_LIST_FAIL,GAMEPLAY_DETAILS_REQUEST,
GAMEPLAY_DETAILS_SUCCESS,GAMEPLAY_DETAILS_FAIL} from "../constants/TopGamesConstants";
function TopGamesListReducer(state={Categories:[]},action){
    switch (action.type){
        case TOPGAMES_LIST_REQUEST:
            return{loading:true};
        case TOPGAMES_LIST_SUCCESS:
            return{loading:false,Categories:action.payload};
        case TOPGAMES_LIST_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state; 
    }
}
function GamePlayDetailsReducer(state={GamePlay:{}},action){
    switch (action.type){
        case GAMEPLAY_DETAILS_REQUEST:
            return{loading:true};
        case GAMEPLAY_DETAILS_SUCCESS:
            return{loading:false,GamePlay:action.payload};
        case GAMEPLAY_DETAILS_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state; 
    }
}
export{TopGamesListReducer,GamePlayDetailsReducer}