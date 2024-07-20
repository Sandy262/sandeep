import React from 'react'
import { Field, ErrorMessage } from 'formik'

function FirstName() {
return (
    <div>
    <Field name="firstName" placeholder="enter first name"></Field>
            {
                //<input type="text" className={sForm.touched.firstName&&sForm.errors.firstName&& "border border-5 border-danger danger-outline"} {...sForm.getFieldProps('firstName')}/>
            }<br />
            {
                // sForm.touched.firstName&&sForm.errors.firstName&&<div>{
                //     //Please enter firstName
                // }{sForm.errors.firstName}</div>
            }
            <ErrorMessage name='firstName' component='div'></ErrorMessage>
    </div>
)
}

export default FirstName
