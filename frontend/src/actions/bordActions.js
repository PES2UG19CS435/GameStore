import Axios from "axios";
import Cookie from "js-cookie";
import{
    BORD_PAYMENT_REQUEST,BORD_PAYMENT_SUCCESS,BORD_PAYMENT_FAIL,BORD_DETAILS_REQUEST,
    BORD_DETAILS_SUCCESS,BORD_DETAILS_FAIL} from "../constants/bordConstants"

const payment=(cardno,pin)=>async (dispatch)=>{
    dispatch({type:BORD_PAYMENT_REQUEST,payload:{cardno,pin}});
    try{
        const{data}=await Axios.post("/api/bords/payment",{cardno,pin});
        dispatch({type:BORD_PAYMENT_SUCCESS,payload:data});
        Cookie.set('bordInfo',JSON.stringify(data));
    } catch(error){
        dispatch({type:BORD_PAYMENT_FAIL,payload:error.message});
    }
}
const details=(cardno,pin,cvv)=>async (dispatch)=>{
    dispatch({type:BORD_DETAILS_REQUEST,payload:{cardno,pin,cvv}});
    try{
        const{data}=await Axios.post("/api/bords/details",{cardno,pin,cvv});
        dispatch({type:BORD_DETAILS_SUCCESS,payload:data});
        Cookie.set('bordInfo',JSON.stringify(data));
    } catch(error){
        dispatch({type:BORD_DETAILS_FAIL,payload:error.message});
    }
}
export{payment,details};