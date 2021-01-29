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
import {UserProfile} from "./components/UserProfile";
import Firebase from 'firebase';
import firebaseConfig from "./services/firebase";
import {AnimalsList} from "./components/AnimalsList";
import {AnimalSingleCard} from "./components/AnimalSingleCard";


const App = () => {
    const [logged,setLogged] = useState(false);

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    // Set active user and info about in local storage
    const [loggedUser, setLoggedUser] = useState(() => {
        // Check if any user is logged
        if (localStorage.getItem('ActiveUser') !== null) {
            setLogged(true);
            return JSON.parse(localStorage.getItem('ActiveUser'));

        } else {return ''}
    });

    const setCurrentUser = (user) => {
        setLoggedUser(user);
    }

    const [animalsList, setAnimalsList] = useState( () => {
        // Connect with database(Firebase)
        let app = Firebase.initializeApp(firebaseConfig);

        /*
        app.auth().signInWithEmailAndPassword(email, password)
            .then(function(result) {
                console.log('auth  działa');// result.user.tenantId should be ‘TENANT_PROJECT_ID’.
            }).catch(function(error) {
            console.log('auth nie działa');// Handle error.

        });
        */

        {
            let ref = app.database().ref('Animals/');
            let allAnimals = [];

            ref.once('value', snapshot => {
                snapshot.forEach(snap => {
                    allAnimals.push(snap.val());
                });
                // Set animals to local storage as string
                localStorage.setItem('Animals', JSON.stringify(allAnimals));
            });
            return allAnimals;
        }
    });

    const [sheltersList, setSheltersList] = useState( () => {
        // Get info about shelters from database(Firebase)
        {
            let ref = Firebase.database().ref('shelter/');
            let shelters = [];

            ref.once('value', snapshot => {
                snapshot.forEach(snap => {
                    shelters.push(snap.val());
                });
            });
            return shelters;
        }
    });


    return (
        <HashRouter>
            <>
                <Header userLogged={logged} eventlogUser={logUser}/>

                <Switch>
                    <Route exact path='/' component={() => <Home userLogged={logged} /> } />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={() => <Contact sheltersList={sheltersList} />}  />
                    <Route path='/login' component={() => <Login eventlogUser={logUser} eventCurrentUser={setCurrentUser} /> } />
                    <Route path='/register' component={Register} />
                    <Route path='/userprofile' component={() => <UserProfile user={loggedUser} animalList={animalsList} /> } />
                    <Route path='/catList' component={() => <AnimalsList animalType='cat' animalList={animalsList}  sheltersList={sheltersList} />} />
                    <Route path='/dogList' component={() => <AnimalsList animalType='dog' animalList={animalsList} sheltersList={sheltersList} />}  />
                    <Route path='/card/:animalID' component={() => <AnimalSingleCard user={loggedUser} animalList={animalsList} sheltersList={sheltersList} />} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </>
        </HashRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));