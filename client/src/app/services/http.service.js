import { constApi } from '@/shared/const/constApi';
import axios from 'axios';
import { localStorageService } from './localStorage.service';
import { authService } from './auth.service';

const http = axios.create({
    baseURL: constApi.apiEndpoint,
});

http.interceptors.request.use(
    async function (constApi) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expiresDate < Date.now();

        if (constApi.isFireBase) {
            const containSlash = /\/$/gi.test(constApi.url);
            constApi.url =
                (containSlash ? constApi.url.slice(0, -1) : constApi.url) +
                '.json';
            if (isExpired) {
                const data = await authService.refresh();

                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    idToken: data.id_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id,
                });
            }
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                constApi.params = { ...constApi.params, auth: accessToken };
            }
        } else {
            if (isExpired) {
                const data = await authService.refresh();
                localStorageService.setTokens(data);
            }
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                constApi.headers = {
                    ...constApi.headers,
                    Authorization: `Bearer ${accessToken}`,
                };
            }
        }
        return constApi;
    },
    function (error) {
        return Promise.reject(error);
    },
);

function transormData(data) {
    return data && !data._id
        ? Object.keys(data).map((key) => ({
              ...data[key],
          }))
        : data;
}

http.interceptors.response.use(
    (res) => {
        if (constApi.isFireBase) {
            res.data = { content: transormData(res.data) };
        }
        res.data = { content: res.data };
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            console.log(error);
            console.log('Somthing was wrong. Try it later');
        }
        return Promise.reject(error);
    },
);
export const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};
