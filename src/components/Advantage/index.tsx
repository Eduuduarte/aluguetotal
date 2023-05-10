import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";

type Props = {
    title: string;
    subTitle: string;
    line?: Boolean
}

export const Advantage = ({ title, subTitle, line }: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.box} sx={{ borderRight: `${line ? '1px solid #DADADA' : ''}` }}>
            <Typography className={classes.titleBox}>{title}</Typography>
            <Typography className={classes.subTitleBox}>
                {subTitle}
            </Typography>
        </Box>
    )
}