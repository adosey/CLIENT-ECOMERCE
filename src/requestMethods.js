import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDRhYWI3ZDUxNjliZWIyNTU5ZGIzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTQ5OTI5NywiZXhwIjoxNjQxNzU4NDk3fQ.Ya19JqJCiSvJrS_vlAY3Opk0RSjeNDW9F8qPrM97Vso"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})