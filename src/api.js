import axios from "axios";

const apiConfiguration = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json',
        //deve estar em um gerenciador de estado, pina ou pelo menos local storage, recebendo o header de forma dinâmica após o login do usuário.
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE3NzM3OTM4MjIsImV4cCI6MTc3Mzc5NzQyMn0.xlWIGqOadIRZ-Wjq-Pp7_dRpzTEnfGsOhDN0bdCTuVQ'
    }
})


export default apiConfiguration;