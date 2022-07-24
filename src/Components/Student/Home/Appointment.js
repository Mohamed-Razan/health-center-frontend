import React, { useEffect, useState } from "react"
import { makeStyles } from "@mui/styles"
import { useParams } from "react-router-dom"

import {
    Button, CssBaseline, TextField, Box, Typography, Container, Paper, Grid, FormControl
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserById } from "../../../Services/UserService";
import { createAppointment } from "../../../Services/AppointmentService";

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, rgba(73, 63, 252, 1) 30%, #4ad9e4 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 36,
        padding: '0 30px',
        marginTop: '10px'
    },
});

const theme = createTheme();

export default function UserDetails() {
    const classes = useStyles();
    const params = useParams()
    const [student, setStudent] = useState({})
    const [dateAppointment, setDateAppointment] = useState(new Date());

    useEffect(() => {
        const getData = async () => {
            setStudent(await getUserById(params.id))
        }
        getData()
    }, [])

    const handleSubmit = () => {
        const formdata = new FormData()
        formdata.append("id", params.id)
        formdata.append("date", dateAppointment.toISOString().slice(0, 10))

        createAppointment(formdata)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        window.location.reload(true)
    }

    return (
        student.id
            ? <div>
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
                                        APPOINTMENT
                                    </Typography>
                                    <br />
                                    <form>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    id="fname"
                                                    label="First Name"
                                                    name="fname"
                                                    autoComplete="fname"
                                                    value={student.fname}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="lname"
                                                    label="Last Name"
                                                    id="lname"
                                                    autoComplete="lname"
                                                    value={student.lname}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="nameAppeared"
                                                    label="Appeared Name"
                                                    id="nameAppeared"
                                                    autoComplete="nameAppeared"
                                                    value={student.nameAppeared}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="email"
                                                    label="Email"
                                                    id="email"
                                                    autoComplete="email"
                                                    value={student.email}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="indexNo"
                                                    label="Index No"
                                                    id="indexNo"
                                                    autoComplete="indexNo"
                                                    value={student.indexNo}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        margin="normal"
                                                        fullWidth
                                                        name="faculty"
                                                        label="Faculty"
                                                        id="faculty"
                                                        autoComplete="faculty"
                                                        value={student.faculty}
                                                        disabled
                                                        style={{ marginTop: 0 }}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="gender"
                                                    label="Gender"
                                                    id="gender"
                                                    autoComplete="gender"
                                                    value={student.gender}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    id="contact"
                                                    label="Contact No"
                                                    name="contact"
                                                    autoComplete="contact"
                                                    value={student.contact}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="district"
                                                    label="District"
                                                    id="district"
                                                    autoComplete="district"
                                                    value={student.district}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="city"
                                                    label="City"
                                                    id="city"
                                                    autoComplete="city"
                                                    value={student.city}
                                                    disabled
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <DatePicker
                                                        label="Appointment Date"
                                                        value={dateAppointment}
                                                        onChange={(newValue) => {
                                                            setDateAppointment(newValue);
                                                        }}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                        <Button
                                            className={classes.button}
                                            onClick={handleSubmit}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 1, mb: 2 }}
                                        >
                                            Submit
                                        </Button>
                                    </form>
                                </Box>
                            </Paper>
                        </Container>
                    </ThemeProvider>
                </div>
            </div>
            : null
    )
}
