    import React, { useEffect } from 'react'
    import { useFormik } from 'formik'
    import { useLazyGetAllPostsQuery,useAddNewPostMutation, useUpdatePostMutation } from '../../services/postsapi'
import { useLocation, useNavigate } from 'react-router-dom'
    function EditPost() {
        var {state}=useLocation()
        var [updatePostFn]=useUpdatePostMutation()
        var [ addNewPostfn,x ]=useAddNewPostMutation()
        var [getAllPostsFn]=useLazyGetAllPostsQuery()
        var navigate=useNavigate()
        var postForm= useFormik({
        initialValues:{
            // title:state.title,
            // author:state.author,
            // id:'state.id'
            //useEffect lekunda direct ga ila raaseyyochu, but useEffect is best practices
            title:'',
            author:'',
            id:''
        },
        onSubmit:(values)=>{
                updatePostFn(postForm.values).then(()=>{getAllPostsFn();navigate("/")})
            }
    })
    useEffect(()=>{
        postForm.setValues(state)
        // postForm.setFieldValue("title",state.title)
        // postForm.setFieldValue("author",state.author)
        // postForm.setFieldValue("id",state.id)
    },[state])
    return (
        <div>
            <h1>Edit Post</h1>
            <div className='border border-warning border-3 m-2 p-2'>
        <form onSubmit={postForm.handleSubmit}>
        <input type='text' {...postForm.getFieldProps('title')} />
        <br />
        <input type='text' {...postForm.getFieldProps('author')} />
        <br />
        <button>Update Post</button>
        </form>
    </div>
        </div>
    )
    }

    export default EditPost
