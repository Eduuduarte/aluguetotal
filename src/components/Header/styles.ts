import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    appBar: {
        height: "82px", 
        backgroundColor: "#000000", 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '140px', 
        flexDirection: 'row'
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
            backgroundColor: '#FFF',
            color: '#000',
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
            background: 'transparent',
            color: '#FFF'
        }
    }
})