import { type } from 'os'
import {createStore} from 'redux'

const initialState = {
    message : "Hello",
    count : 5
}
//reducer
const reducer = (state=initialState,action) => {
    if(action.type == "increment_ctr") {
        return {
            ...state,
            count: state.count+1
        }
    } else if(action.type == "update_ctr"){
        return {
            ...state,
           count: state.count + action.ctr
        }
    } else {
        return state
    }
    
}
const store = createStore(reducer)

store.subscribe(()=>{
    console.log("State in sbuscriber", store.getState())
})
console.log("State: ",store.getState()) 


store.dispatch({type:"increment_ctr"});
console.log("state",store.getState())

store.dispatch({type:"update_ctr", ctr:10});
console.log("state",store.getState())
