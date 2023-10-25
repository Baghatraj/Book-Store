import axios from "axios";

export const client = axios.create({
    baseURL : "https://book-store-mern-stack-q96r.onrender.com/",
    headers: {
        'Content-Type': 'application/json',
      },
})