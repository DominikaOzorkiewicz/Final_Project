import React from 'react';
import ReactDOM from "react-dom";
import '../scss/main.scss';
import {LandingPage} from "./components/LandingPage";

const App = () => {

    return (
        <>

            <LandingPage/>

        </>
    );

}



ReactDOM.render(<App/>, document.getElementById("app"));