import React from 'react';
import style from './style';
import marked from 'marked';
const Comment = ({author, children}) => (
    <div style={ style.comment }>
        <h3>{author}</h3>
        <span dangerouslySetInnerHTML={{ __html: marked(children.toString()) }} />
    </div>
);
export default Comment;
