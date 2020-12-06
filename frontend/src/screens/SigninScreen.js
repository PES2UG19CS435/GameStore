import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import{useDispatch,useSelector} from 'react-redux';
import{signin} from '../actions/userActions'

function SigninScreen(props) {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const userSignin =useSelector(state=>state.userSignin);
    const{loading,userInfo,error}=userSignin;
  
    const dispatch=useDispatch();
    useEffect(()=>{
        if(userInfo){
            props.history.push("/downloading");
        }
        return()=>{
            //
        };
    },[userInfo]);
   


const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(signin(email,password));
}
return<div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Sign-In</h2>
            </li>
            <li>
                {loading &&<div>Loading..</div>}
                {error &&<div>{error}</div>}
            </li>
            <li>
                <label htmlfor="email">
                    Email
                </label>
                <input type="email"name="email"id="email"onChange={(e)=>setEmail(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlfor="password">Password</label>
                <input type="password"id="password"name="password" onChange={(e)=>setPassword(e.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button">Signin</button>
                <li>
                    New to RazorGames???
                </li>
                <li className="new-button">
                    <Link to="/register" className= "button">Click To Become a Razor Member!!</Link>
                </li>
            </li>
        </ul>
    </form>
</div>
} 
export default SigninScreen;