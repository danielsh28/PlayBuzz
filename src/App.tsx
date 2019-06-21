import React from 'react';
import './App.css';
import {Route} from "react-router";
import OpeningPage from './pages/OpeningPage'
import Questionnaire from "./pages/Questionnaire";


const App: React.FC = () => {

    return (
    <div className="App">
     <Route  exact path={'/'} component={OpeningPage}/>
     <Route path={'/playbuzz'} component={Questionnaire}/>
    </div>
  );
}

export default App;
