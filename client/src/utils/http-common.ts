import axios from 'axios'


export default axios.create({
  baseURL: `http://${process.env.VUE_APP_LOCAL_IP}:${process.env.VUE_APP_SERVER_PORT}`,
  headers: { 'Content-Type': 'application/json' }
})

