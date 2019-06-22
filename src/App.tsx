import React from 'react';
import './App.css';
import {Route} from "react-router";
import OpeningPage from './pages/OpeningPage'
import Questionnaire from "./pages/Questionnaire";
import {SummaryPage} from "./pages/SummaryPage";
import {connect} from "react-redux";


const App: React.FC<{isLast:boolean}>= ({isLast}) => {


    return (
    <div className="App">
        <switch>
     <Route   path={'/'} component={OpeningPage}/>
     <Route path={'/playbuzz'} component={Questionnaire}/>
     isLast && <Route path={'/summary'} component={SummaryPage}/>
        </switch>
    </div>
  );
}
connect((state:any)=>({}))

export default App;
