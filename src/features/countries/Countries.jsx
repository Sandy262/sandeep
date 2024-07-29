import React from 'react'
import { useState } from 'react'
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from '../../services/countriesapi'

function Countries() {
    //var { isLoading,data }=useGetAllCountriesQuery();
    var [getAllCountriesFn,{isLoading}]= useLazyGetAllCountriesQuery()
    var [countries,setCountries]=useState([])
    function abc(){
        getAllCountriesFn().then(({data})=>{
            setCountries(data)
        })
    }
    //console.log(x)//x anedi oka object, anduke above daanilo destructure cheddaam, manaki kavalsinavi thiskundaam 
return (
    <div className='border border-2 m-2 p-2'>
    <h1>Countries</h1>
    <button onClick={()=>{abc()}}>Countries Chupinchu</button>
    <ul>
    {
        isLoading===false&&countries.map((c)=>{
            return <li>{c.name.common}</li>
        })
    }
    </ul>
    {
        //isLoading===true&&<b>---Loading aithundi aagu bey</b>
        isLoading===true&&<img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif'></img>

    }
    </div>
)
}

export default Countries
