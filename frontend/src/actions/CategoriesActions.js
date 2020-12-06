import { TOPFREE_LIST_REQUEST,TOPFREE_LIST_SUCCESS,TOPFREE_LIST_FAIL,
    FREEGAME_DETAILS_SUCCESS,FREEGAME_DETAILS_REQUEST,FREEGAME_DETAILS_FAIL} from "../constants/CategoriesConstants";
import axios from 'axios';

const listFreegames=()=> async (dispatch)=>{
    try{
    dispatch({type:TOPFREE_LIST_REQUEST});
    const{data}=await axios.get("/api/Freegames");
    dispatch({type:TOPFREE_LIST_SUCCESS,payload:data});
}
catch(error){
    dispatch({type:TOPFREE_LIST_FAIL,payload:error.message});   
    }
}


const detailsFreegame =(FreegameId)=> async (dispatch)=>{
    try{
        dispatch({type:FREEGAME_DETAILS_REQUEST,payload:FreegameId});
        const {data}= await axios.get("/api/Freegames/" + FreegameId);
        dispatch({type:FREEGAME_DETAILS_SUCCESS,payload:data});
    } 
    catch(error){
        dispatch({type:FREEGAME_DETAILS_FAIL,payload:error.message});

    }
}


export{listFreegames,detailsFreegame}