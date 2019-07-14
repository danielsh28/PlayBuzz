import React from 'react';
import {PlayBuzzQuestion} from "../components/BuzzTypes";
import {connect} from 'react-redux';
import {Dispatch,} from "redux";
import {RouteComponentProps} from "react-router";
import { Link as RouteLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {Theme, Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/styles';
import {useStyles} from "../theme";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

interface PlayBuzzProps {
    goToNextQuest:Function,
    question:PlayBuzzQuestion,
    calculateResultAndGoToSummary: Function,
    isLast: boolean

}
interface  matchParams {
    questNum:string

}
const  Questionnaire : React.FC<PlayBuzzProps & RouteComponentProps<matchParams>> =
    ({match,question,goToNextQuest,calculateResultAndGoToSummary})=>{
    const theme :Theme = useTheme();
    const questNum = parseInt(match.params.questNum);
    const classes = useStyles();
        function  submitAnswer(currScore: number){
        if(question.isLast){
            calculateResultAndGoToSummary(currScore)
        }
        else {
            goToNextQuest(currScore);
        }

    }
    const options = question.options.map( (a : string,index) =>(
        <Grid item xs={10} >
            <Link   component={RouteLink} to={`/playbuzz/${questNum + 1}`}>
                <Paper   className={classes.root} key={index} onClick={submitAnswer.bind(null, index + 1)}>
                    {a}</Paper >
            </Link>
        </Grid>));
    return(
        <Container style={{backgroundColor:theme.palette.primary.main}}>
        <Typography color= 'primary' >{question.text}</Typography>
        <Grid  color='blue' container alignItems='center'  spacing={3} direction ='column' >
            {options}
        </Grid>
        </Container>
    )
};

const mapStateToProps = (state :any) =>{
    return {question: state.questions.question,};
};
const mapDispatchToProps = (dispatch:Dispatch)=> ({
    goToNextQuest :(score:number) => dispatch({type:'NEXT_QUESTION',payload:score}),
    calculateResultAndGoToSummary: (score:number) => dispatch({type: 'LAST_QUESTION_SUBMITTED', payload:score})});

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);
