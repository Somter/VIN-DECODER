import axios from 'axios';
import type { VinData, VariableData } from './types';

const API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const fetchVinDataApi = async (vin: string): Promise<VinData> => {
    const response = await axios.get<VinData>(`${API_BASE_URL}/decodevin/${vin}?format=json`);
    return response.data;
};

export const fetchVariableDataApi = async (): Promise<VariableData> => {
    const response = await axios.get<VariableData>(`${API_BASE_URL}/getvehiclevariablelist?format=json`);
    return response.data;
}