import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import{listCategories} from '../actions/TopGamesActions';
function TopGamesScreen(props){
  const TopGamesList=useSelector(state=>state.TopGamesList);
  const{Categories,loading,error}=TopGamesList;
  const dispatch=useDispatch()



  useEffect(()=> {
    dispatch(listCategories());
    return()=> {
      //
    };
  },[])
    return loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
    <dl className="Categories">  
                        {
                          Categories.map(GamePlay =>
                               <dd key={Categories._id}>
                                <div className="GamePlay">
                                  <Link to={'/GamePlay/' + GamePlay._id}>
                                    <img className="game-image" src={GamePlay.image} alt="Apex Legends" />
                                  </Link>
                                  <div className="Game-name">{GamePlay.name}</div>
                                  <div className="developers-name">{GamePlay.developer}</div>
                                  <div className="price">${GamePlay.price}</div>
                                  <div className="game-buy">
                                  <Link to="/payment">BUY</Link>
                                  </div>
                                  <div className="Ratings">{GamePlay.ratings}</div>
                                </div>
                              </dd>)
                        }
                    </dl>
}
export default TopGamesScreen;