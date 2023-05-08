import { Box, Button, Typography } from "@mui/material"
import Browse from '../../../public/browse.png';
import Relax from '../../../public/relax.png';
import Invest from '../../../public/invest.png';


import { useStyles } from "./styles";
import Image from "next/image";

export const SectionThree = () => {

    const classes = useStyles();

    const handleGetAccess = () => {
        
    }

    return (
        <>
            <Box className={classes.container}>
                <Typography component='h3' variant="h3" color="#FFF" sx={{ marginTop: '146px' }}>Como nós trabalhamos</Typography>
                <Typography component='h5' variant="h5" color="#FFF" sx={{ marginBottom: '146px' }}>São três pequenos passos</Typography>
                <Typography></Typography>
                <Box className={classes.boxSection}>
                    <Box className={classes.boxDialog}>
                        <Typography className={classes.boxDialogCircle}>1</Typography>
                        <Box className={classes.boxDialogText}>
                            <Typography className={classes.boxDialogTitle}>Browse</Typography>
                            <Typography className={classes.boxDialogSubTitle}>Browse the Here marketplace for
                                available properties that fit your
                                investment criteria.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image src={Browse} alt="" height={200} />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.boxSection}>
                    <Box className={classes.boxDialog}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image src={Invest} alt="" height={200} />
                        </Box>
                        <Typography className={classes.boxDialogCircle}>2</Typography>
                        <Box className={classes.boxDialogText}>
                            <Typography className={classes.boxDialogTitle}>Invest</Typography>
                            <Typography className={classes.boxDialogSubTitle}>Determine how much you’d like to
                                invest, review the terms, sign
                                electronically and fund your
                                investment.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.boxSection}>
                    <Box className={classes.boxDialog}>
                        <Typography className={classes.boxDialogCircle}>3</Typography>
                        <Box className={classes.boxDialogText}>
                            <Typography className={classes.boxDialogTitle}>Relax</Typography>
                            <Typography className={classes.boxDialogSubTitle}>Determine how much you’d like to
                                We’ll take care of the day-to-day. You
                                sit back and earn your share of net
                                monthly income and potential
                                property appreciation.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image src={Relax} alt="" height={200} />
                        </Box>
                    </Box>
                </Box>
                <Button className={classes.button} onClick={handleGetAccess}>Get early access</Button>
            </Box>
        </>
    )
}