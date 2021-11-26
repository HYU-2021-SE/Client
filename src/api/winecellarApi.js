import { apiRequestUrl } from '../constants/constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { AxiosResponse } from 'axios';

const winecellarInstance = axios.create({ baseURL: apiRequestUrl + '/winecellar' });

export class Wine {
  wineId;
  wineName;
  location;
  labelImage;
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
    console.log(token);
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
};
