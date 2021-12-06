import { apiRequestUrl } from '../constants/constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';

const instance = axios.create({ baseURL: apiRequestUrl + '/images' });

export const imageUploadApi = {
  async upload(uri): Promise<AxiosResponse<string>> {
    const token = await AsyncStorage.getItem('accessToken');
    const formData = new FormData();
    formData.append('images', { uri: uri, name: 'label.jpg', type: 'image/jpg' });
    return instance.post('/', formData, {
      headers: {
        authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
