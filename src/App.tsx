import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import OpeningPage from './pages/OpeningPage'
import Questionnaire from "./pages/Questionnaire";
import SummaryPage from "./pages/SummaryPage";
import {connect} from "react-redux";
import {PageMode} from "./StoreConfig";

interface AppProps {
    isLast: boolean,
    isReset: boolean
}

const App: React.FC<AppProps> = ({isLast, isReset}) => {


    return (
        <div className="App">
            <Switch>
                <Route path={'/playbuzz/:questNum'} component={Questionnaire}/>
                {!isReset && <Route path={'/summary'} component={SummaryPage}/>}
                <Route path={'/'} component={OpeningPage}/>
            </Switch>
            {isReset && <Redirect to={'/'}/>}
            {isLast && <Redirect to={'/summary'}/>}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isLast: state.pages.page === PageMode.SUMMARY,
    isReset: state.pages.page === PageMode.OPENING
});


export default connect(mapStateToProps, null)(App);
