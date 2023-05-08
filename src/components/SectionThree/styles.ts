import { makeStyles } from '@material-ui/core/styles';
import { Hi_Melody } from 'next/font/google';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    boxSection: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '145px'
    },
    boxDialog: {
        display: 'flex',
        height: '160px'
    },
    boxDialogCircle: {
        backgroundColor: '#FFF',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        fontSize: '24px'
    },
    boxDialogText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '20px',
        height: '160px'
    },
    boxDialogTitle: {
        fontSize: '36px',
        fontWeight: 700,
        color: '#FFF',
    },
    boxDialogSubTitle: {
        fontSize: '20px',
        fontWeight: 400,
        color: '#FFF',
        width: '330px',
        marginTop: '24px'
    },
    button: {
        backgroundColor: '#FFF',
        color: '#000',
        borderRadius: '32px',
        padding: '13px 35px',
        marginBottom: '170px',
        fontSize: '18px',
        fontWeight: 500,
    }
});