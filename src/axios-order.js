import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-alexthedar.firebaseio.com/'
});

export default instance;