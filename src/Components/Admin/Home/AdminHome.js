import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Register from './Register'

import Hero from "./Hero"
import UserTable from './UserTable'

const initialValues = {
    fname: "",
    lname: "",
    nameAppeared: "",
    email: "",
    gender: "",
    district: "",
    city: "",
    contact: "",
    indexNo: "",
    faculty: ""
}

function AdminHome() {
    return (
        <div>
            <Navbar />
            <Hero user="Admin view" />
            <Register initialValues={initialValues} title="New User Registration" />
            <UserTable />
        </div>
    )
}

export default AdminHome
