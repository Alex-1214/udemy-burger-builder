import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-graber-hunger-stopper-default-rtdb.firebaseio.com'
});

export default instance;