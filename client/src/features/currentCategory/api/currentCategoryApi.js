import { rtkApi } from '@/shared/api/rtkApi';

const currentCategoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        currentCategory: build.query({
            query: (options) => {
                const { value, name } = options;
                return name
                    ? `/furniture/${value}?name=${name}`
                    : `/furniture/${value}`;
            },
        }),
    }),
});

export const { useCurrentCategoryQuery } = currentCategoryApi;
