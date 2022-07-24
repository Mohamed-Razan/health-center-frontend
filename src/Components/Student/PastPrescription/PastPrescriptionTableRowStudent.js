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

function PastPrescriptionTableStudentRow({ row }) {

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.id}</StyledTableCell>
            <StyledTableCell align="center">{row.symptoms}</StyledTableCell>
            <StyledTableCell align="center">{row.disease}</StyledTableCell>
            <StyledTableCell align="center">{row.medicine}</StyledTableCell>
        </StyledTableRow>
    )
}

export default PastPrescriptionTableStudentRow
