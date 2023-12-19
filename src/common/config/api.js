import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://homologacao3.azapfy.com.br/api/ps/metahumans'
});

export default instance;