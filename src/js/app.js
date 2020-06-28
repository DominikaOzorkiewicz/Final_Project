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

//constructor for function
const useSingleton = (initializer) => {
    React.useState(initializer)
}



const App = () => {

    const [logged,setLogged] = useState(false);  //true for test, CHANGE TO false
    const [animalsList, setAnimalsList] = useState([]);
    //const [dogsList, setDogsList] = useState([]);
    //const [catsList, setCatsList] = useState([]);

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    // constructor - call only once to connect with database(Firebase)
    useSingleton(() => {
        console.log('To powinno się pojawić ino roz');
        let app = Firebase.initializeApp(firebaseConfig);

        {
            let ref = app.database().ref('Animals/');
            let allCats = [];
            ref.on('value', snapshot => {

                snapshot.forEach(snap => {
                    allCats.push(snap.val());
                });
            });

            console.log(allCats);
            setAnimalsList(allCats);
        }


        //{
        //             let ref = app.database().ref('Cats/');
        //             let allCats = [];
        //             ref.on('value', snapshot => {
        //
        //                 snapshot.forEach(snap => {
        //                     allCats.push(snap.val());
        //                 });
        //             });
        //
        //             console.log(allCats);
        //             setCatsList(allCats);
        //         }
        //
        //         {
        //             let ref = app.database().ref('Dogs/');
        //             let allCats = [];
        //             ref.on('value', snapshot => {
        //
        //                 snapshot.forEach(snap => {
        //                     allCats.push(snap.val());
        //                 });
        //             });
        //
        //             console.log(allCats);
        //             setDogsList(allCats);
        //         }

    });

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
                <Route path='/catList' component={() => <AnimalsList animalType='cat' animalList={animalsList} />} />
                <Route path='/dogList' component={() => <AnimalsList animalType='dog' animalList={animalsList}/>}  />
                <Route path='/card/:animalID' component={AnimalSingleCard} />

                <Route path='*' component={NotFound} />
            </Switch>

            {/* <Footer/> */}
        </>
    </HashRouter>

}


ReactDOM.render(<App/>, document.getElementById("app"));