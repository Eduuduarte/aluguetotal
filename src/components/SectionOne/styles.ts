import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url(Fundo.png)',
        height: 'auto'
    },
    main: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: "#FFF",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0 12px'
    },
    title: {
        color: '#FFF',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '120px'
    },
    subTitle: {
        color: '#FFF',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: '12px'
    },
    button: {
        margin: '48px 0',
        padding: '13px 34px',
        background: '#000',
        color: '#FFF',
        borderRadius: '50px'
    }
})