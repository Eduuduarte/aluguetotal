import { Box, Button, Typography } from "@mui/material"
import { useStyles } from "./styles";
import { Benefits } from "../Benefits";
import { Question } from "../Question";

import OtimoRetorno from '../../../public/otimoRetorno.png'
import Tranquilidade from '../../../public/tranquilidade.png'
import Automatizacao from '../../../public/automatizacao.png'
import Economia from '../../../public/economia.png'
import Alinhamento from '../../../public/alinhamento.png'
import Honestidade from '../../../public/honestidade.png'

export const SectionFour = () => {

    const classes = useStyles();

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '0 200px' }}>
                {/* Primeira parte */}
                <Box>
                    <Typography className={classes.title}>Você com AlugueTotal</Typography>
                    <Box className={classes.boxBenefits}>
                        <Benefits
                            title="Ótimo Retorno"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={OtimoRetorno}
                        />
                        <Benefits
                            title="Tranquilidade"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={Tranquilidade}
                        />
                        <Benefits
                            title="Automatização"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={Automatizacao}
                        />
                        <Benefits
                            title="Economia"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={Economia}
                        />
                        <Benefits
                            title="Alinhamento"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={Alinhamento}
                        />
                        <Benefits
                            title="Honestidade"
                            subTitle="Com estratégias de investimento inteligentes e gestão financeira eficiente, nosso sistema de gestão de imóveis oferece ótimos retornos financeiros para nossos clientes."
                            image={Honestidade}
                        />
                    </Box>
                </Box>
                <Button className={classes.button}>Cadastre-se já</Button>

                {/* Segunda parte */}
                <Box sx={{ display: 'flex', alignItems: 'space-between', gap: '100px', margin: '60px 0' }}>

                    <Box>
                        <Typography className={classes.titleQuestion}>Respostas para</Typography>
                        <Typography className={classes.titleQuestion}>suas perguntas</Typography>
                    </Box>

                    <Box>
                        <Question
                            question="Minha acomodação é adequada para colocar no Airbnb?"
                            answer="Resposta da acomodação"
                        />
                        <Question
                            question="Preciso hospedar o tempo todo?"
                            answer="Resposta da hospedagem"
                        />
                        <Question
                            question="Qual é o nível de interação que devo ter com os hóspedes?"
                            answer="Resposta do nível de interação"
                        />
                        <Question
                            question="Alguma dica sobre como ser um ótimo anfitrião no Airbnb?"
                            answer="Resposta da dica sobre como ser um ótimo anfitrião"
                        />
                        <Question
                            question="Quais são as taxas do Airbnb?"
                            answer="Resposta sobre as taxas"
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}