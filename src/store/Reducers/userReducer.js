const initialState = {
    users: [
        {id: '1', name: 'Shakil', address: 'Batkhela'}
    ]
  }
  
  const usersReducer=(state = initialState, action)=> {
    switch (action.type) {
        case 'ADD_USER':
            return {users:[action.payload, ...state.users]}
        case 'DELETE_USER':
        const newUser=state.users.filter(user=>user.id!==action.id)  
        return {users:newUser}  
        default:
        return state
    }
  }

  export default usersReducer