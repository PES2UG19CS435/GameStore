
import './App.css';
import React from"react";
import{BrowserRouter,Route,Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TopGamesScreen from './screens/TopGamesScreen';
import GamePlayScreen from './screens/GamePlayScreen';
import LibraryScreen from './screens/LibraryScreen';
import GameLibraryScreen from './screens/GameLibraryScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from'./screens/RegisterScreen';
import DownloadingScreen from"./screens/DownloadingScreen";
import PaymentScreen from"./screens/PaymentScreen";
import DetailsScreen from"./screens/DetailsScreen";
import TopFreeScreen from"./screens/TopFreeScreen";
import FreegameScreen from"./screens/FreegameScreen.js";
import { useSelector } from 'react-redux';


function App(){ 
const userSignin=useSelector(state=>state.userSignin);
const{userInfo}=userSignin;
  const openMenu= () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/TopGames/:id">Razor Games</Link>
                  </div>
                  <div className="header-links">
                  <Link to="/library">User Library</Link>
                      {
                        userInfo && userInfo.name
                      }
                  </div>
              </header>
              <aside className="sidebar">
                <ul>
                  <h3>More on Razor</h3>
                  <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                      <li>
                          <Link to="/moregames">Click for More Games</Link>
                      </li>
                  </ul>
              </aside>
              <main className="main">
                  <div className="content">
                  <Route path="/gamelibrary/:id" component={GameLibraryScreen}/>
                  <Route path="/Freegame/:id" component={FreegameScreen}/>
                  <Route path="/moregames" component={TopFreeScreen}/>
                  <Route path="/details" component={DetailsScreen}/>
                  <Route path="/payment" component={PaymentScreen}/>
                  <Route path="/downloading" component={DownloadingScreen}/>
                    <Route path="/signin" component={SigninScreen}/>
                    <Route path="/register" component={RegisterScreen}/>
                    <Route path="/library/:id?" component={LibraryScreen}/>
                    <Route path="/TopGames/:id" component={TopGamesScreen}/>
                    <Route path="/GamePlay/:id" component={GamePlayScreen}/>
                    <Route path="/" exact={true} component={HomeScreen}/>
                  </div>
              </main>
              <footer className="footer">
                  All Right Reserved
              </footer>
          </div>
    </BrowserRouter>      
  );
}


export default App;

