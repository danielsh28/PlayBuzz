import {PageMode} from "./components/BuzzTypes";
import {func} from "prop-types";
import {combineReducers, createStore, Reducer} from "redux";

interface Action {
    type: string,
    payload:any

}
const initPageState= {
    page: PageMode.start,
    questionIndex : -1,
};



const pageReducer= ( state =initPageState  ,action : Action) => {
    switch (action.type) {

        case 'START_OVER':
            return {...initPageState};

        case 'NEXT_QUESTION':
            return  {...state,
                questionIndex : state.questionIndex + action.payload};

        case  'VIEW_CHANGE':
            return{page: action.payload,
                questionIndex: state.page === PageMode.start ? 0: -1};
        default:
                return state;
    }
}

export function  configureStore(){
    const reducer  : Reducer = combineReducers( {pages : pageReducer});
    return createStore(reducer);
}
