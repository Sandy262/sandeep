    import React from 'react'
    import { useFormik } from 'formik'
    import { useLazyGetAllPostsQuery,useAddNewPostMutation } from '../../services/postsapi'
    import { useNavigate } from 'react-router-dom'
    function AddPost() {
        var [ addNewPostfn,x ]=useAddNewPostMutation()
        var [getAllPostsFn]=useLazyGetAllPostsQuery()
        var navigate=useNavigate()
        var postForm= useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
                //console.log(values)
                //addNewPostfn(values).then((res)=>{console.log(res)})
                addNewPostfn(values).then((res)=>{getAllPostsFn();navigate("/")})
            }
    })
    return (
        <div>
            <h1>Add Post</h1>
            <div className='border border-secondary m-2 p-2'>
        <form onSubmit={postForm.handleSubmit}>
        <input type='text' {...postForm.getFieldProps('title')} />
        <br />
        <input type='text' {...postForm.getFieldProps('author')} />
        <br />
        <button>Add Post</button>
        </form>
    </div>
        </div>
    )
    }

    export default AddPost
