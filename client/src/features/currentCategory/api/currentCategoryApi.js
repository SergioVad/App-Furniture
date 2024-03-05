import { rtkApi } from '@/shared/api/rtkApi';

const currentCategoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        currentCategory: build.query({
            query: (category) => `/furniture/${category}`,
        }),
        // searchElement: build.mutation({
        //     query: (body) => ({
        //         method: 'POST',
        //         url: `/furniture/search?name=${trueValue}`,
        //         body,
        //     })
        // }),
    }),
});

export const { useCurrentCategoryQuery } = currentCategoryApi;
