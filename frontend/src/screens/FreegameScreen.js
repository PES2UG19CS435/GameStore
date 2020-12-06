import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import{useDispatch,useSelector} from 'react-redux';
import{detailsFreegame} from '../actions/CategoriesActions';

function FreegameScreen(props) {
    const [se,setSe]=useState(1);
    const FreegameDetails=useSelector(state=>state.FreegameDetails);
    const{Freegame,loading,error}=FreegameDetails;
    const dispatch=useDispatch(props.match.params.id);
    useEffect(()=>{
        dispatch(detailsFreegame(props.match.params.id));
        return()=>{
            //
        };
    },[]);
    const handleAddToLibrary=()=>{
        props.history.push("/gamelibrary/"+ props.match.params.id+'?se='+se);
    };



    return <div>
        <div className="decor">
            <Link to="/">GO HOME</Link>
        </div>
        {loading?<div>Loading...</div>:
        error?<div>{error}</div>:
        (
           
        <div className="details">
            <div className="details-video">
                <video width="850px" height="500"  controls>
                    <source src={Freegame.video} type="video/mp4"></source>
                </video>
            </div>
            <div className="details-name">
                <dl>
                    <dd>{Freegame.name}</dd>
                </dl>
            </div>    
            <div className="details-info">
                <ul>
                    <li>
                        Description:
                        <div>
                            {Freegame.description}
                        </div>
                    </li>
                    <li>
                       <br/> Reviews:
                        <div>
                        {Freegame.reviews1}
                        </div>
                        <div>
                        <br/> {Freegame.reviews2}
                        </div>
                        <div>
                        <br/>  {Freegame.reviews3}
                        </div>
                        <div>
                         <br/>   {Freegame.reviews4}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price:${Freegame.price}
                    </li>
                    <li>
                        Status:{Freegame.countInStock > 0? "Available for download":"Unavailable" }
                    </li>
                    <li>
                        Se: <select className="dropdown"value={se} onChange={(e) => {setSe(e.target.value)}}>
                            {[...Array(Freegame.countInStock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>
                            )}
                        </select>
                    </li>
                    <li>
                        {Freegame.countInStock>0 && <button onClick={handleAddToLibrary} className="button">Add to Library</button>}
                    </li>
                </ul>
            </div>
        </div>
        )
        }
    </div>
}
export default FreegameScreen;