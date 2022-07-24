import axios from "axios";

const URL = "http://localhost:8080";

export const getAllUser = async () => {
    try {
        const data = await axios.get(`${URL}/get-all-user`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const getUserById = async (id) => {
    try {
        const data = await axios.get(`${URL}/get-user-by-id/${id}`);
        return data.data;
    }

    catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${URL}/delete-user/${id}`);
        console.log("deleted");
    }

    catch (error) {
        console.log(error);
    }
}