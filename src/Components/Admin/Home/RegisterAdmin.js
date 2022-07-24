import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles"
import { useHistory, useParams } from "react-router-dom"
import * as Yup from "yup";

import { createTheme } from '@mui/material/styles';
import { useFormik, Formik } from 'formik';

import LocalError from './LocalError';

import {
    Button, CssBaseline, TextField, Box, Container, Paper, Grid, RadioGroup,
    FormControlLabel, Radio, FormLabel, MenuItem, FormControl
} from '@mui/material';

import { DistrictCityData } from "../../../Assets/Constants/DisrtictCityData";
import { DistrictData } from "../../../Assets/Constants/DistrictData"
import { createAdmin, editAdmin } from '../../../Services/AdminService';
import { createDoctor, editDoctor } from "../../../Services/DoctorService"
import { createStudent, editStudent } from "../../../Services/StudentService"

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, rgba(73, 63, 252, 1) 30%, #4ad9e4 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(160, 210, 135, .3)',
        color: 'white',
        height: 36,
        padding: '0 30px',
    },
});

const theme = createTheme();

const phonePattern = `^[0][7][0-9]{8}`

const validationSchema = Yup.object({

    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    nameAppeared: Yup.string().required('Required'),
    email: Yup.string().email('Enter a valid email').required('Required'),
    gender: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    contact: Yup.string("Enter your contact Number")
        .matches(phonePattern, "Contact Number should be 10 character long")
        .required("Required"),
    indexNo: Yup.string().required('Required'),
    faculty: Yup.string().required('Required'),

});

const initialValues = {
    fname: "",
    lname: "",
    nameAppeared: "",
    email: "",
    gender: "",
    district: "",
    city: "",
    contact: "",
    indexNo: "",
    faculty: ""
}

function UserForm() {

    const classes = useStyles();
    const history = useHistory()
    const params = useParams()
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
    });

    const handleSubmitFunction = values => {

        createAdmin(values)
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
            <Container component="main" maxWidth="sm" sx={{ marginTop: 5 }}>
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
                        <br />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting
                            }) => (
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
                                                value={values.fname}
                                                onChange={handleChange}
                                                style={{ marginTop: 0 }}
                                            />
                                            <LocalError touched={touched.fname} error={errors.fname} />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                name="lname"
                                                label="Last Name"
                                                id="lname"
                                                autoComplete="lname"
                                                value={values.lname}
                                                onChange={handleChange}
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
                                                value={values.nameAppeared}
                                                onChange={handleChange}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="email"
                                                margin="normal"
                                                fullWidth
                                                name="email"
                                                label="Email"
                                                id="email"
                                                autoComplete="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    variant="outlined"
                                                    name="gender"
                                                    id="gender"
                                                    select
                                                    label="Gender"
                                                    value={values.gender}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value='male'>Male</MenuItem>
                                                    <MenuItem value='female'>Female</MenuItem>
                                                </TextField>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                id="contact"
                                                label="Contact No"
                                                name="contact"
                                                autoComplete="contact"
                                                value={values.contact}
                                                onChange={handleChange}
                                                style={{ marginTop: 0 }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    variant="outlined"
                                                    name="district"
                                                    id="district"
                                                    select
                                                    label="District"
                                                    value={values.district}
                                                    onChange={handleChange}
                                                >
                                                    {DistrictData.map((dis, idx) => {
                                                        return <MenuItem value={dis} key={idx}>{dis}</MenuItem>
                                                    })}
                                                </TextField>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    variant="outlined"
                                                    name="city"
                                                    id="city"
                                                    select
                                                    label="City"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    disabled={values.district === ""}
                                                >
                                                    {values.district ? DistrictCityData[values.district].cities.map((city, idx) => {
                                                        return <MenuItem value={city} key={idx}>{city}</MenuItem>
                                                    })
                                                        : null}
                                                </TextField>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        className={classes.button}
                                        onClick={() => handleSubmitFunction(values)}
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 1, mb: 2 }}
                                        disabled={loading}
                                    >
                                        Submit
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}

export default UserForm
