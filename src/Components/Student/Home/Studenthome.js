import React from 'react'
import Hero from '../../Admin/Home/Hero'
import Navbar from '../../Navbar/Navbar'
import Appointment from './Appointment'

function Studenthome() {
    return (
        <div>
            <Navbar />
            <Hero user="Student View" />
            <Appointment />
        </div>
    )
}

export default Studenthome
