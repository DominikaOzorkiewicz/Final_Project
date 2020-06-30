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

//custom Hook declaration for initialize connect with database
const useSingleton = (initializer) => {
    React.useState(initializer)
}



const App = () => {

    const [logged,setLogged] = useState(true);  //true for test, CHANGE TO false
    const [animalsList, setAnimalsList] = useState([]);

    const logUser = (state) => {
        console.log(state);
        setLogged(state);
    }

    //inicjalizacja połączenia z bazą danych, musi być wykonana tylko raz, dlatego mieści się w 'konstruktorze'
    // constructor - call only once before anything else in the life-cycle of this component to connect with database(Firebase)
    useSingleton(() => {
        console.log('To powinno się pojawić ino roz');
        let app = Firebase.initializeApp(firebaseConfig);

        {
            let ref = app.database().ref('Animals/');
            let allAnimals = [];
            ref.on('value', snapshot => {

                snapshot.forEach(snap => {
                    allAnimals.push(snap.val());
                });
            });

            console.log(allAnimals);
            setAnimalsList(allAnimals);
        }

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
                <Route path='/card/:animalID' component={() => <AnimalSingleCard animalList={animalsList}/>} />

                <Route path='*' component={NotFound} />
            </Switch>

            {/* <Footer/> */}
        </>
    </HashRouter>

}


ReactDOM.render(<App/>, document.getElementById("app"));