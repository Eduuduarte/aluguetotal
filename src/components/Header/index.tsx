import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
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
            <AppBar component="nav" className={classes.appBar}>
                <IconButton
                    style={{ color: '#FFF'}}
                    edge="start"
                    sx={{ display: { sm: "none" } }}
                    onClick={handleDrawerTougle}
                >
                    <Menu />
                </IconButton>
                <Box>
                    <Typography component="h5" variant="h5" className={classes.title} sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>AlugueTotal</Typography>
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
            </AppBar>
            <Box component="nav">
                <HeaderDrawer
                    open={drawerOpen}
                    onClose={handleDrawerTougle}
                    title="AlugueTotal"
                />
            </Box>
        </>
    )
}