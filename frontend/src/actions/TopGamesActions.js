
import { TOPGAMES_LIST_REQUEST,TOPGAMES_LIST_SUCCESS,TOPGAMES_LIST_FAIL,
    GAMEPLAY_DETAILS_SUCCESS,GAMEPLAY_DETAILS_REQUEST,GAMEPLAY_DETAILS_FAIL } from "../constants/TopGamesConstants";
import axios from 'axios';

const listCategories=()=> async (dispatch)=>{
    try{
    dispatch({type:TOPGAMES_LIST_REQUEST});
    const{data}=await axios.get("/api/Categories");
    dispatch({type:TOPGAMES_LIST_SUCCESS,payload:data});
}
catch(error){
    dispatch({type:TOPGAMES_LIST_FAIL,payload:error.message});   
    }
}


const detailsGamePlay =(GamePlayId)=> async (dispatch)=>{
    try{
        dispatch({type:GAMEPLAY_DETAILS_REQUEST,payload:GamePlayId});
        const {data}= await axios.get("/api/Categories/" + GamePlayId);
        dispatch({type:GAMEPLAY_DETAILS_SUCCESS,payload:data});
    } 
    catch(error){
        dispatch({type:GAMEPLAY_DETAILS_FAIL,payload:error.message});

    }
}

export{listCategories,detailsGamePlay}