import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from './AddComment'

class CommentsArea extends Component {
  state = {
    commentsData: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
        
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjYxMjIxMzEsImV4cCI6MTYyNzMzMTczMX0.DgE4r_8sbcNh_0XHWV4h5_ob2iiEEDUHY23N_4E-DKg",
          },
        }
      );
      let comments = await response.json();
      console.log(comments);
      this.setState({ commentsData: comments });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
          <AddComment uniq={this.props.id} />
        <CommentList showcomments={this.state.commentsData} />
      </div>
    );
  }
}
export default CommentsArea;
