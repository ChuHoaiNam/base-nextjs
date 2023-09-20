import isServerSide from "@/utils/isServerSide";
import axios from "axios";
import errorHandle from "./errorHandle";

const axiosClient = axios.create({
    baseURL: isServerSide() ? `/api` : `${window.location.origin}/api/`,
    headers: {
        "Content-Type": "Application/json",
    },
});

axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        errorHandle(error);
        return Promise.reject(error);
    },
);

export default axiosClient;
