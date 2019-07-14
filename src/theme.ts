import {createMuiTheme, Theme} from '@material-ui/core/styles';
import {lightBlue, orange, red} from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createSpacing from "@material-ui/core/styles/createSpacing";


export const useStyles = makeStyles(theme=> ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: theme.spacing(1),
        textAlign:'center',
        width:400
    },
    container:{
        height: 500,
        backgroundColor: 'light-blue'
    }
}));

export const theme :Theme = createMuiTheme({
    palette:{
        primary:{
            main:'#99aa00'
        },
        secondary:red,
        background:{
          default:'#F8BBD0',
        }
    }

});

