import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import fetchUsers from "./store/Actions/userAction";
const Users = () => {
    const { users } = useSelector(state => {
        return state.users
    });
    console.log(users)
    const { allUsers } = useSelector(state => {
        return state.api
    });
    console.log(allUsers);
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    
    return (
        <div>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?users.map(data=>(
                          <tr key={data.id}>
                          <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                          <td><button className="btn btn-danger" onClick={(e)=>dispatch({type:'DELETE_USER', id:data.id})}>Delete</button></td>
                      </tr>
                    )):"No Record"}
                  
                  
                </tbody>
            </table>
        </div>
    )
}

export default Users
