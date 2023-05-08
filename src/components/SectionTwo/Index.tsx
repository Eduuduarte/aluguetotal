import { Box, Typography } from "@mui/material"
import Forbes from '../../../public/forbes.png';
import Fox from '../../../public/fox.png';
import Tech from '../../../public/tech.png';


import { useStyles } from "./styles";
import Image from "next/image";

export const SectionTwo = () => {

    const classes = useStyles();

    return (
        <>
            <Box sx={{ background: '#FFF', marginTop: '80px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box className={classes.box} sx={{ borderRight: '1px solid #DADADA'}}>
                        <Typography className={classes.titleBox}>Inteligente</Typography>
                        <Typography className={classes.subTitleBox}>Com recursos de inteligência artificial e análise de dados, nosso sistema de gestão de imóveis ajuda nossos clientes a tomar decisões mais informadas e estratégicas</Typography>
                    </Box>
                    <Box className={classes.box} sx={{ borderRight: '1px solid #DADADA'}}>
                        <Typography className={classes.titleBox}>Rápido</Typography>
                        <Typography className={classes.subTitleBox}>Com processos automatizados e tecnologia de ponta, nosso sistema de gestão de imóveis é incrivelmente rápido, permitindo que nossos clientes gerenciem suas propriedades de forma ágil e eficiente. </Typography>
                    </Box>
                    <Box className={classes.box} sx={{ borderRight: '1px solid #DADADA'}}>                        
                        <Typography className={classes.titleBox}>Transparente</Typography>
                        <Typography className={classes.subTitleBox}>Nosso sistema de gestão de imóveis oferece transparência total aos nossos clientes, permitindo que eles acompanhem todas as transações, pagamentos e outras atividades em tempo real. </Typography>
                    </Box>
                    <Box className={classes.box}>                        
                        <Typography className={classes.titleBox}>Facil</Typography>
                        <Typography className={classes.subTitleBox}>Com uma interface intuitiva e recursos simples de usar, nosso sistema de gestão de imóveis torna o gerenciamento de propriedades fácil e acessível para todos os nossos clientes.</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '105px', paddingBottom: '120px', gap: '170px'}}>
                    <Image src={Tech} alt=""/>
                    <Image src={Forbes} alt=""/>
                    <Image src={Fox} alt=""/>
                </Box>
            </Box>
        </>
    )
}