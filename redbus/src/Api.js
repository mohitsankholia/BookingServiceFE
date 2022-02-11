import axios from 'axios'

const url="http://localhost:8080"

export const show=async()=>{
    const t= await axios.get(`${url}/bus`)
    return t
}