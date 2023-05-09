import { Box } from "@mui/material";
import { useStyles } from "./styles";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@material-ui/core";

type Props = {
    title: string;
    subTitle: string;
    image: StaticImageData;
}

export const Benefits = ({title, subTitle, image }: Props) => {
    const classes = useStyles();

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column',gap: '10px'}}>
            <Image src={image} alt="" />
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subTitle}>{subTitle}</Typography>
        </Box>
    )
}