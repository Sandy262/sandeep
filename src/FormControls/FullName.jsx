import React from 'react'
import { Field } from 'formik'

function FullName() {
return (
    <div>
        <Field type="text" name="fullName" placeholder="enter your full name here"></Field><br />
    </div>
)
}

export default FullName
