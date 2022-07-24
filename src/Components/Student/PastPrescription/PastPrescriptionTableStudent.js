import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { styled } from '@mui/material/styles';
import {
    Table, TableBody, TableContainer, TableHead, TableRow, Paper, Container
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { getPrescriptionByStudent } from '../../../Services/PrescriptionService';
import PastPrescriptionTableRow from "./PastPrescriptionTableRowStudent"
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

function PastPrescriptionTableStudent() {
    const [allPrescription, setAllPrescription] = useState([])
    const params = useParams()

    useEffect(() => {
        const getData = () => {
            getPrescriptionByStudent(params.id)
                .then(response => {
                    setAllPrescription(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        getData()
    }, [])

    console.log(params.id);

    return (
        <div>
            <Navbar />
            <Container component="main" maxWidth="xxl" sx={{ paddingTop: 5, paddingBottom: 5 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">PRESCRIPTION ID</StyledTableCell>
                                <StyledTableCell align="center">SYMPTOMS</StyledTableCell>
                                <StyledTableCell align="center">DESEASE</StyledTableCell>
                                <StyledTableCell align="center">MEDICINE</StyledTableCell>
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

export default PastPrescriptionTableStudent
