import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import {
    TableRow, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';

import { deletePrescription } from '../../../Services/PrescriptionService';

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

function PastPrescriptionTableDoctorRow({ row }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = (id) => {
        deletePrescription(id)
        setOpen(false);
        window.location.reload(true)
    }

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.id}</StyledTableCell>
            <StyledTableCell align="center">{row.student.indexNo}</StyledTableCell>
            <StyledTableCell align="center">{row.student.email}</StyledTableCell>
            <StyledTableCell align="center">{row.student.nameAppeared}</StyledTableCell>
            <StyledTableCell align="center">{row.symptoms}</StyledTableCell>
            <StyledTableCell align="center">{row.disease}</StyledTableCell>
            <StyledTableCell align="center">{row.medicine}</StyledTableCell>

            <StyledTableCell align="center">
                <IconButton aria-label="delete" color="error" onClick={handleClickOpen}>
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
                        If you delete this prescription you will have no longer access to it. 
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

export default PastPrescriptionTableDoctorRow
