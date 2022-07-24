import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import {
    TableRow
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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

function PastAppTableRowStudent({row}) {

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.id}</StyledTableCell>
            <StyledTableCell align="center">{row.date}</StyledTableCell>
            <StyledTableCell align="center">{row.status ? row.status : "In Progress"}</StyledTableCell>
            <StyledTableCell align="center">{row.status === "Reject" ? "Reject" : row.status === "Accept" ? row.time : row.status === null ? "In Progress" : null}</StyledTableCell>
        </StyledTableRow>
    )
}

export default PastAppTableRowStudent
