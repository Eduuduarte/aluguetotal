import { Box, Button, Typography } from "@mui/material"

import { useStyles } from "./styles";

export const SectionOne = () => {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.main} >
                    <Typography className={classes.title} sx={{ fontSize: { xs: '30px', sm: '60px' } }}>
                        Aumente a eficiência da gestão de seus imóveis e maximize seus resultados.
                    </Typography>
                    <Typography className={classes.subTitle} sx={{ fontSize: { xs: '12px', sm: '20px' } }}>
                        Nosso sistema de gestão de imóveis oferece recursos avançados, suporte técnico especializado e uma interface amigável,
                        permitindo que você gerencie seus imóveis com facilidade e eficiência. Comece agora e descubra
                        como podemos ajudá-lo a alcançar seus objetivos de gestão imobiliária.
                    </Typography>
                    <Button className={classes.button}>Cadastre-se já</Button>
                </Box>
            </Box>
        </>
    )
}