import Axios from "axios";
import{LIBRARY_ADD_ITEM,LIBRARY_REMOVE_ITEM}from "../constants/libraryConstants";
import Cookie from "js-cookie";

const addToLibrary=(GamePlayId,se)=>async (dispatch,getState)=>{
    try{
        const {data}=await Axios.get("/api/Categories/"+GamePlayId);
        dispatch({type:LIBRARY_ADD_ITEM,payload:{
            GamePlay:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            se
        }});
        const {library:{libraryItems}}=getState();
        Cookie.set("libraryItems",JSON.stringify(libraryItems));
    } catch (error){

    }
}
const removeFromLibrary=(GamePlayId)=>(dispatch,getState)=>{
    dispatch({type:LIBRARY_REMOVE_ITEM,payload:GamePlayId});
    
    const {library:{libraryItems}}=getState();
    Cookie.set("libraryItems",JSON.stringify(libraryItems));
}
export{addToLibrary,removeFromLibrary};