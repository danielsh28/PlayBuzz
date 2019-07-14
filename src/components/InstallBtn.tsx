import React, {FC} from 'react';
import {Button} from "@material-ui/core";
import {deferredPrompt} from "../index";

const  InstallBtn : FC = () => {

    function installOnHomePage(){
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
            .then((choiceResult:any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
            });
    };

    return(
        <Button variant={"contained"} color = 'primary' onClick={installOnHomePage}>Install On HomePage</Button>
    )
};

export default InstallBtn;