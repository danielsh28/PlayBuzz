import React from 'react';
import {SummaryProps} from "../components/BuzzTypes";



export const  SummaryPage :React.FC<SummaryProps> = ({description}) =>{
    return(
        <div>
            <h1>Summery</h1>
            <p className="textResult">
                {description}
            </p>
        </div>
    )
}