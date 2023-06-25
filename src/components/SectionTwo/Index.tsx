import { Box } from "@mui/material"
import Forbes from '../../../public/forbes.png';
import Fox from '../../../public/fox.png';
import Tech from '../../../public/tech.png';


import { useStyles } from "./styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { Advantage } from "../Advantage";

export const SectionTwo = () => {
    const classes = useStyles();

    return (
        <>
            <Box sx={{ background: '#FFF', marginTop: '80px' }}>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-around', padding: '0 200px' }}>
                    <Advantage
                        title="Inteligente"
                        subTitle="Com recursos de inteligência artificial e análise de dados, nosso sistema de gestão de imóveis ajuda nossos clientes a tomar decisões mais informadas e estratégicas"
                        line={true}
                    />
                    <Advantage
                        title="Rápido"
                        subTitle="Com processos automatizados e tecnologia de ponta, nosso sistema de gestão de imóveis é incrivelmente rápido, permitindo que nossos clientes gerenciem suas propriedades de forma ágil e eficiente."
                        line={true}
                    />
                    <Advantage
                        title="Transparente"
                        subTitle="Nosso sistema de gestão de imóveis oferece transparência total aos nossos clientes, permitindo que eles acompanhem todas as transações, pagamentos e outras atividades em tempo real."
                        line={true}
                    />
                    <Advantage
                        title="Fácil"
                        subTitle="Com uma interface intuitiva e recursos simples de usar, nosso sistema de gestão de imóveis torna o gerenciamento de propriedades fácil e acessível para todos os nossos clientes"
                    />
                </Box>

                <Box sx={{ display: {xs: 'block'}}}>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        className={classes.swiper}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className={classes.slide}>
                            <Advantage
                                title="Inteligente"
                                subTitle="Com recursos de inteligência artificial e análise de dados, nosso sistema de gestão de imóveis ajuda nossos clientes a tomar decisões mais informadas e estratégicas"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={classes.slide}>
                            <Advantage
                                title="Rápido"
                                subTitle="Com processos automatizados e tecnologia de ponta, nosso sistema de gestão de imóveis é incrivelmente rápido, permitindo que nossos clientes gerenciem suas propriedades de forma ágil e eficiente."
                            />
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, marginTop: '105px', paddingBottom: '120px', gap: { xs: '40px', sm: '170px' } }}>
                    <Image src={Tech} alt="" />
                    <Image src={Forbes} alt="" />
                    <Image src={Fox} alt="" />
                </Box>
            </Box>
        </>
    )
}