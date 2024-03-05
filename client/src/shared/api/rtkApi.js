import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constApi } from '../const/constApi';

export const rtkApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: constApi.apiEndpoint }),
    endpoints: () => ({}),
});
