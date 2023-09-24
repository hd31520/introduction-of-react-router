import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name} = user;
    return (
        <div>
            <h2>Details about single User</h2>
            <h3>Nmae : {name} </h3>
            <p></p>
        </div>
    );
};

export default UserDetails;