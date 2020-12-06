import Axios from "axios";
import{GAMELIBRARY_ADD_ITEM,GAMELIBRARY_REMOVE_ITEM}from "../constants/gamelibraryConstants";
import Cookie from "js-cookie";

const addToLibrary=(FreegameId,se)=>async (dispatch,getState)=>{
    try{
        const {data}=await Axios.get("/api/Freegames/"+FreegameId);
        dispatch({type:GAMELIBRARY_ADD_ITEM,payload:{
            Freegame:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            se
        }});
        const {gamelibrary:{gamelibraryItems}}=getState();
        Cookie.set("gamelibraryItems",JSON.stringify(gamelibraryItems));
    } catch (error){

    }
}
const removeFromLibrary=(FreegameId)=>(dispatch,getState)=>{
    dispatch({type:GAMELIBRARY_REMOVE_ITEM,payload:FreegameId});
    
    const {gamelibrary:{gamelibraryItems}}=getState();
    Cookie.set("gamelibraryItems",JSON.stringify(gamelibraryItems));
}
export{addToLibrary,removeFromLibrary};