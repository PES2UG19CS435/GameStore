import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToLibrary,removeFromLibrary } from '../actions/libraryActions';
import {Link} from 'react-router-dom';
function LibraryScreen(props){
    const library = useSelector(state => state.library);
    const { libraryItems } = library;

    const GamePlayId=props.match.params.id;
    const se=props.location.search?Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromLibraryHandler=(GamePlayId)=>{
      dispatch(removeFromLibrary(GamePlayId));
    }
    useEffect(()=>{
        if(GamePlayId){
            dispatch(addToLibrary(GamePlayId,se));
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
            libraryItems.length ==0?
            <div>
                No Games
            </div>
            :
            libraryItems.map( item =>
                <div>
                        <img className="library-image"src={item.image} alt="GamePlay"></img>
                  <div className="library-name">
                    <div className="item-name">
                      <Link to={"/GamePlay/"+item.GamePlay}>
                        Name:{item.name}
                        </Link>
                    </div>
                    <div>
                        Se:
                        <select value={item.se} onChange={(e)=>dispatch(addToLibrary(item.GamePlay,e.target.value))}className="dropdown">
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
                          <button type="button" className="button" onClick={()=>removeFromLibraryHandler(item.GamePlay)}>
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
              Subtotal ({libraryItems.reduce((a) => a+1, 0)} items)
              :
              ${libraryItems.reduce((a, c) => a + c.price , 0)}
              </h3>
              <div>
               {libraryItems.reduce((a, c) => a + c.price , 0)>0? libraryItems.reduce((a) => a+1, 0)>0 && < button onClick={priceHandler}className="button full-width" disabled={libraryItems === 0}>
              Proceed To buy
            </button>:libraryItems.reduce((a) => a+1, 0)>0 && < button onClick={checkoutHandler}className="button full-width" disabled={libraryItems === 0}>
              Click to Download
            </button>}
            </div>
    </div>
    
</div>
}

export default LibraryScreen;