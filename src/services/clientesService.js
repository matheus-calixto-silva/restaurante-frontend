import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/clientes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(({ data }) => data);
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(({ data }) => data);
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(({ data }) => data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(({ data }) => data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(({ data }) => data)
}

const clientesService = {
  getAll,
  getOne,
  create,
  update,
  remove
};

export default clientesService;