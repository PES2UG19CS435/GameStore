import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import{useDispatch,useSelector} from 'react-redux';
import{detailsGamePlay} from '../actions/TopGamesActions';

function GamePlayScreen(props) {
    const [se,setSe]=useState(1);
    const GamePlayDetails=useSelector(state=>state.GamePlayDetails);
    const{GamePlay,loading,error}=GamePlayDetails;
    const dispatch=useDispatch(props.match.params.id);
    useEffect(()=>{
        dispatch(detailsGamePlay(props.match.params.id));
        return()=>{
            //
        };
    },[]);
    const handleAddToLibrary=()=>{
        props.history.push("/library/"+ props.match.params.id+'?se='+se);
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
                    <source src={GamePlay.video} type="video/mp4"></source>
                </video>
            </div>
            <div className="details-name">
                <dl>
                    <dd>{GamePlay.name}</dd>
                </dl>
            </div>    
            <div className="details-info">
                <ul>
                    <li>
                        Description:
                        <div>
                            {GamePlay.description}
                        </div>
                    </li>
                    <li>
                    <br/>   Reviews:
                        <div>
                           {GamePlay.reviews1}
                        </div>
                        <div>
                         <br/>   {GamePlay.reviews2}
                        </div>
                        <div>
                         <br/>   {GamePlay.reviews3}
                        </div>
                        <div>
                         <br/>   {GamePlay.reviews4}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price:${GamePlay.price}
                    </li>
                    <li>
                        Status:{GamePlay.countInStock > 0? "Available for download":"Unavailable" }
                    </li>
                    <li>
                        Se: <select className="dropdown"value={se} onChange={(e) => {setSe(e.target.value)}}>
                            {[...Array(GamePlay.countInStock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>
                            )}
                        </select>
                    </li>
                    <li>
                        {GamePlay.countInStock>0 && <button onClick={handleAddToLibrary} className="button">Add to Library</button>}
                    </li>
                </ul>
            </div>
        </div>
        )
        }
    </div>
}
export default GamePlayScreen;