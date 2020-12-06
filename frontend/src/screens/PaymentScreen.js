import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import{useDispatch,useSelector} from 'react-redux';
import{payment} from '../actions/bordActions'

function PaymentScreen(props) {
    const[cardno,setCardno]=useState('');
    const[pin,setPin]=useState('');
    const bordPayment =useSelector(state=>state.bordPayment);
    const{loading,bordInfo,error}=bordPayment;
  
    const dispatch=useDispatch();
    useEffect(()=>{
        if(bordInfo){
            props.history.push("/signin");
        }
        return()=>{
            //
        };
    },[bordInfo]);
   


const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(payment(cardno,pin));
}
return<div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Payment-info</h2>
            </li>
            <li>
                {loading &&<div>Loading..</div>}
                {error &&<div>{error}</div>}
            </li>
            <li>
                <label htmlfor="cardno">
                    Card-no
                </label>
                <input type="cardno"name="cardno"id="cardno"onChange={(e)=>setCardno(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlfor="pin">Enter-Otp</label>
                <input type="pin"id="pin"name="pin" onChange={(e)=>setPin(e.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button">Proceed To Pay</button>
                <li>
                    Not have saved details??
                </li>
                <li className="new-button">
                    <Link to="/details" className= "button">Click To save card </Link>
                </li>
            </li>
        </ul>
    </form>
</div>
} 
export default PaymentScreen;