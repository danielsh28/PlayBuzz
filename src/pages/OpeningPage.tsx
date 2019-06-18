import React from 'react';
import {Link} from "react-router-dom";

const OpenPage :React.FC =  ()=>{

    return(
        <div>
            Welcome, Want to Find out if you Can be a Parent? click
            <Link to={'/playbuzz'}>Here</Link>
        </div>
    )

}

export default OpenPage;