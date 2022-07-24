import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import {
    TableRow, Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, 
    DialogTitle, AppBar, Toolbar, Typography, Slide
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import { deleteUser } from "../../../Services/UserService"
import UserForm from './UserForm';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function UserTableRow({row}) {
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = (id) => {
        deleteUser(id)
        setOpen(false);
        window.location.reload(true)
    }

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.fname}</StyledTableCell>
            <StyledTableCell align="center">{row.lname}</StyledTableCell>
            <StyledTableCell align="center">{row.nameAppeared}</StyledTableCell>
            <StyledTableCell align="center">{row.gender}</StyledTableCell>
            <StyledTableCell align="center">{row.email}</StyledTableCell>
            <StyledTableCell align="center">{row.contact}</StyledTableCell>
            <StyledTableCell align="center">{row.district}</StyledTableCell>
            <StyledTableCell align="center">{row.city}</StyledTableCell>
            <StyledTableCell align="center">{row.indexNo ? row.indexNo : "NA"}</StyledTableCell>
            <StyledTableCell align="center">{row.faculty ? row.faculty : "NA"}</StyledTableCell>
            <StyledTableCell align="center">
                <IconButton aria-label="edit" color="primary" onClick={handleClickOpenDialog}>
                    <EditIcon />
                </IconButton>
            </StyledTableCell>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseDialog}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Edit User
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleCloseDialog}>
                            OK
                        </Button>
                    </Toolbar>
                </AppBar>
                <UserForm initialValues={row} />
            </Dialog>

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
                        If you delete this user you will have no longer access to it. 
                        User and all the related details such as Appointment and Prescription 
                        will get deleted permanently.
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

export default UserTableRow
