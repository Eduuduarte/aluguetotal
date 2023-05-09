import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    box: {
        paddingBottom: '20px',
        borderBottom: '1px solid #DDDDDD'
    },
    boxQuestion: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        transitionTimingFunction: 'ease-in'
    },
    question: {
        fontSize: '22px',
        fontWeight: 400,
        color: '#222222'
    },
    answer: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#222222'
    }
})