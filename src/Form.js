import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();
    const storeUser = (e) =>{
        e.preventDefault()
        console.log(name, address)
        dispatch({type:"ADD_USER", payload:{id: uuidv4(), name, address}})
        setName("")
        setAddress("")
    }
    return (
        <div>
            <form className="mt-5" onSubmit={storeUser}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-block" value="Add User" />
                </div>
            </form>
        </div>
    )
}

export default Form
