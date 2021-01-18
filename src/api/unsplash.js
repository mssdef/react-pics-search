import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fe23936d559a1890c5a706836d1c3fedb39993ca89b0a9c87fcde61f47f784a3'
  }
})
