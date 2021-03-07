import  axios  from "axios";

const axiosInstance =axios.create({
    baseURL:`https://api.covid19api.com`,
    headers:{'X-Access-Token':'5cf9dfd5-3449-485e-b5ae-70a60e997864'}
});

export default axiosInstance;