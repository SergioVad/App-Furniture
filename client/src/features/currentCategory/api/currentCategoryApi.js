import { rtkApi } from '@/shared/api/rtkApi';

const currentCategoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        currentCategory: build.query({
            query: ({ value, name }) =>
                name
                    ? `/furniture/${value}?name=${name}`
                    : `/furniture/${value}`,
        }),
    }),
});

export const { useCurrentCategoryQuery } = currentCategoryApi;
