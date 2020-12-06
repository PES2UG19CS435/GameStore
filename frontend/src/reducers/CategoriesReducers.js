import{TOPFREE_LIST_REQUEST,TOPFREE_LIST_SUCCESS,TOPFREE_LIST_FAIL,FREEGAME_DETAILS_REQUEST,
    FREEGAME_DETAILS_SUCCESS,FREEGAME_DETAILS_FAIL} from "../constants/CategoriesConstants";
    function TopFreeListReducer(state={Freegames:[]},action){
        switch (action.type){
            case TOPFREE_LIST_REQUEST:
                return{loading:true};
            case TOPFREE_LIST_SUCCESS:
                return{loading:false,Freegames:action.payload};
            case TOPFREE_LIST_FAIL:
                return{loading:false,error:action.payload}
            default:
                return state; 
        }
    }
    function FreegameDetailsReducer(state={Freegame:{}},action){
        switch (action.type){
            case FREEGAME_DETAILS_REQUEST:
                return{loading:true};
            case FREEGAME_DETAILS_SUCCESS:
                return{loading:false,Freegame:action.payload};
            case FREEGAME_DETAILS_FAIL:
                return{loading:false,error:action.payload}
            default:
                return state; 
        }
    }
    
    export{TopFreeListReducer,FreegameDetailsReducer}