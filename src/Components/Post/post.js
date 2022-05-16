import React from "react";

const Post=({details})=>{
    return(
        <div>
            <div className="post-page">
                 <div className="row">
                    <h1>NAME:{details?.name}</h1>
                    <p>DESCRIPTION:{details?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;