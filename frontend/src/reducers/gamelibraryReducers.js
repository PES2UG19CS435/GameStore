import { GAMELIBRARY_ADD_ITEM,GAMELIBRARY_REMOVE_ITEM } from "../constants/gamelibraryConstants";

function gamelibraryReducer(state={gamelibraryItems:[]},action){
    switch(action.type){
        case GAMELIBRARY_ADD_ITEM:
            const item =action.payload;
            const Freegame=state.gamelibraryItems.find(x=>x.Freegame===item.Freegame);
            if(Freegame){
                return{gamelibraryItems:
                    state.gamelibraryItems.map(x=>x.Freegame===Freegame.Freegame?item:x)};
            }
            return{gamelibraryItems:[...state.gamelibraryItems,item]};
            case GAMELIBRARY_REMOVE_ITEM:
                return{gamelibraryItems:state.gamelibraryItems.filter(x=>x.Freegame!==action.payload)}
            default:
                return state;
    }
}
export{gamelibraryReducer};