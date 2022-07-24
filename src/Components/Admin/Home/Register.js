import React, { useState } from 'react';

import {
    Button, AppBar, Toolbar, IconButton, Typography, Dialog, Slide
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import UserForm from './UserForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Register({ initialValues, title }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                sx={{
                    backgroundColor: "rgba(73, 63, 252, 1)",
                    marginLeft: 3,
                    "&:hover": {
                        background: '#fff',
                        color: "rgba(73, 63, 252, 1)"
                    },
                }}
            >
                {title}
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {title}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            OK
                        </Button>
                    </Toolbar>
                </AppBar>
                <UserForm initialValues={initialValues} />
            </Dialog>
        </div>
    );
}
