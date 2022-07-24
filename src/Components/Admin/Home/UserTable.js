import React, { useState, useEffect } from 'react'

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container, Slide
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { getAllUser } from "../../../Services/UserService"
import UserTableRow from './UserTableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgba(73, 63, 252, 1)",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function UserTable() {
    const [allUser, setAllUser] = useState([])

    useEffect(() => {
        const getData = () => {
            getAllUser()
                .then(response => {
                    setAllUser(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    return (
        <div>
            <Container component="main" maxWidth="xxl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">FIRST NAME</StyledTableCell>
                                <StyledTableCell align="center">LAST NAME</StyledTableCell>
                                <StyledTableCell align="center">APPEARED NAME</StyledTableCell>
                                <StyledTableCell align="center">GENDER</StyledTableCell>
                                <StyledTableCell align="center">EMAIL</StyledTableCell>
                                <StyledTableCell align="center">CONTACT NO</StyledTableCell>
                                <StyledTableCell align="center">DISTRICT</StyledTableCell>
                                <StyledTableCell align="center">CITY</StyledTableCell>
                                <StyledTableCell align="center">INDEX NO</StyledTableCell>
                                <StyledTableCell align="center">FACULTY</StyledTableCell>
                                <StyledTableCell align="center">EDIT</StyledTableCell>
                                <StyledTableCell align="center">DELETE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allUser.map((row) => (
                                <UserTableRow row={row} />
                            ))}
                        </TableBody>    
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default UserTable
