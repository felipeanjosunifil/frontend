import axios from "axios";

const apiConfiguration = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE3NzM3ODI0ODQsImV4cCI6MTc3Mzc4NjA4NH0.gILH78KR7ZbepCmeyr4cdARoGunqQfIdcmAQlXThlXE'
    }
})


export default apiConfiguration;