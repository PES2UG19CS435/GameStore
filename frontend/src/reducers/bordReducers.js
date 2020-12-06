import{BORD_PAYMENT_REQUEST,BORD_PAYMENT_SUCCESS,BORD_PAYMENT_FAIL
,BORD_DETAILS_REQUEST,BORD_DETAILS_SUCCESS,BORD_DETAILS_FAIL} from "../constants/bordConstants"



function bordPaymentReducer(state={},action){
    switch(action.type){
        case BORD_PAYMENT_REQUEST:
            return{loading:true};
        case BORD_PAYMENT_SUCCESS:
            return{loading:false,bordInfo:action.payload};
        case BORD_PAYMENT_FAIL:
            return{loading:false,error:action.payload};
            default: return  state;
    }
}
function bordDetailsReducer(state={},action){
    switch(action.type){
        case BORD_DETAILS_REQUEST:
            return{loading:true};
        case BORD_DETAILS_SUCCESS:
            return{loading:false,bordInfo:action.payload};
        case BORD_DETAILS_FAIL:
            return{loading:false,error:action.payload};
            default: return  state;
    }
}
export{
    bordPaymentReducer,bordDetailsReducer
}
