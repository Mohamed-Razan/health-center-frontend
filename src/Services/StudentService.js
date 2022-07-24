import axios from "axios";

const URL = "http://localhost:8080";

export const createStudent = async (formdata) => {
    axios.post(`${URL}/create-student`, formdata)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAllStudent = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-student`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getStudentById = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-student/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const editStudent = async (data) => {
    axios.put(`${URL}/update-student`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${URL}/delete-student/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}