import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import {
    TableRow, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, FormControl, TextField, MenuItem
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteAppointment, editAppointment } from "../../../Services/AppointmentService"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgba(73, 63, 252, 1)",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function PastAppTableRowAdmin({ row }) {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(row.status);
    const [time, setTime] = useState(null);
    const [isEdit, setIsEdit] = useState(row.status === null)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = (id) => {
        deleteAppointment(id)
        setOpen(false);
        window.location.reload(true)
    }

    const onSave = () => {
        let newDate = new Date(row.date)
        if(status === "Accept"){
            newDate.setHours(time.getHours(), time.getMinutes(), time.getSeconds())
            console.log(newDate.toISOString().slice(11, 19));
        }

        const formdata = new FormData()
        formdata.append("id", row.id)
        formdata.append("time", newDate.toISOString().slice(11, 19))
        formdata.append("status", status)

        editAppointment(formdata)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        window.location.reload(true)
    }

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.id}</StyledTableCell>
            <StyledTableCell align="center">{row.student.indexNo}</StyledTableCell>
            <StyledTableCell align="center">{row.student.email}</StyledTableCell>
            <StyledTableCell align="center">{row.date.substring(0, 10)}</StyledTableCell>

            <StyledTableCell align="center">
                <FormControl sx={{ width: 150 }}>
                    <TextField
                        variant="outlined"
                        name="status"
                        id="status"
                        select
                        label="Status"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        disabled={!isEdit}
                    >
                        <MenuItem value='Accept'>Accept</MenuItem>
                        <MenuItem value='Reject'>Reject</MenuItem>
                    </TextField>
                </FormControl>
            </StyledTableCell>

            <StyledTableCell align="center">
            <FormControl sx={{ width: 150 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        label="Set Time"
                        value={time}
                        disabled={(isEdit && status !== "Accept") || !isEdit}
                        onChange={(newValue) => {
                            setTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </FormControl>
            </StyledTableCell>

            <StyledTableCell align="center">
                <Button
                    variant="contained"
                    disabled={!isEdit}
                    sx={{
                        backgroundColor: "rgba(73, 63, 252, 1)",
                        width: 100,
                        "&:hover": {
                            background: '#fff',
                            color: "rgba(73, 63, 252, 1)"
                        },
                    }}
                    onClick={onSave}
                >
                    Save
                </Button>
            </StyledTableCell>

            <StyledTableCell align="center">
                <IconButton aria-label="delete" color="error" onClick={handleClickOpen} disabled={isEdit}>
                    <DeleteIcon />
                </IconButton>
            </StyledTableCell>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Delete?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you delete this appointment you will have no longer access to it. 
                        It will get deleted permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Cancel</Button>
                    <Button onClick={() => onDelete(row.id)} variant="contained" color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </StyledTableRow>
    )
}

export default PastAppTableRowAdmin
