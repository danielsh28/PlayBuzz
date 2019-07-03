import React from 'react';
import {Link, RouteComponentProps} from "react-router-dom";

const OpenPage :React.FC<RouteComponentProps> = ({match})=>{

    return(
        <div>
            Welcome, Want to Find out if you Can be a Parent? click
            <Link to={`/playbuzz/1`}>Here</Link>
        </div>
    )

}

export default OpenPage;