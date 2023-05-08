import { AppBar, Box, Button, Typography  } from "@mui/material"
import Link from "next/link"

import { useStyles } from "./styles";


export const Header = () => {

    const classes = useStyles();

    const handleCadastrar = () => {
        
    }

    const handleEntrar = () => {

    }

    return (
        <>
            <AppBar component="nav" className={classes.appBar}>
                <Box>
                    <Typography component="h5" variant="h5" className={classes.title}>AlugueTotal</Typography>
                </Box>
                <Box sx={{ fontSize: '18px', fontWeight: '500' }}>
                    <Link href="/"><Button className={classes.buttonNav}>Como Trabalhamos</Button></Link>
                    <Link href="/"><Button className={classes.buttonNav}>Imóveis</Button></Link>
                    <Link href="/"><Button className={classes.buttonNav}>FAQ</Button></Link>
                    <Link href="/"><Button className={classes.buttonNav}>Blog</Button></Link>
                    <Link href="/"><Button className={classes.buttonNav}>Sobre</Button></Link>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'space-between' }}>
                    <Button onClick={handleCadastrar} className={classes.buttonT}>Cadastre-se já</Button>
                    <Button onClick={handleEntrar} className={classes.buttonB}>Entrar</Button>
                </Box>
            </AppBar>
        </>
    )
}