import React from 'react';
import {PlayBuzzQuestion} from "../components/BuzzTypes";
import {connect} from 'react-redux';
import {Dispatch,} from "redux";
import {RouteComponentProps} from "react-router";
import { Link as RouteLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {Typography} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import {useStyles} from "../theme";

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
    const classes = useStyles();
    const answers  = question.options.map( (a : string,index) =>
        <Grid item xs>
       <Link   component={RouteLink} to={`/playbuzz/${questNum + 1}`}>
            <Typography className={classes.root}  key={index} onClick={submitAnswer.bind(null, index + 1)}>
                {a}</Typography >
        </Link>
        </Grid>);
    return (
        <Container>
        <Typography color= 'primary' >{question.text}</Typography>

        <Grid container direction ='column' spacing={5} >

            {answers}
        </Grid>
        </Container>
    )
}

const mapStateToProps = (state :any) =>{
    return {question: state.questions.question,};
};
const mapDispatchToProps = (dispatch:Dispatch)=> ({
    goToNextQuest :(score:number) => dispatch({type:'NEXT_QUESTION',payload:score}),
    calculateResultAndGoToSummary: (score:number) => dispatch({type: 'LAST_QUESTION_SUBMITTED', payload:score})});

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
