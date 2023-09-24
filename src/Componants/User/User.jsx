

import PropTypes from 'prop-types';
import './user.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id, email, phone} = user;
    
    return (
        <div className='box'>
            <h2>Name : {name}</h2>
            <p>E-Mail : {email} </p>
            <p>Phone : {phone} </p>
            <Link to={`/user/${id}`}>Show details</Link>
            
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
    
};

export default User;