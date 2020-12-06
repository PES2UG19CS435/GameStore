import { LIBRARY_ADD_ITEM,LIBRARY_REMOVE_ITEM } from "../constants/libraryConstants";

function libraryReducer(state={libraryItems:[]},action){
    switch(action.type){
        case LIBRARY_ADD_ITEM:
            const item =action.payload;
            const GamePlay=state.libraryItems.find(x=>x.GamePlay===item.GamePlay);
            if(GamePlay){
                return{libraryItems:
                    state.libraryItems.map(x=>x.GamePlay===GamePlay.GamePlay?item:x)};
            }
            return{libraryItems:[...state.libraryItems,item]};
            case LIBRARY_REMOVE_ITEM:
                return{libraryItems:state.libraryItems.filter(x=>x.GamePlay!==action.payload)}
            default:
                return state;
    }
}
export{libraryReducer};