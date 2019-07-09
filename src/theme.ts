import {createMuiTheme, Theme} from '@material-ui/core/styles';
import {lightBlue, red} from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export const theme  :Theme= createMuiTheme({
    palette:{
        primary:lightBlue,
        secondary:red,
        error: red,
    }

});

