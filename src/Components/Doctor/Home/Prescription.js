import React, { useEffect, useState } from "react"
import { makeStyles } from "@mui/styles"
import { useParams } from "react-router-dom"

import {
    Button, CssBaseline, TextField, Box, Typography, Container, Paper, Grid, FormControl, MenuItem
} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserById } from "../../../Services/UserService";
import { createAppointment } from "../../../Services/AppointmentService";
import { getAllStudent } from "../../../Services/StudentService";
import { createPrescription } from "../../../Services/PrescriptionService"

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, rgba(73, 63, 252, 1) 30%, #4ad9e4 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 36,
        padding: '0 30px',
        marginTop: '10px'
    },
});

const theme = createTheme();

export default function Prescription() {
    const classes = useStyles();
    const params = useParams()
    const [allStudent, setAllStudent] = useState([])
    const [dateAppointment, setDateAppointment] = useState(new Date());

    const [indexNo, setIndexNo] = useState("")
    const [symptoms, setSymptoms] = useState("")
    const [disease, setDisease] = useState("")
    const [medicine, setMedicine] = useState("")

    useEffect(() => {
        const getData = async () => {
            setAllStudent(await getAllStudent())
        }
        getData()
    }, [])

    const handleSubmit = () => {
        const formdata = new FormData()
        formdata.append("studentIndexNo", indexNo)
        formdata.append("doctorId", params.id)
        formdata.append("symptoms", symptoms)
        formdata.append("disease", disease)
        formdata.append("medicine", medicine)

        createPrescription(formdata)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        window.location.reload(true)
    }

    return (
        <div>
            <div>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="sm">
                        <Paper
                            elevation={3}
                            sx={{ minWidth: 350 }}
                            style={{
                                padding: 25,
                            }}
                        >
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    PRESCRIPTION
                                </Typography>
                                <br />
                                <form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    variant="outlined"
                                                    name="indexNo"
                                                    id="indexNo"
                                                    select
                                                    fullWidth
                                                    label="Index No"
                                                    value={indexNo}
                                                    onChange={e => setIndexNo(e.target.value)}
                                                >
                                                    {allStudent.map((std, idx) => {
                                                        return <MenuItem value={std.indexNo} key={idx}>{std.indexNo}</MenuItem>
                                                    })}
                                                </TextField>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name="symptoms"
                                                label="Symptoms"
                                                id="symptoms"
                                                autoComplete="symptoms"
                                                value={symptoms}
                                                onChange={e => setSymptoms(e.target.value)}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                name="disease"
                                                label="Disease"
                                                id="disease"
                                                autoComplete="disease"
                                                value={disease}
                                                onChange={e => setDisease(e.target.value)}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                name="medicine"
                                                label="Medicine"
                                                id="medicine"
                                                autoComplete="medicine"
                                                value={medicine}
                                                onChange={e => setMedicine(e.target.value)}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                className={classes.button}
                                                onClick={handleSubmit}
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 1, mb: 2 }}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Paper>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    )
}
