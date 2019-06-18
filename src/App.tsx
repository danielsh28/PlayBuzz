import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import OpeningPage from './pages/OpeningPage'
import Questionnaire from "./pages/Questionnaire";


const App: React.FC = () => {

 return  (
    <div className="App">
        <Switch>
    <Route path={'/'} component={OpeningPage}/>
    <Route path={'/playbuzz'} component={Questionnaire}/>
        </Switch>

    </div>
  );
}

export default App;
