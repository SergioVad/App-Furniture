import axios from 'axios';
import { localStorageService } from './localStorage.service';
import { constApi } from '@/shared/const/constApi';

const httpAuth = axios.create({
    baseURL: constApi.apiEndpoint + '/auth/',
});

export const authService = {
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post(`signInWithPassword`, {
            email,
            password,
            returnSecureToken: true,
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post('token', {
            grant_type: 'refresh_token',
            refresh_token: localStorageService.getRefreshToken(),
        });
        return data;
    },
};
