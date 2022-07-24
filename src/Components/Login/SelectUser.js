import React from 'react'
import { makeStyles } from "@mui/styles"
import { Container, Paper, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import { useHistory } from "react-router-dom"
import BasicSlider from './Slide/BasicSlider';
import Hero from '../Admin/Home/Hero';

const useStyles = makeStyles({
    root: {
        paddingTop: '2%',
    },
    button: {
        background: 'linear-gradient(45deg, rgba(73, 63, 252, 1) 30%, #4ad9e4 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(160, 210, 135, .3)',
        color: 'white',
        height: 60,
        padding: '0 30px',
        width: 400,
        fontSize: 50,
        "&:hover": {
            transform: 'scale(1.25)',
            transition: 'transform .2s',
        },
    },
    content: {
        color: "rgba(73, 63, 252)",
        letterSpacing: 5,
        textTransform: "uppercase",
        fontSize: 50,
        padding: 5,
        textAlign: "center"
    }
});
function SelectUser() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Container component="main" maxWidth="xxl" sx={{marginBottom: 5}}>
                        <Card sx={{ borderRadius: 5 }} variant="outlined">
                            <CardContent>
                                <h1 className={classes.content}>Health Center, University of Moratuwa</h1>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                <Grid container spacing={2} sx={{ paddingLeft: 10 }}>
                <Grid item xs={12} sm={6}>
                    <BasicSlider />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Container component="main" maxWidth="sm">
                        <Paper
                            elevation={3}
                            sx={{ minWidth: 350 }}
                            style={{
                                padding: 25,
                                borderRadius: 0,
                                backgroundColor: 'rgb(110, 94, 254)'
                            }}
                        >
                            <Typography variant="h4" component="div" sx={{ textAlign: "center", color: 'white' }}>
                                LOG IN
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{ minWidth: 350, minHeight: 400 }}
                            style={{
                                padding: 25,
                                borderRadius: 0,
                            }}
                        >
                            <Grid container spacing={5} sx={{ marginTop: 0 }}>
                                <Grid item xs={12} sx={{ textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                        onClick={() => history.push("/admin")}
                                    >
                                        <h2>LOG In AS ADMIN</h2>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                        onClick={() => history.push("/doctor")}
                                    >
                                        <h2>LOG In AS DOCTOR</h2>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                        onClick={() => history.push("/student")}
                                    >
                                        <h2>LOG In AS STUDENT</h2>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default SelectUser
