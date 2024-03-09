import { rtkApi } from '@/shared/api/rtkApi';

const currentElemApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        deleteCurrentElem: build.mutation({
            query: (id) => ({
                method: 'DELETE',
                body: id,
                url: `/furniture/category/${id}`,
            }),
        }),
        getCurrentElem: build.query({
            query: (name) => `/furniture/category/${name}`,
        }),
    }),
});

export const { useDeleteCurrentElemMutation, useGetCurrentElemQuery } =
    currentElemApi;
