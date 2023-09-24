
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    
    const navigate = useNavigate();


    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }


    return (
        <div className='box'>
            <h4>Post of Id {id} </h4>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Click to see details</button>
            
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;