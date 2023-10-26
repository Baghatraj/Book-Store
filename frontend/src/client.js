import axios from "axios";

const baseurl = process.env.REACT_APP_API_KEY

export const client = axios.create({
    baseURL : baseurl,
    headers: {
        'Content-Type': 'application/json',
      },
})