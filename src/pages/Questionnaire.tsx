import React from 'react';
import {PlayBuzzQuestion} from "../components/BuzzTypes";
import {connect} from 'react-redux';
import {Dispatch,} from "redux";
interface PlayBuzzProps {
    question:PlayBuzzQuestion,
    goToNextQuest:Function,
    calculateResultAndGoToSummary: Function,
    isLast: boolean

}
const  Questionnaire : React.FC<PlayBuzzProps> = ({question,goToNextQuest,isLast,calculateResultAndGoToSummary})=>{
    function  submitAnswer(currScore: number){
        if(question.isLast){
            calculateResultAndGoToSummary(currScore)
        }
        else {
            goToNextQuest(currScore);
        }
    }
    const answers  = question.options.map( (a : string,index) => <li key={index}
    onClick={submitAnswer.bind(null,index + 1)}>{a}</li>);
    return (
        <div>
        <h1>{question.text}</h1>
            <ul>
                {answers}
            </ul>
        </div>
    )
}

const mapStateToProps = (state :any) =>{
    return {question: state.questions.question,};
};
const mapDispatchToProps = (dispatch:Dispatch)=> ({
    goToNextQuest :(score:number) => dispatch({type:'NEXT_QUESTION',payload:score}),
    calculateResultAndGoToSummary: (score:number) => dispatch({type: 'LAST_QUESTION_SUBMITTED', payload:score})});

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
