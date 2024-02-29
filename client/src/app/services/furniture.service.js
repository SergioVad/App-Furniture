import axios from "axios";
import config from "../config.json";

const httpFurniture = axios.create({
    baseURL: config.apiEndpoint + "/furniture/"
});

const furnitureService = {
    get: async () => {
        const data = await httpFurniture.get();
        return data;
    },
    create: async (payload) => {
        const data = await httpFurniture.post(`product-change`, payload);
        return data;
    },
    postFurn: async (payload) => {
        const data = await httpFurniture.post(`sendFormData`, payload);
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
    }
};

export default furnitureService;
