import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    title: {
       fontSize: '60px',
       fontWeight: 700,
       color: '#000000',
       marginTop: '120px'
    },
    boxBenefits: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px',
        marginTop: '64px'
    },
    button: {
        marginTop: '64px',
        marginBottom: '160px',
        backgroundColor: '#000',
        borderRadius: '50px',
        fontSize: '18px',
        fontWeight: 700,
        color: '#FFF',
        padding: '13px 34px',

        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        }
    },
    titleQuestion: {
        fontSize: '44px',
        fontWeight: 600,
        color: '#222222'
    }
})