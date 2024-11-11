import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Comment = ({commentObj})=>{
  return(
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
      {commentObj.comments}
        <div className="d-flex gap-2">
          <Button variant="outline-dark" size="sm">수정</Button>
          <Button variant="outline-danger" size="sm">삭제</Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default Comment;