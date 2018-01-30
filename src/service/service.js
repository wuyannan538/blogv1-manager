import axios from 'axios'

const instance = axios.create({
})

const APIService = {
  login ({ username, password }) {
    return instance.post('/api/login', {
      username,
      password
    }).then(res => res.data)
  }
}

export default APIService
