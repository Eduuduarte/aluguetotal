import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    appBar: {
        backgroundColor: "#000000",
        position: 'relative',
    },
    title: {
        fontSize: '32px',
        fontWeight: 700, 
        lineHeight: "56.32px"
    },

    buttonNav: {
        color: '#FFF',
        fontSize: 18,
        fontweight: 500,
        textTransform: 'none'
    },

    buttonT: {
        backgroundColor: 'transparent',
        background: 'trasparent',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 700,
        borderRadius: '32px',
        border: '1px solid #FFF',
        padding: '12px',
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
        border: '1px solid #FFF',
        padding: '12px',
        marginLeft: '16px',

        '&:hover': {
            background: 'rgba(255, 255, 255, 0.9)'
        }
    }
})