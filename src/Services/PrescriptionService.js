import axios from "axios";

const URL = "http://localhost:8080";

export const createPrescription = async (formdata) => {
    axios.post(`${URL}/create-prescription`, formdata)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAllPrescription = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-prescription`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getPrescriptionByDoctor = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-prescription-by-doctor/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getPrescriptionByStudent = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-prescription-by-student/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const deletePrescription = async (id) => {
    try {
        await axios.delete(`${URL}/delete-prescription/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}