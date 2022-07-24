import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { getAllAppointment } from '../../../Services/AppointmentService'; 
import PastAppTableRowAdmin from './PastAppTableRowAdmin';
import Navbar from "../../Navbar/Navbar"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgba(73, 63, 252, 1)",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function PastAppTableAdmin() {
    const [allAppointment, setAllAppointment] = useState([])
    const params = useParams()

    useEffect(() => {
        const getData = () => {
            getAllAppointment()
                .then(response => {
                    setAllAppointment(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="xxl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">APPOINTMENT ID</StyledTableCell>
                                <StyledTableCell align="center">STUDENT INDEX NO</StyledTableCell>
                                <StyledTableCell align="center">STUDENT EMAIL</StyledTableCell>
                                <StyledTableCell align="center">APPOINTMENT DATE</StyledTableCell>
                                <StyledTableCell align="center">STATUS</StyledTableCell>
                                <StyledTableCell align="center">TIME</StyledTableCell>
                                <StyledTableCell align="center">SAVE</StyledTableCell>
                                <StyledTableCell align="center">DELETE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allAppointment.map((row) => (
                                <PastAppTableRowAdmin row={row} />
                            ))}
                        </TableBody>    
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default PastAppTableAdmin
