import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';

import '../scss/main.scss';


import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {NotFound} from "./components/NotFound";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Footer} from "./components/Footer";
import {UserPanel} from "./components/UserPanel";


const App = () => {

    const [logged,setLogged] = useState(true);  //true for test, CHANGE TO false

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    return <HashRouter>
        <>
            <Header userLogged={logged} eventlogUser={logUser}/>

            <Switch>
                <Route exact path='/' component={() => <Home eventlogUser={logUser} /> } />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={() => <Login eventlogUser={logUser} /> } />
                <Route path='/register' component={Register} />
                <Route path='/userpanel' component={UserPanel} />
                <Route path='*' component={NotFound} />
            </Switch>

            {/* <Footer/> */}
        </>
    </HashRouter>

}



ReactDOM.render(<App/>, document.getElementById("app"));