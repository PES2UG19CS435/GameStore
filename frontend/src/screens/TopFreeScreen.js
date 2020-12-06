import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import{listFreegames} from '../actions/CategoriesActions';
function TopFreeScreen(props){
  const TopFreeList=useSelector(state=>state.TopFreeList);
  const{Freegames,loading,error}=TopFreeList;
  const dispatch=useDispatch()



  useEffect(()=> {
    dispatch(listFreegames());
    return()=> {
      //
    };
  },[])
    return loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
    <dl className="Categories">  
                        {
                          Freegames.map(Freegame =>
                               <dd key={Freegames._id}>
                                <div className="GamePlay">
                                  <Link to={'/Freegame/' + Freegame._id}>
                                    <img className="game-image" src={Freegame.image} alt="Apex Legends" />
                                  </Link>
                                  <div className="Game-name">{Freegame.name}</div>
                                  <div className="developers-name">{Freegame.developer}</div>
                                  <div className="price">${Freegame.price}</div>
                                  <div className="game-buy">
                                  <Link to="/payment">BUY</Link>
                                  </div>
                                  <div className="Ratings">{Freegame.ratings}</div>
                                </div>
                              </dd>)
                        }
                    </dl>
}
export default TopFreeScreen;