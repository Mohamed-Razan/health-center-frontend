import React from 'react';
import { makeStyles } from "@mui/styles"
import { Card, CardContent, Container } from "@mui/material";

const useStyles = makeStyles({
    content: {
        color: "rgba(73, 63, 252)",
        letterSpacing: 5,
        textTransform: "uppercase",
        fontSize: 50,
        padding: 5
    }
});

function Hero({ user }) {
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xxl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
                <Card sx={{ borderRadius: 5, paddingLeft: 5 }} variant="outlined">
                    <CardContent>
                        <h1 className={classes.content}>{user}</h1>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Hero;
