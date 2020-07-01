import React, {useEffect, useState} from 'react';
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
import Firebase from 'firebase';
import firebaseConfig from "./services/config";
import {AnimalsList} from "./components/AnimalsList";
import {AnimalSingleCard} from "./components/AnimalSingleCard";



const App = () => {

    const [logged,setLogged] = useState(true);  //true for test, CHANGE TO false

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    const [animalsList, setAnimalsList] = useState( () => {
        //connect with database(Firebase)
        let app = Firebase.initializeApp(firebaseConfig);
        {
            let ref = app.database().ref('Animals/');
            let allAnimals = [];

            ref.on('value', snapshot => {
                snapshot.forEach(snap => {
                    allAnimals.push(snap.val());
                });
            });
            return allAnimals;
        }
    });

    const [sheltersList, setSheltersList] = useState( () => {
        //get info about shelters from database(Firebase)
        {
            let ref = Firebase.database().ref('shelter/');
            let shelters = [];

            ref.on('value', snapshot => {
                snapshot.forEach(snap => {
                    shelters.push(snap.val());
                });
            });
            console.log('schroniska');
            console.log(shelters);
            return shelters;
        }
    });



    return <HashRouter>
        <>
            <Header userLogged={logged} eventlogUser={logUser}/>

            <Switch>
                <Route exact path='/' component={() => <Home userLogged={logged} /> } />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={() => <Login eventlogUser={logUser} /> } />
                <Route path='/register' component={Register} />
                <Route path='/userpanel' component={UserPanel} />
                <Route path='/catList' component={() => <AnimalsList animalType='cat' animalList={animalsList}  sheltersList={sheltersList} />} />
                <Route path='/dogList' component={() => <AnimalsList animalType='dog' animalList={animalsList} sheltersList={sheltersList} />}  />
                <Route path='/card/:animalID' component={() => <AnimalSingleCard animalList={animalsList}/>} />

                <Route path='*' component={NotFound} />
            </Switch>

            {/* <Footer/> */}
        </>
    </HashRouter>

}


ReactDOM.render(<App/>, document.getElementById("app"));