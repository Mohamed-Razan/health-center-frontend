import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogContentText } from "@mui/material"
import { getAllAdmin } from "../../Services/AdminService"
import LoginUser from "./LoginUser"
import RegisterAdmin from "../Admin/Home/RegisterAdmin"

function LoginAdmin() {

    const [allAdmin, setAllAdmin] = useState([])
    const [lengthAdmin, setLengthAdmin] = useState(0)

    useEffect(() => {
        const getData = () => {
            getAllAdmin()
                .then(response => {
                    setAllAdmin(response);
                    setLengthAdmin(response.length)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    return (
        <div>
            <LoginUser allUser={allAdmin} url="admin" />
            <Dialog
                open={lengthAdmin === 0}
                onClose={lengthAdmin > 0}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"ADMIN REGISTRATION"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Register Admin at first
                    </DialogContentText>
                    <RegisterAdmin />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default LoginAdmin
