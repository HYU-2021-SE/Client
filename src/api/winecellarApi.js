import { apiRequestUrl } from '../constants/constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';
import { Wine } from '../context/WinecellarContext';

const winecellarInstance = axios.create({ baseURL: apiRequestUrl + '/winecellar' });

export class WinecellarUpdateRequest {
  winecellarId;
  nickName;
  lock;
  lockPassword;
  lightColor;
}

export class WinecellarResponse {
  winecellarId;
  type;
  nickName;
  lock;
  lockPassword;
  lightColor;
  wineDtos: Array<Wine>;
}

export const winecellarApi = {
  async create(serial): Promise<AxiosResponse<WinecellarResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return winecellarInstance.post(
      '/',
      { serialNo: serial },
      {
        headers: {
          authorization: token,
        },
      },
    );
  },
  async get(): Promise<AxiosResponse<WinecellarResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return winecellarInstance.get('/', {
      headers: {
        authorization: token,
      },
    });
  },
  async update(dto: WinecellarUpdateRequest): Promise<AxiosResponse<WinecellarResponse>> {
    const token = await AsyncStorage.getItem('accessToken');
    return winecellarInstance.put(
      '/',
      { dto },
      {
        headers: {
          authorization: token,
        },
      },
    );
  },
};
