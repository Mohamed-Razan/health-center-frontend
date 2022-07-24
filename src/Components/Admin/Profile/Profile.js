import React from 'react'
import { Grid, Container, Box, Paper } from "@mui/material"
import Navbar from '../../Navbar/Navbar'
import Avatar from "../../../Assets/avatar.png"
import UserDetails from './UserDetails'

function Profile() {
    return (
        <div>
            <Navbar />
            <Container maxWidth="lg" sx={{ padding: 3 }}>
                <Box sx={{ width: '100%', flexGrow: 1 }}>
                    <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
                        <h1 align="center">Profile</h1>
                        <Grid container spacing={4} sx={{ marginBottom: "20px" }}>
                            <Grid item xs={12} sm={6} sx={{ textAlign: "center", marginTop: "-50px" }}>
                                <img src={Avatar} alt="avatar" />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
                                <UserDetails />
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default Profile
