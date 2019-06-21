import React from 'react';
import {PlayBuzzQuestion} from "../components/BuzzTypes";
import {connect} from 'react-redux';
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

const mapStateToProps = (state :any) =>{
    console.log(state.question);
    return {question: state.questions.question,};
};
const mapDispatchToProps = (dispatch:Dispatch)=> ({
    nextQuest : () => dispatch({type:'NEXT_QUESTION'})
});

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
