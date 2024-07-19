import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function StudentForm() {
    var sForm=useFormik({
        initialValues:{
            firstName:'', lastName:''
        },
        validationSchema:Yup.object({
            firstName:Yup.string().required("Baby ee first name is mandatory")
        }),
        onSubmit:(values)=>{console.log(values)}
    })
return (
    <div className='border border-2 p-2 m-2'> 
        <h2>StudentForm</h2>
        <form onSubmit={sForm.handleSubmit}>
        <input type="text" className={sForm.touched.firstName&&sForm.errors.firstName&& "border border-5 border-danger danger-outline"} name='firstName' onChange={sForm.handleChange} onBlur={sForm.handleBlur}/>
        <br />
        {
            sForm.touched.firstName&&sForm.errors.firstName&&<div>Please enter firstName</div>
        }
        <input type="text" name='lastName' onChange={sForm.handleChange}/>
        <br />
        <button>Save Student</button>
        </form>
        {/* {JSON.stringify(sForm.errors)}
        <br />
        {JSON.stringify(sForm)} */}
    </div>
)
}

export default StudentForm
