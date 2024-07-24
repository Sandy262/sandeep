import React from 'react'
import { connect } from 'react-redux'
function counter(props) {
    console.log(props)
return (
    <div className="border border-2 m-2 p-2">
    <h2>Counter:{props.count}</h2>
    <button onClick={()=>{props.increment()}}>Increment</button>
    <button onClick={()=>{props.decrement()}}>Decrement</button>
    </div>
)
}
function mapStateToProps(state){
    return state.counterR
}
function mapDispatchToProps(dispatch){
    return{
        increment:()=>{dispatch({type:'INC'})},
        decrement:()=>{dispatch({type:'DEC'})},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(counter)