import React, { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
function ABCD(){
    var params=useParams()
    console.log(params)
    var x=useLocation()
        console.log(x)
    var [queryParams,setQueryParams]=React.useState([]);
    useEffect(()=>{
        query.forEach(function(a){
            console.log(a)
            //setQueryParams([...queryParams,a])
            setQueryParams((prev)=>{return[...prev,+a]})
        })
    },[query])
    useEffect(()=>{
        query.entries(function(a){console.log(a)})
        var ent=query.entries()
        console.log(ent)//iterator vachindi
        for(var k of ent){
            console.log(k)
        }
    },[query])
    //http://localhost:3000/add/3/4/?a=200&&b=199
    var [query]=useSearchParams();
    console.log(query)
    query.entries(function(a){console.log(a)})
    return (
        //<div>Parametrized Routing{(+params.a)+(+params.b)}</div>
        <div className="border m-2 p-2">
            <h1>Parametrized Routing{(Number(params.a))+(Number(params.b))}</h1>
            <h1>Query Params Addition:{queryParams.toString()}</h1>{
            queryParams.length>0&&(<h1>Query Params Addition:{queryParams.reduce((a,b)=>a+b)}</h1>)
            }
            </div>
    )
}
export default ABCD