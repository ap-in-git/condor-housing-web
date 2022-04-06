import axios from "axios";

const publicApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL || "http://localhost:3000",
    headers: {
        "x-access-token": localStorage.getItem("access_token"),
    }
});

export default publicApi;