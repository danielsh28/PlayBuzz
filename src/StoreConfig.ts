import {PlayBuzzQuestion, BUZZ_QUESTIONS, QuestionState} from "./components/BuzzTypes";
import {combineReducers, createStore} from "redux";


interface PlaybuzzAction  {
    type: string,
    payload:PlayBuzzQuestion

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





export default function  configureStore(){
    return createStore(combineReducers( {questions : questionReducer}));
}
