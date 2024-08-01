import React from 'react'
import { useAddNewPostMutation, useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from '../../services/postsapi'
import { useFormik } from 'formik';
function Posts() {
    var {isLoading,data}=useGetAllPostsQuery();
    var [getAllPostsFn]=useLazyGetAllPostsQuery()
    var [ addNewPostfn,x ]=useAddNewPostMutation()
    var [deletePostFn]=useDeletePostMutation()
    var postForm= useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
                //console.log(values)
                //addNewPostfn(values).then((res)=>{console.log(res)})
                addNewPostfn(values).then((res)=>{getAllPostsFn()})
            }
    })
    function deletePostById(id){
        deletePostFn(id).then(()=>{getAllPostsFn()})
    }
return (
    <div className='border border-info m-2 p-2'>
    <h1> Posts</h1>
    <div className='border border-secondary m-2 p-2'>
        <form onSubmit={postForm.handleSubmit}>
        <input type='text' {...postForm.getFieldProps('title')} />
        <br />
        <input type='text' {...postForm.getFieldProps('author')} />
        <br />
        <button>Add Post</button>
        </form>
    </div>
    <ul>
    {
        isLoading===false&&data.map((c)=>{
            return<li>{c.title}<button onClick={()=>{deletePostById(c.id)}}>Delete</button></li>
            
        })
    }
    </ul>
    </div>
)
}

export default Posts
