import axios from 'axios';
import type { VinData } from './types';

const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const fetchVinDataApi = async (vin: string): Promise<VinData> => {
    const response = await axios.get<VinData>(`${BASE_URL}/decodevin/${vin}?format=json`);
    return response.data;
};