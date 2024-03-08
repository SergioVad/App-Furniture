import axios from 'axios';
import { constApi } from '@/shared/const/constApi';

const httpFurniture = axios.create({
    baseURL: constApi.apiEndpoint + '/furniture/',
});

export const furnitureService = {
    get: async () => {
        const data = await httpFurniture.get();
        return data;
    },
    create: async (payload) => {
        const data = await httpFurniture.post(`product-change`, payload);
        return data;
    },
    delete: async (unitId) => {
        const data = await httpFurniture.delete(unitId);
        return data;
    },
    getCurrentFurn: async (payload) => {
        const data = await httpFurniture.get(payload);
        return data;
    },
    edit: async (elem, id) => {
        const data = await httpFurniture.put(id, elem);
        return data;
    },
};
