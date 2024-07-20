import React from 'react'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup';
import FirstName from './FormControls/FirstName';
import FullName from './FormControls/FullName';

function StudentForm(){
return (
    <div className='border border-2 p-2 m-2'> 
        
        {/* {JSON.stringify(sForm.errors)}
        <br />
        {JSON.stringify(sForm)} */}
        <Formik 
        initialValues={{
            firstName:'', lastName:'', fullName:''
        }}
        validationSchema={Yup.object({
            firstName:Yup.string().required("Baby ee first name is mandatory")
            .min(4,"chinna perlu vaddu")
            .matches(/^[a-zA-Z0-9]+$/,"Konchem chusko")
            .test("name_idi", "custom message idi", (value)=>{
                return value.length>10?false:true
            })
        })}
        onSubmit={(values)=>{console.log(values)}}
        >
        {
        (sForm)=>{
        return (
            <div className='border border-2 m-2 p-2'>
            <h1>StudentForm</h1>
            <form onSubmit={sForm.handleSubmit}>
                <h4>Gender :</h4>
                <input type='radio' {...sForm.getFieldProps('gender')} value='male' /> Male<br />
                <input type='radio' {...sForm.getFieldProps('gender')} value='female' /> Female<br />
                <input type='radio' {...sForm.getFieldProps('gender')} value='others' /> Others<br />
                <h4>Technologies to opt for :</h4>
                <input type='checkbox' {...sForm.getFieldProps('Tech')} value='Javascript' /> Javascript<br />
                <input type='checkbox' {...sForm.getFieldProps('Tech')} value='React.js' /> React.js<br />
                <input type='checkbox' {...sForm.getFieldProps('Tech')} value='Angularjs' /> Angularjs<br />
                <input type='checkbox' {...sForm.getFieldProps('Tech')} value='Redux' /> Redux<br />
                <input type='checkbox' {...sForm.getFieldProps('Tech')} value='Nodejs' /> Nodejs<br />
                {
            //<input type="text" className={sForm.touched.firstName&&sForm.errors.firstName&& "border border-5 border-danger danger-outline"} name='firstName' onChange={sForm.handleChange} onBlur={sForm.handleBlur}/>
                }
            {
                //same firstname ki kuda ivvachu, appudu getfieldprops vaadalsina avasaram ledu
            }
            <FullName></FullName>
            <FirstName></FirstName>
            <input type="text" name='lastName' onChange={sForm.handleChange} placeholder='enter your last name'/>
            <br />
            <button>Save Student</button>
            </form>
            </div>
        )}
    }
        </Formik>
    </div>
)
}

export default StudentForm
