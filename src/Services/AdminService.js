import axios from "axios";

const URL = "http://localhost:8080";

export const createAdmin = async (data) => {
    axios.post(`${URL}/create-admin`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getAllAdmin = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-admin`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getAdminById = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-admin/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const editAdmin = async (data) => {
    axios.put(`${URL}/update-admin`, data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

export const deleteAdmin = async (id) => {
    try {
        await axios.delete(`${URL}/delete-admin/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}