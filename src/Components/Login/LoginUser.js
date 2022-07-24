import React from 'react'
import { useHistory } from "react-router-dom"

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container, Button
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

function LoginAdmin({ allUser, url }) {
    const history = useHistory()

    const rows = allUser;

    return (
        <div>
            <Container component="main" maxWidth="lg" sx={{ paddingTop: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">ID</StyledTableCell>
                                <StyledTableCell align="center">NAME</StyledTableCell>
                                <StyledTableCell align="center">EMAIL</StyledTableCell>
                                <StyledTableCell align="center">LOG IN</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.nameAppeared}</StyledTableCell>
                                    <StyledTableCell align="center">{row.email}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button 
                                            variant="contained" 
                                            sx={{backgroundColor: "rgba(73, 63, 252, 1)",
                                            width: 100,
                                            "&:hover": {
                                                background: '#fff',
                                                color: "rgba(73, 63, 252, 1)"
                                            },}}
                                            onClick={() => history.push(`/${url}/${row.id}`)}
                                        >
                                            LOG IN
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default LoginAdmin
