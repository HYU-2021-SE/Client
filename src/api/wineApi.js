import { apiRequestUrl } from '../constants/constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';
import { useWinecellarState, Wine } from '../context/WinecellarContext';

const wineInstance = axios.create({ baseURL: apiRequestUrl + '/wine' });

export class WineCreateRequest {
  winecellarId;
  wineName;
  location;
  labelImage;
  vintage;
  purchaseDate;
  producedDate;
}

export class WineResponse {
  wineId;
  winecellarId;
  wineName;
  location;
  labelImage;
  vintage;
  purchaseDate;
  producedDate;
}

export const wineApi = {
  async create(wine: WineCreateRequest): Promise<AxiosResponse<WineResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return wineInstance.post(
      '/',
      { ...wine },
      {
        headers: {
          authorization: token,
        },
      },
    );
  },
  async get(id): Promise<AxiosResponse<WineResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return wineInstance.get(`/${id}`, {
      headers: {
        authorization: token,
      },
    });
  },
  async update(id, corkImage): Promise<AxiosResponse<WineResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return wineInstance.put(
      `/${id}`,
      { corkImage },
      {
        headers: {
          authorization: token,
        },
      },
    );
  },
};
