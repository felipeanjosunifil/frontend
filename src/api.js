import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
        //NÃO UTILIZAR NESTE FORMATO EM PRODUÇÃO, VIU??!! ARMAZENAR O TOKEN RECEBIDO NO ARMAZENAMENTO DA APLICAÇÃO E ENVIAR A CADA REQUISIÇÃO DE FORMA DINÂMICA
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJpYXQiOjE3NzM4ODEzMTEsImV4cCI6MTc3Mzg4NDkxMX0.Hf_Ms5Pg1mJQUk8RsSwn-1JfHE1JNL1p7cwDGp71Zuo'
    }
})

export default api;