const initialState={
    todos:['get bmw','pay fee','get water']
}
function todoListReducer(state=initialState,action){
    if(action.type==='ADD_TODO'){
        return {...state,todos:[...state.todos,action.payload]}
        //action lo type vachinattu payload lo kothaga add chese data vasthundi
    }
    return state
}
export default todoListReducer