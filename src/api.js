import axios from "axios";

const apiConfiguration = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json',
        //deve estar em um gerenciador de estado, pina ou pelo menos local storage, recebendo o header de forma dinâmica após o login do usuário.
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE3NzM3ODI0ODQsImV4cCI6MTc3Mzc4NjA4NH0.gILH78KR7ZbepCmeyr4cdARoGunqQfIdcmAQlXThlXE'
    }
})


export default apiConfiguration;