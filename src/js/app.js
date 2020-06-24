import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';

import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {NotFound} from "./components/NotFound";
import {Login} from "./components/Login";
import {Register} from "./components/Register";


const App = () => {

    const [logged,setLogged] = useState(true);  //true for test, CHANGE TO false

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    return <HashRouter>
        <>
            <Header userLogged={logged}/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={() => <Login eventlogUser={logUser} /> } />
                <Route path='/register' component={Register} />
                <Route path='*' component={NotFound} />
            </Switch>

        </>
    </HashRouter>

}



ReactDOM.render(<App/>, document.getElementById("app"));