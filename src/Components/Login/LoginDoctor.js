import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from "@mui/material"
import { getAllDoctor } from "../../Services/DoctorService"
import LoginUser from "./LoginUser"
import { useHistory } from "react-router-dom"

function LoginAdmin() {

    const [allDoctor, setAllDoctor] = useState([])
    const [lengthDoctor, setLengthDoctor] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const getData = () => {
            getAllDoctor()
                .then(response => {
                    setAllDoctor(response);
                    setLengthDoctor(response.length)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    return (
        <div>
            <LoginUser allUser={allDoctor} url="doctor" />
            <Dialog
                open={lengthDoctor === 0}
                onClose={lengthDoctor > 0}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"No Doctors in the System"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please click the button to register a doctor.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => history.push("/admin")} variant="contained">Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default LoginAdmin
