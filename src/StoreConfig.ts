import {PlayBuzzQuestion, BUZZ_QUESTIONS, QuestionState} from "./components/BuzzTypes";
import {combineReducers, createStore, Reducer} from "redux";


interface Action {
    type: string,
    payload:any

}


 const initQuestionState :QuestionState = {
    question :  BUZZ_QUESTIONS[0],
     questionIndex :0
 }
const questionReducer =   (state : QuestionState = initQuestionState,action :Action){
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





export function  configureStore(){
    const reducer  : Reducer = combineReducers( {questions : questionReducer});
    return createStore(reducer);
}
