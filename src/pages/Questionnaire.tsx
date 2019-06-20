import React from 'react';
import {PlayBuzzQuestion,QuestionState} from "../components/BuzzTypes";
import {connect} from "react-redux";
import {Dispatch,} from "redux";
interface PlayBuzzProps {
    question:PlayBuzzQuestion,
    nextQuest:Function

}
const  Questionnaire : React.FC<PlayBuzzProps> = ({question,nextQuest})=>{
    function  submitAnswer(){
        nextQuest();
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

const mapStateToProps = (state:QuestionState) =>({
question: state.question
});
const mapDispatchToProps = (dispatch:Dispatch)=>{
    nextQuest : dispatch({type:'NEXT_QUESTION'});
}

connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
export default Questionnaire;