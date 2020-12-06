import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import{useDispatch,useSelector} from 'react-redux';
import{details} from '../actions/bordActions'

function DetailsScreen(props) {
    const[cardno,setCardno]=useState('');
    const[pin,setPin]=useState('');
    const[cvv,setCvv]=useState('');
    const bordDetails =useSelector(state=>state.bordDetails);
    const{loading,bordInfo,error}=bordDetails;
  
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
    dispatch(details(cardno,pin,cvv));
}
return<div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Save Details</h2>
            </li>
            <li>
                {loading &&<div>Loading..</div>}
                {error &&<div>{error}</div>}
            </li>
            <li>
                <label htmlfor="cardno">
                    Card-no
                </label>
                <input type="cardno"name="cardno"id="cardno"onChange={(f)=>setCardno(f.target.value)}>
                </input>
            </li>
            <li>
                <label htmlfor="pin">
                    Otp
                </label>
                <input type="pin"name="pin"id="pin"onChange={(f)=>setPin(f.target.value)}>
                </input>
            </li>
            <li>
                <label htmlfor="cvv">CVV</label>
                <input type="cvv"id="cvv"name="cvv" onChange={(f)=>setCvv(f.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button">Enter to save</button>
                <li className="new-button">
                    Already have a saved Card<Link to="/payment"className= "button">Sign in</Link>
                </li>
            </li>
        </ul>
    </form>
</div>
} 
export default DetailsScreen;