import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/posts' }),
    endpoints: (builder) => ({
    getAllPosts: builder.query({
        query: () => `/`,//ikkada nundi ye url aithe return chesthaamo adi 4th line lo unna baseurl ki bind avuthundi last lo slash ga'/'
    }),
    addNewPost:builder.mutation({
        query:(newPost)=>{
            return{
                url:"/",
                method:"POST",
                body:newPost
            }
        }
    }),
    deletePost:builder.mutation({
        query:(id)=>{
            console.log(id)
            return{
                url:"/"+id,//`/${id}`
                method:"DELETE"
            }
        }
    }),
    updatePost:builder.mutation({
        query:(uPost)=>{
            return{
                url:`/${uPost.id}`,
                method:'PUT',
                body:uPost
            }
        }
    })
    })
})

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
export const { useGetAllPostsQuery,useAddNewPostMutation,useLazyGetAllPostsQuery,useDeletePostMutation,useUpdatePostMutation } = postsApi//endpoint starting letter matram capital undaali, adi ikkada 'G', and next Query ani add cheyyaali