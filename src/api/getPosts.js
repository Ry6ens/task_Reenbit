import axios from 'axios';

export const getPost = async id => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return response;
};

export const getPosts = async (page, query) => {
  const response = await axios.get('https://rickandmortyapi.com/api/character', {
    params: { page: page, name: query },
  });
  return response;
};
