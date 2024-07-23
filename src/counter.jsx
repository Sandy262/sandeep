import React from 'react'
import { connect } from 'react-redux'
function counter(props) {
    console.log(props)
return (
    <div className="border border-2 m-2 p-2">
    <h2>Counter:{props.counterR.count}</h2>
    <button onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>
    </div>
)
}

export default connect(function(store){return store})(counter)
{
    //ikkada direct gaa connect(store==>store) gaa kuda pass cheyyochu
}
