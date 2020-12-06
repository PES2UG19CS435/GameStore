import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToLibrary,removeFromLibrary } from '../actions/gamelibraryActions';
import {Link} from 'react-router-dom';
function GameLibraryScreen(props){
    const gamelibrary = useSelector(state => state.gamelibrary);
    const { gamelibraryItems } = gamelibrary;

    const FreegameId=props.match.params.id;
    const se=props.location.search?Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromLibraryHandler=(FreegameId)=>{
      dispatch(removeFromLibrary(FreegameId));
    }
    useEffect(()=>{
        if(FreegameId){
            dispatch(addToLibrary(FreegameId,se));
        }
    },[]);
    const checkoutHandler=()=>{
      props.history.push("/signin?redirect=downloading");
    }
    const priceHandler=()=>{
      props.history.push("/payment");
    }
    return <div className="library">
    <div className="library-list">
        <ul className="library-list-container">
          <li>
            <h3>
              User Library 
            </h3>
          </li>
          {
            gamelibraryItems.length ==0?
            <div>
                No Games
            </div>
            :
            gamelibraryItems.map( item =>
                <div>
                        <img className="library-image"src={item.image} alt="GamePlay"></img>
                  <div className="library-name">
                    <div className="item-name">
                      <Link to={"/Freegame/"+item.Freegame}>
                        Name:{item.name}
                        </Link>
                    </div>
                    <div>
                        Se:
                        <select value={item.se} onChange={(e)=>dispatch(addToLibrary(item.Freegame,e.target.value))}className="dropdown">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                  </div>
                  <div>
                   Price:${item.price}
                  </div>
                  <div>
                          <button type="button" className="button" onClick={()=>removeFromLibraryHandler(item.Freegame)}>
                          Remove Item
                          </button>
                        </div>
                        <div className="decor">
                      <Link to={"/"}>
                        Go Home
                        </Link>
                    </div>
                </div>
                
                )
          }

        </ul>
    </div>
    <div className="library-action">
          <h3>
              Subtotal ({gamelibraryItems.reduce((a) => a+1, 0)} items)
              :
              ${gamelibraryItems.reduce((a, c) => a + c.price , 0)}
              </h3>
              <div>
               {gamelibraryItems.reduce((a, c) => a + c.price , 0)>0? gamelibraryItems.reduce((a) => a+1, 0)>0 && < button onClick={priceHandler}className="button full-width" disabled={gamelibraryItems === 0}>
              Proceed To buy
            </button>:gamelibraryItems.reduce((a) => a+1, 0)>0 && < button onClick={checkoutHandler}className="button full-width" disabled={gamelibraryItems === 0}>
              Click to Download
            </button>}
            </div>
    </div>
    
</div>
}

export default GameLibraryScreen;