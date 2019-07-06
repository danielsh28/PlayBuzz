import {createMuiTheme, Theme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {lightBlue, red} from "@material-ui/core/colors";


const theme  :Theme= createMuiTheme({
    palette:{
        primary:lightBlue,
        secondary:blue,
        error: red,
    }

});

export  default theme;