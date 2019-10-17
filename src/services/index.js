import axios from 'axios';

const API_URL = "http://www.mocky.io/v2";

const getAlbums = () => axios.get(`${API_URL}/5d9e49c93200005000329d00`);
const getAlbumPictures = (id) => axios.get(`${API_URL}/5d9e4c1b3200006100329d09`);

export { getAlbums, getAlbumPictures };