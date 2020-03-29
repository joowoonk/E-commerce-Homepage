const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case "SET_CURRENT_USER":
            return{
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }

}

export default userReducer


// {
//     type: string value that has bunch of actions 
//     payload: can be anything that could use as update state or passing an object, trasfer... really anything
// }