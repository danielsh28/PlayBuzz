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
    function  submitAnswer(){
        if(question.isLast){
            calculateResultAndGoToSummary()
        }
        else {
            goToNextQuest(question.isLast);
        }
    }
    const answers  = question.options.map( (a : string) => <li
    onClick={submitAnswer}>{a}</li>);
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
    goToNextQuest :() => dispatch({type:'NEXT_QUESTION'}),
    calculateResultAndGoToSummary: () => dispatch({type:'LAST_QUESTION_SUBMITTED'})

});

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
