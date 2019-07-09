import {PlayBuzzQuestion, BUZZ_QUESTIONS, QuestionState} from "./components/BuzzTypes";
import {combineReducers, createStore} from "redux";

export enum PageMode {
    SUMMARY, QUIZ, OPENING
}

interface PlaybuzzAction {
    type: string,
    payload: PlayBuzzQuestion

}

interface PageAction {
    type: string,
    payload: PageMode
}

interface PageState {
    page: PageMode,
}

interface ScoreState {
    currScore: number,

}

interface ScoreAction {
    type: String,
    payload: number
}

const initQuestionState: QuestionState = {
    question: BUZZ_QUESTIONS[0],
    questionIndex: 0
};
const initScoreState: ScoreState = {
    currScore: 0
};
const scoreReducer = (state: ScoreState = initScoreState, action: ScoreAction) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            state = {...state, currScore: state.currScore + action.payload};
            break;
        case 'LAST_QUESTION_SUBMITTED':
            state = {...state, currScore: state.currScore + action.payload};
            break;
        case 'RESET':
            state = initScoreState;
    }

    return state;
};
const questionReducer = (state = initQuestionState, action: PlaybuzzAction) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            state = {
                question: BUZZ_QUESTIONS[state.questionIndex + 1],
                questionIndex: state.questionIndex + 1
            };
            break;
        case 'RESET':
            state = initQuestionState;
    }

    return state;
};
const initPageState: PageState = {
    page: PageMode.OPENING
};

const pageReducer = (state: PageState = initPageState, action: PageAction,) => {

    switch (action.type) {
        case 'LAST_QUESTION_SUBMITTED':
            state = {...state, page: PageMode.SUMMARY};
            break;
        case 'RESET':
            state = initPageState;
    }


    return state;
};


export default function configureStore() {
    return createStore(combineReducers(
        {
            questions: questionReducer,
            pages: pageReducer,
            score: scoreReducer
        }));
}
