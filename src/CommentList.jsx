//CommentList.js
import React from 'react';
import Comment from './Comment';
import style from './style';
const CommentList = ({data}) =>
    <div style={ style.commentList }>
        {data.map(comment =>
            <Comment author={ comment.author } key={ comment['_id'] }>
                { comment.text}
            </Comment>)
        }
    </div>;
export default CommentList;
