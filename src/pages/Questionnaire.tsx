import React from 'react';
import {PlayBuzzQuestion,QuestionState} from "../components/BuzzTypes";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const  Questionnaire : React.FC<QProps> = ({question})=>{

    const answers :JSX.Element[] = question.options.map( a=> <li>{a}</li>);
    return (
        <div>
        <h1>{question.text}</h1>
            <ul>
                {answers}
            </ul>
        </div>

    )
}



export default Questionnaire;