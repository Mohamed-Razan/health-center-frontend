import axios from "axios";

const URL = "http://localhost:8080";

export const createAppointment = async (formdata) => {
    axios.post(`${URL}/create-appointment`, formdata)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAllAppointment = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-appointment`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getAppointmentById = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-appointment-by-id/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getAppointmentByStudent = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-appointment-by-student/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const deleteAppointment = async (id) => {
    try {
        await axios.delete(`${URL}/delete-appointment/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}

export const editAppointment = async (formdata) => {
    axios.put(`${URL}/update-appointment`, formdata)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}