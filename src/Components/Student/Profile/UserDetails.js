import React, { useState, useEffect } from "react";
import { Grid, Box, TextField, Button, MenuItem, FormControl, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useParams } from "react-router-dom"

import { editStudent, getStudentById } from "../../../Services/StudentService";
import { DistrictCityData } from "../../../Assets/Constants/DisrtictCityData";
import { DistrictData } from "../../../Assets/Constants/DistrictData";

const validationSchema = Yup.object({
});

function UserDetails() {

    const [disabled, setDisabled] = useState(true);
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        getStudentById(params.id)
            .then(response => {
                setStudent(response);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    const formik = useFormik({
        initialValues: { ...student },
        enableReinitialize: true,
        validationSchema: validationSchema,

        onSubmit: (values) => {

            console.log(values)

            try {
                editStudent(values)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload(true)

            } catch {

            }
        },
    });

    const handleEdit = () => {
        setDisabled(false);
    };
    const handleCancel = () => {
        setDisabled(true);
    };

    return (
        !loading
            ? <Box sx={{ marginTop: 4 }}>
                <Grid container justify='flex-start' alignItems='center' spacing={2}>
                    <Grid item xs={12}>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete='off'
                                        type='text'
                                        id='fname'
                                        name='fname'
                                        variant='outlined'
                                        label='First Name'
                                        fullWidth
                                        color='primary'
                                        autoFocus
                                        disabled={disabled}
                                        value={formik.values.fname}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='lname'
                                        variant='outlined'
                                        type='text'
                                        name='lname'
                                        label='Last Name'
                                        fullWidth
                                        color='primary'
                                        disabled={disabled}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lname}
                                        onChange={formik.handleChange}
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
                                        onBlur={formik.handleBlur}
                                        disabled={disabled}
                                        value={formik.values.nameAppeared}
                                        onChange={formik.handleChange}
                                        style={{ marginTop: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='email'
                                        type="email"
                                        variant='outlined'
                                        name='email'
                                        label='E-mail'
                                        fullWidth
                                        color='primary'
                                        disabled={disabled}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
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
                                        color='primary'
                                        disabled={disabled}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.indexNo}
                                        onChange={formik.handleChange}
                                        style={{ marginTop: 0 }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <TextField
                                            variant="outlined"
                                            name="faculty"
                                            id="faculty"
                                            select
                                            label="Faculty"
                                            onBlur={formik.handleBlur}
                                            value={formik.values.faculty}
                                            onChange={formik.handleChange}
                                            disabled={disabled}
                                            sx={{ textAlign: "left" }}
                                        >
                                            <MenuItem value='Architecture'>Architecture</MenuItem>
                                            <MenuItem value='Engineering'>Engineering</MenuItem>
                                            <MenuItem value='Information Technology'>Information Technology</MenuItem>
                                            <MenuItem value='Business Science'>Business Science</MenuItem>
                                        </TextField>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth sx={{ textAlign: "left" }}>
                                        <TextField
                                            variant="outlined"
                                            name="gender"
                                            id="gender"
                                            select
                                            disabled={disabled}
                                            label="Gender"
                                            onBlur={formik.handleBlur}
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                        >
                                            <MenuItem value='male'>Male</MenuItem>
                                            <MenuItem value='female'>Female</MenuItem>
                                        </TextField>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='contact'
                                        variant='outlined'
                                        type='text'
                                        name='contact'
                                        label='Contact No'
                                        fullWidth
                                        color='primary'
                                        disabled={disabled}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.contact}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label='district'
                                        id='district'
                                        variant='outlined'
                                        type='text'
                                        name='district'
                                        select
                                        fullWidth
                                        color='primary'
                                        disabled={disabled}
                                        value={formik.values.district}
                                        onChange={formik.handleChange}
                                        sx={{ textAlign: "left" }}
                                    >
                                        {DistrictData.map((dis, idx) => {
                                            return <MenuItem value={dis} key={idx}>{dis}</MenuItem>
                                        })}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='text'
                                        variant='outlined'
                                        type='city'
                                        label='City'
                                        name='city'
                                        select
                                        fullWidth
                                        color='primary'
                                        disabled={disabled}
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        sx={{ textAlign: "left" }}
                                    >
                                        {formik.values.district ? DistrictCityData[formik.values.district].cities.map((city, idx) => {
                                            return <MenuItem value={city} key={idx}>{city}</MenuItem>
                                        })
                                            : null}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </form>
                        <Grid item xs={12} sx={{float: "right"}}>
                            <Grid container direction='row' justify='self-end' spacing={2} sx={{ paddingTop: 2 }}>
                                {disabled ? null : (
                                    <Grid item>
                                        <Button
                                            onClick={() => {
                                                handleCancel();
                                                formik.setValues(formik.initialValues);
                                            }}>
                                            cancel
                                        </Button>
                                    </Grid>
                                )}
                                <Grid item>
                                    {!disabled ? (
                                        <Button
                                            type="submit"
                                            disabled={!formik.isValid}
                                            onClick={() => {
                                                formik.handleSubmit()
                                            }}>
                                            Submit
                                        </Button>
                                    ) : (
                                        <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(student)}>
                                            <EditIcon />
                                        </IconButton>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            : null
    );
}

export default UserDetails
