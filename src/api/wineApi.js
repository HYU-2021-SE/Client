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
    console.log(wine);
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
  // async get(): Promise<AxiosResponse<WinecellarResponse>> {
  //   const token = await AsyncStorage.getItem('accessToken');
  //   return winecellarInstance.get('/', {
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  // },
  // async update(dto: WinecellarUpdateRequest): Promise<AxiosResponse<WinecellarResponse>> {
  //   const token = await AsyncStorage.getItem('accessToken');
  //   return winecellarInstance.put(
  //     '/',
  //     { ...dto },
  //     {
  //       headers: {
  //         authorization: token,
  //       },
  //     },
  //   );
  // },
};
