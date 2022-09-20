import React, { useState } from "react";
import Comments from "./Comments";

function Details ({ video }) {

    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);
    const [hideComments, setHideComments] = useState(false);

    return (
        <div>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <p>
                <button onClick={() => setUpvotes(upvotes => upvotes + 1)}>{upvotes} 👍</button>
                <button onClick={() => setDownvotes(downvotes => downvotes + 1)}>{downvotes} 👎</button>
            </p>
            <p>
                <button onClick={() => setHideComments(!hideComments)}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
            </p>
            <hr></hr>
            <Comments video={video} hideComments={hideComments}/>
        </div>
    )
  }
  
export default Details;