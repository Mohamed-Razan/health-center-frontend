import React, { useState, useEffect } from 'react'
import { getAllStudent } from "../../Services/StudentService"
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from "@mui/material"
import LoginUser from "./LoginUser"
import { useHistory } from "react-router-dom"

function LoginAdmin() {

    const [allStudent, setAllStudent] = useState([])
    const [lengthStudent, setLengthStudent] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const getData = () => {
            getAllStudent()
                .then(response => {
                    setAllStudent(response);
                    setLengthStudent(response.length)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    return (
        <div>
            <LoginUser allUser={allStudent} url="student" />
            <Dialog
                open={lengthStudent === 0}
                onClose={lengthStudent > 0}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"No Students in the System"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please click the button to register a student.
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
