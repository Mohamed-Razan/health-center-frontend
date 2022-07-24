import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { getAppointmentByStudent } from '../../../Services/AppointmentService'; 
import PastAppTableRowStudent from "./PastAppTableRowStudent"
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

function PastAppTableStudent() {
    const [allAppointment, setAllAppointment] = useState([])
    const params = useParams()

    useEffect(() => {
        const getData = () => {
            getAppointmentByStudent(params.id)
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
                                <StyledTableCell align="center">APPOINTMENT DATE</StyledTableCell>
                                <StyledTableCell align="center">STATUS</StyledTableCell>
                                <StyledTableCell align="center">APPOINTMENT TIME</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allAppointment.map((row) => (
                                <PastAppTableRowStudent row={row} />
                            ))}
                        </TableBody>    
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default PastAppTableStudent
