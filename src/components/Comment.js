import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Comment = ({commentObj})=>{
  return(
    <ListGroup.Item>{commentObj.comments}</ListGroup.Item>
  )
}

export default Comment;