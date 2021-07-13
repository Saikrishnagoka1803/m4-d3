import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup className='mt-2'>
            <p><strong>View Comments</strong></p>
          {this.props.showcomments.map((e) => (
            <SingleComment pass={e}/>
          ))}
        </ListGroup>
      </>
    );
  }
}
export default CommentList;
