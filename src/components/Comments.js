import React from "react";
import Comment from "./Comment";

function Comments ({ video, hideComments }) {

    const showComments = video.comments.map(comment => <Comment key={comment.id} user={comment.user} comment={comment.comment}/>);

    return (
        <div>
            <h3>{video.comments.length} Comments</h3>
            <div>
                {hideComments ? "" : showComments}
            </div>
        </div>
    )
  }
  
export default Comments;