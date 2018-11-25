import axios from 'axios';

const KEY = 'AIzaSyBkzZ6jVasYe5nA-iOCcygkKLZXrxvuL4E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
