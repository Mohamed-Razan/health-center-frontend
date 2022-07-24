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

function UserForm({ initialValues }) {

    const classes = useStyles();
    const history = useHistory()
    const params = useParams()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [role, setRole] = useState('admin')
    const [isEdit, setIsEdit] = useState(false)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
    });

    useEffect(() => {
        const setData = async () => {
            if (initialValues.fname.length > 0) {
                setIsEdit(true)
            }
            if (initialValues.faculty != undefined) {
                setRole("student")
            }
            else if (initialValues.admin !== undefined) {
                setRole("doctor")
            }
        }
        setData();
    }, [])

    const handleSubmitFunction = values => {

        if (!isEdit) {
            if (role === "admin") {
                createAdmin(values)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }

            else if (role === "doctor") {

                const formdata = new FormData()
                formdata.append("fname", values.fname)
                formdata.append("lname", values.lname)
                formdata.append("email", values.email)
                formdata.append("gender", values.gender)
                formdata.append("district", values.district)
                formdata.append("city", values.city)
                formdata.append("contact", values.contact)
                formdata.append("nameAppeared", values.nameAppeared)
                formdata.append("adminId", params.id)

                createDoctor(formdata)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }

            else if (role === "student") {

                const formdata = new FormData()
                formdata.append("fname", values.fname)
                formdata.append("lname", values.lname)
                formdata.append("email", values.email)
                formdata.append("gender", values.gender)
                formdata.append("district", values.district)
                formdata.append("city", values.city)
                formdata.append("contact", values.contact)
                formdata.append("nameAppeared", values.nameAppeared)
                formdata.append("indexNo", values.indexNo)
                formdata.append("faculty", values.faculty)
                formdata.append("adminId", params.id)

                createStudent(formdata)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }
        }

        else {
            values.admin = initialValues.admin
            console.log(values);

            if (role === "admin") {
                editAdmin(values)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }

            else if (role === "doctor") {
                editDoctor(values)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }

            else if (role === "student") {
                editStudent(values)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)
            }
        }

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
                                        <Grid item xs={12} sm={4}>
                                            <FormLabel component="legend">Role</FormLabel>
                                        </Grid>
                                        <RadioGroup
                                            aria-label="role"
                                            name="radio-buttons-group"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            style={{ marginBottom: -40 }}
                                        >
                                            <Grid item xs={12}>
                                                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <FormControlLabel value="student" control={<Radio />} label="Student" />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                                            </Grid>
                                        </RadioGroup>
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
                                        {role === "student"
                                            ? <Grid item xs={12} sm={6}>
                                                <TextField
                                                    margin="normal"
                                                    fullWidth
                                                    name="indexNo"
                                                    label="Index No"
                                                    id="indexNo"
                                                    autoComplete="indexNo"
                                                    value={values.indexNo}
                                                    onChange={handleChange}
                                                    style={{ marginTop: 0 }}
                                                />
                                            </Grid>
                                            : null
                                        }
                                        {role === "student"
                                            ? <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        variant="outlined"
                                                        name="faculty"
                                                        id="faculty"
                                                        select
                                                        label="Faculty"
                                                        value={values.faculty}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value='Architecture'>Architecture</MenuItem>
                                                        <MenuItem value='Engineering'>Engineering</MenuItem>
                                                        <MenuItem value='Information Technology'>Information Technology</MenuItem>
                                                        <MenuItem value='Business Science'>Business Science</MenuItem>
                                                    </TextField>
                                                </FormControl>
                                            </Grid>
                                            : null
                                        }
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
