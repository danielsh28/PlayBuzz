import React from 'react';
import {BuzzResult, RESULTS, SummaryProps} from "../components/BuzzTypes";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export const  SummaryPage :React.FC<SummaryProps> = ({score,resetQuiz}) =>{

    function getResult() :string {
        const results : Array<BuzzResult> = [...RESULTS].reverse();

        const resultElement : BuzzResult | undefined  = results.find(r=> score >= r.minScore);
        if (!resultElement){
            throw {message:'score is not value for result!'};
        }

        return resultElement.result

    }

    function resetBuzzQuiz() {
        resetQuiz();
    }
    return(
        <div>
            <h1>Summary</h1>
            <p className="textResult">
                {getResult()}
            </p>
            <button onClick={resetBuzzQuiz}>RESET QUIZ</button>
        </div>
    )
}

const mapStateToProps = (state:any)=>   {

    return{
        score: state.score.currScore
    }
}
const mapDispatchToProps = (dispatch:Dispatch)=>({
  resetQuiz :() => dispatch({type:'RESET'})

})
export default connect(mapStateToProps,mapDispatchToProps)(SummaryPage);