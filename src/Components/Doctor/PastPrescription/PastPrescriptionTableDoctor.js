import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { getPrescriptionByDoctor } from '../../../Services/PrescriptionService';
import PastPrescriptionTableRow from "./PastPrescriptionTableDoctorRow"
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

function PastPrescriptionTableDoctor() {
    const [allPrescription, setAllPrescription] = useState([])
    const params = useParams()

    useEffect(() => {
        const getData = () => {
            getPrescriptionByDoctor(params.id)
                .then(response => {
                    setAllPrescription(response);
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
                                <StyledTableCell align="center">PRESCRIPTION ID</StyledTableCell>
                                <StyledTableCell align="center">STUDENT INDEX NO</StyledTableCell>
                                <StyledTableCell align="center">STUDENT EMAIL</StyledTableCell>
                                <StyledTableCell align="center">STUDENT NAME</StyledTableCell>
                                <StyledTableCell align="center">SYMPTOMS</StyledTableCell>
                                <StyledTableCell align="center">DESEASE</StyledTableCell>
                                <StyledTableCell align="center">MEDICINE</StyledTableCell>
                                <StyledTableCell align="center">DELETE</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allPrescription.map((row) => (
                                <PastPrescriptionTableRow row={row} />
                            ))}
                        </TableBody>    
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default PastPrescriptionTableDoctor
