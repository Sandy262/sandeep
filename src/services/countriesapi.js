import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// Define a service using a base URL and expected endpoints
export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3/all' }),
    endpoints: (builder) => ({
    getAllCountries: builder.query({
        query: () => `/`,//ikkada nundi ye url aithe return chesthaamo adi 4th line lo unna baseurl ki bind avuthundi last lo slash ga'/'
    }),
    }),
})

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
export const { useGetAllCountriesQuery,useLazyGetAllCountriesQuery } = countriesApi//endpoint starting letter matram capital undaali, adi ikkada 'G', and next Query ani add cheyyaali