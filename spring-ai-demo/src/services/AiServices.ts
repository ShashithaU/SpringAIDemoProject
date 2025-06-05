import axios from 'axios'

export default function AiServices() {

 const apiClient = axios.create({
    baseURL:"http://localhost:8080/"
  })
  
  return {apiClient}
}
