import axios from 'axios';

const KEY = '18977229-7092af5d4460397c12f37767a';
const BASE_URL = `https://pixabay.com/api/`;

const fetchImages = async (searchQuery, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data;
};

const api = {
  fetchImages,
};

export default api;
