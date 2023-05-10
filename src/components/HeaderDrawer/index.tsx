import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import Link from "next/link";
import { useStyles } from "./styles";

type Props = {
    open: boolean;
    title: string;
    onClose: () => void;
    clickCadastro: () => void;
    clickEntrar: () => void;
}

export const HeaderDrawer = ({ open, onClose, title, clickCadastro, clickEntrar }: Props) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { width: '70%' }
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>{title}</Typography>
                <Divider />
                <List>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <Link href="/" style={{ color: '#000', textDecoration: 'none' }}>
                                <ListItemText primary="Como Trabalhamos" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <Link href="/produtos" style={{ color: '#000', textDecoration: 'none' }}>
                                <ListItemText primary="Imóveis" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <Link href="/categorias" style={{ color: '#000', textDecoration: 'none' }}>
                                <ListItemText primary="FAQ" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <Link href="/categorias" style={{ color: '#000', textDecoration: 'none' }}>
                                <ListItemText primary="Blog" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <Link href="/categorias" style={{ color: '#000', textDecoration: 'none' }}>
                                <ListItemText primary="Sobre" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '12px 0' }}>
                        <Button onClick={clickCadastro} className={classes.buttonT}>Cadastre-se já</Button>
                        <Button onClick={clickEntrar} className={classes.buttonB}>Entrar</Button>
                    </Box>
        </Drawer>
    )
}