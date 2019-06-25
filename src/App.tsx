import React from 'react';
import './App.css';
import {Route} from "react-router";
import OpeningPage from './pages/OpeningPage'
import Questionnaire from "./pages/Questionnaire";
import {SummaryPage} from "./pages/SummaryPage";
import {connect} from "react-redux";
import {PageMode} from "./StoreConfig";

interface AppProps{
    isLast:boolean
}
const App: React.FC<AppProps>= ({isLast}) => {


    return (
    <div className="App">
        <switch>
     <Route   path={'/'} component={OpeningPage}/>
     <Route path={'/playbuzz'} component={Questionnaire}/>
            {isLast} && <Route path={'/summary'} component={SummaryPage}/>
        </switch>
    </div>
  );
}

const mapStatetoProps = (state:any)=>({
    isLast: state.pages.page == PageMode.SUMMARY
});
export default connect(mapStatetoProps,null)(App);
