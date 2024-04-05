import axios from "axios";

//create default URL for backend
const instance = axios.create({baseURL:"http://localhost:3025"})

export default instance;