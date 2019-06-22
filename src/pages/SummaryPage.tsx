import React from 'react';
import {PlayBuzzQuestion, SummaryProps} from "../components/BuzzTypes";
import {connect} from 'react-redux';
import {Dispatch,} from "redux";


export const  SummaryPage :React.FC<SummaryProps> = ({description}) =>{
    return(
        <div>
            <h1>Summery</h1>
            <p className="textResult">
                {description}
            </p>
        </div>
    )
}