import axios from "axios";

const Api = axios.create({
    method: "get",
    baseURL: "https://api.covid19api.com/",
});

export default Api;
