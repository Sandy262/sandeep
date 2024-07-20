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
            .min(4,"chinna perlu vaddu")
            .matches(/^[a-zA-Z0-9]+$/,"Konchem chusko")
            .test("name_idi", "custom message idi", (value)=>{
                return value.length>10?false:true
            })
        }),
        onSubmit:(values)=>{console.log(values)}
    })
return (
    <div className='border border-2 p-2 m-2'> 
        <h1>StudentForm</h1>
        <form onSubmit={sForm.handleSubmit}>
            <h4>Gender :</h4>
            <input type='radio' {...sForm.getFieldProps('gender')} value='male' /> Male<br />
            <input type='radio' {...sForm.getFieldProps('gender')} value='female' /> Female<br />
            <input type='radio' {...sForm.getFieldProps('gender')} value='others' /> Others<br />
            <h4>Technologies to opt for :</h4>
            <input type='checkbox' {...sForm.getFieldHelpers('Tech')} value='Javascript' /> Javascript<br />
            <input type='checkbox' {...sForm.getFieldHelpers('Tech')} value='React.js' /> React.js<br />
            <input type='checkbox' {...sForm.getFieldHelpers('Tech')} value='Angularjs' /> Angularjs<br />
            <input type='checkbox' {...sForm.getFieldHelpers('Tech')} value='Redux' /> Redux<br />
            <input type='checkbox' {...sForm.getFieldHelpers('Tech')} value='Nodejs' /> Nodejs<br />
            {
        //<input type="text" className={sForm.touched.firstName&&sForm.errors.firstName&& "border border-5 border-danger danger-outline"} name='firstName' onChange={sForm.handleChange} onBlur={sForm.handleBlur}/>
            }
        <input type="text" className={sForm.touched.firstName&&sForm.errors.firstName&& "border border-5 border-danger danger-outline"} {...sForm.getFieldProps('firstName')}/>
        <br />
        {
            sForm.touched.firstName&&sForm.errors.firstName&&<div>{
                //Please enter firstName
                }{sForm.errors.firstName}</div>
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
