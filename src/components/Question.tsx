import {PlayBuzzQuestion, BUZZ_QUESTIONS, QuestionState} from './BuzzTypes'
import * as React from "react";
import {connect} from 'react-redux';

interface QProps {
    questNum:number,
    isLast : boolean,
    question :PlayBuzzQuestion
}
const Question :React.FC<QProps> = ( {question})=>{


    const answersList = question.options.map((option,i)=>{
    return  <li key={i}>
        <label >
            <span>{option}</span>
        </label>
        </li>
    });


return (
    <div>
        <h1>{question.text}</h1>
        <ol>
        {answersList}
        </ol>
    </div>

)
}


const mapStateToProps = (state :QuestionState) => ({
        question: state.question
    })
;

connect(mapStateToProps,null)(Question);

