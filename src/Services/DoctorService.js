import axios from "axios";

const URL = "http://localhost:8080";

export const createDoctor = async (formdata) => {
    axios.post(`${URL}/create-doctor`, formdata)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAllDoctor = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-doctor`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getDoctorById = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-doctor/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const editDoctor = async (data) => {
    axios.put(`${URL}/update-doctor`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const deleteDoctor = async (id) => {
    try {
        await axios.delete(`${URL}/delete-doctor/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}