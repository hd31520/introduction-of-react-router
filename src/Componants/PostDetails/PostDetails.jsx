import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {title, id , body} = post;
    console.log(post)
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate('/posts')
    }

    return (
        <div>
            <h3>Post details about :{id} </h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;