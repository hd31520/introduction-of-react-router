import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'


const Users = () => {
    const users = useLoaderData()
    
    return (
        <div>
            <h2> Users {users.length} </h2>
            <p>This is from Users</p>
            <div className="users">
            {
                users.map( (user, idx) => <User key={idx} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;