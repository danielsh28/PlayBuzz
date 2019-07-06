import React from 'react';
import {PlayBuzzQuestion} from "../components/BuzzTypes";
import {connect} from 'react-redux';
import {Dispatch,} from "redux";
import {RouteComponentProps} from "react-router";
import ListItem from '@material-ui/core/ListItem'
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
interface PlayBuzzProps {
    question:PlayBuzzQuestion,
    goToNextQuest:Function,
    calculateResultAndGoToSummary: Function,
    isLast: boolean

}
interface  matchParams {
    questNum:string

}
const  Questionnaire : React.FC<PlayBuzzProps & RouteComponentProps<matchParams>> = ({match,question,goToNextQuest,isLast,calculateResultAndGoToSummary})=>{
    const questNum = parseInt(match.params.questNum);

    function  submitAnswer(currScore: number){
        if(question.isLast){
            calculateResultAndGoToSummary(currScore)
        }
        else {
            goToNextQuest(currScore);
        }
    }
    const answers  = question.options.map( (a : string,index) =>
        <Link to={`/playbuzz/${questNum + 1}`}>
            <ListItem  color='secondary' key={index} onClick={submitAnswer.bind(null,index + 1)}>{a}</ListItem>
        </Link>);
    return (
        <div>
            <Typography color= 'primary' >{question.text}</Typography>
            <GridList>
                {answers}
            </GridList>
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
