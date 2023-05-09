import { Box, Button } from "@mui/material";
import { useStyles } from "./styles";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from "@material-ui/core";
import { useState } from "react";

type Props = {
    question: string;
    answer: string;
}

export const Question = ({ question, answer }:Props) => {
    const [showAnswer, setShowAnswer ] = useState<Boolean>(false)
    const classes = useStyles();

    return(
        <Box className={classes.box}>
            <Box className={classes.boxQuestion}>
                <Typography className={classes.question}>{question}</Typography>
                {!showAnswer && <Button onClick={() => setShowAnswer(true)}><KeyboardArrowDownIcon style={{ color: '#000'}} /></Button>}
                {showAnswer && <Button onClick={() => setShowAnswer(false)}><KeyboardArrowUpIcon style={{ color: '#000'}}/></Button>}
            </Box>
            {showAnswer && 
                <Typography className={classes.answer}>{answer}</Typography>
            }
        </Box>
    )
}