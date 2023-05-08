import { Box, Button, Typography } from "@mui/material"

import { useStyles } from "./styles";

export const SectionOne = () => {

    const classes = useStyles();

    return (
        <>
            <Box sx={{ backgroundImage: 'url(Fundo.png)', backgroundSize: 'fill', height: 'auto' }}>
                <Box height="100vh" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: "#FFF", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography className={classes.title}>
                        Aumente a eficiência da gestão de seus <br/> imóveis e maximize seus resultados.
                    </Typography>
                    <Typography className={classes.subTitle}>
                    Nosso sistema de gestão de imóveis oferece recursos avançados, suporte técnico especializado e uma interface amigável,
                    <br/> permitindo que você gerencie seus imóveis com facilidade e eficiência. Comece agora e descubra 
                    <br/> como podemos ajudá-lo a alcançar seus objetivos de gestão imobiliária.
                    </Typography>
                    <Button className={classes.button}>Cadastre-se já</Button>
                </Box>
            </Box>
        </>
    )
}