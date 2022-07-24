import React from 'react'
import Hero from '../../Admin/Home/Hero'
import Navbar from '../../Navbar/Navbar'
import Prescription from './Prescription'

function DoctorHome() {
    return (
        <div>
            <Navbar />
            <Hero user="Doctor View" />
            <Prescription />
        </div>
    )
}

export default DoctorHome
