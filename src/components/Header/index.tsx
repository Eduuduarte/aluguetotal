import { AppBar, Box, Button, IconButton, Typography, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material"
import { useState } from 'react';
import Link from "next/link";

import { useStyles } from "./styles";
import { HeaderDrawer } from "../HeaderDrawer";


export const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    const handleCadastrar = () => {

    }

    const handleEntrar = () => {

    }

    const handleDrawerTougle = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <AppBar component="nav" className={classes.appBar} sx= {{ padding: {xs: '0', sm: '17px 200px'}}}>
                <Toolbar sx={{ display: 'flex', gap: '12px', justifyContent: {xs: 'flex-start', sm: 'space-between'}}}>
                    <IconButton
                        style={{ color: '#FFF' }}
                        edge="start"
                        sx={{ display: { sm: "none" } }}
                        onClick={handleDrawerTougle}
                    >
                        <Menu />
                    </IconButton>
                    <Box>
                        <Typography component="h5" variant="h5" className={classes.title}>AlugueTotal</Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" }, fontSize: '18px', fontWeight: '500' }}>
                        <Link href="/"><Button className={classes.buttonNav}>Como Trabalhamos</Button></Link>
                        <Link href="/"><Button className={classes.buttonNav}>Imóveis</Button></Link>
                        <Link href="/"><Button className={classes.buttonNav}>FAQ</Button></Link>
                        <Link href="/"><Button className={classes.buttonNav}>Blog</Button></Link>
                        <Link href="/"><Button className={classes.buttonNav}>Sobre</Button></Link>
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" }, alignItems: 'space-between' }}>
                        <Button onClick={handleCadastrar} className={classes.buttonT}>Cadastre-se já</Button>
                        <Button onClick={handleEntrar} className={classes.buttonB}>Entrar</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <HeaderDrawer
                    open={drawerOpen}
                    onClose={handleDrawerTougle}
                    title="AlugueTotal"
                    clickCadastro={handleCadastrar}
                    clickEntrar={handleEntrar}
                />
            </Box>
        </>
    )
}