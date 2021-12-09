import axios from 'axios';

export const defineLabelApi = {
  async define(imgUrl): Promise<> {
    if (!imgUrl) return;
    const formData = new FormData();
    // formData.append('image', { uri: imgUrl, name: 'label.jpg', type: 'image/jpg' });
    formData.append('url', imgUrl);
    return axios.post('https://wine-recognition2.p.rapidapi.com/v1/results', formData, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-rapidapi-host': 'wine-recognition2.p.rapidapi.com',
        'x-rapidapi-key': '4610047a0dmsha9cde0c0f522fc5p15bf9ajsnc69a80dd39bf',
      },
    });
  },
};
