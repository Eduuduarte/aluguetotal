import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    buttonT: {
        backgroundColor: '#000',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 700,
        borderRadius: '32px',
        border: '1px solid #FFF',
        padding: '8px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        },
    },
    buttonB: {
        background: '#FFF',
        color: '#000',
        fontSize: '18px',
        fontWeight: 700,
        borderRadius: '32px',
        border: '1px solid #000',
        padding: '8px',
        marginTop: '12px',

        '&:hover': {
            background: 'rgba(255, 255, 255, 0.9)'
        }
    }
})