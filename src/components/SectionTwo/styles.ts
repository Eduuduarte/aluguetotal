import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '333px',
        padding: '15px'
    },
    titleBox: {
        fontSize: '41px',
    },
    subTitleBox: {
        fontSize: '16px',
        whiteSpace: 'pre-wrap',
        textAlign: 'center'
    }
});