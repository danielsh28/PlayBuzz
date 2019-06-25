import {PlayBuzzQuestion, BUZZ_QUESTIONS, QuestionState} from "./components/BuzzTypes";
import {combineReducers, createStore} from "redux";

export enum PageMode{
    SUMMARY, QUIZ, OPENING
}

interface PlaybuzzAction  {
    type: string,
    payload:PlayBuzzQuestion

}

interface PageAction{
    type: string,
    payload: PageMode
}
interface PageState {
    page:PageMode

}


const initQuestionState :QuestionState = {
    question :  BUZZ_QUESTIONS[0],
    questionIndex :0
}
const questionReducer =   (state  = initQuestionState,action :PlaybuzzAction) =>{
    switch (action.type) {
        case 'NEXT_QUESTION':
            state = {
                question:BUZZ_QUESTIONS[++state.questionIndex],
                questionIndex:++state.questionIndex}
            break;
        default:
    }

    return state;
}
const initPageState :PageState = {
    page: PageMode.OPENING
}

const pageReducer = (state  :PageState= initPageState, action :PageAction,) =>{

    switch (action.type){
        case 'LAST_QUESTION_SUBMITTED':
            state = {...state,page:PageMode.SUMMARY}
    }

    return state;
}




export default function  configureStore(){
    return createStore(combineReducers(
        {questions : questionReducer,
            pages:pageReducer}));
}
