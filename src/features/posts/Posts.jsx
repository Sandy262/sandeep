import React from 'react'
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from '../../services/postsapi'
import { useNavigate } from 'react-router-dom';
function Posts() {
    var {isLoading,data}=useGetAllPostsQuery();
    var [getAllPostsFn]=useLazyGetAllPostsQuery()
    var [deletePostFn]=useDeletePostMutation()
    var navigateFn=useNavigate()
    function deletePostById(id){
        deletePostFn(id).then(()=>{getAllPostsFn()})
    }
return (
    <div className='border border-info m-2 p-2'>
    {
        //<h1> Posts<button>Add New Post</button></h1>
    }
    {
        //<h1> Posts<a href="/addPost">Add New Post</a></h1>
    }
    {
        //<h1> Posts<a className='btn btn-success' href='/addPost'>Add New Post</a></h1>
    }
    <h1> Posts<button className='btn btn-success' onClick={()=>{navigateFn("/addPost")}}>Add New Post</button></h1>
    {
        //routing should happen through functional if we use buttons, not through links if we use button
        //deenike navigate ane method vaadali manam
    }
    <ul>
    {
        isLoading===false&&data.map((c)=>{
            return<li>
            {c.title}
            <button className='btn btn-warning m-2 p-2' onClick={()=>{navigateFn("/editPost",{state:c})}}>Edit</button>
            <button className='btn btn-danger m-2 p-2' onClick={()=>{deletePostById(c.id)}}>Delete</button>
            </li>
            
        })
    }
    </ul>
    </div>
)
}

export default Posts
