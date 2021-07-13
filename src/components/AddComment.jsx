import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    postcomments: {
      comment: "",
      rate: 1,
      elementId: this.props.uniq,
    },
  };

  send = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",

        {
          method: "POST",
          body: JSON.stringify(this.state.postcomments),
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjYxMjIxMzEsImV4cCI6MTYyNzMzMTczMX0.DgE4r_8sbcNh_0XHWV4h5_ob2iiEEDUHY23N_4E-DKg"
          }
        }
      );
      if (response.ok) {
        alert("Comment Added Successfully");
      } else {
        alert("Oops Sorry!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form className="mt-2">
        <Form.Label>
          <strong>Add Comments:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Comments"
          value={this.state.postcomments.comment}
          onChange={(e) =>
            this.setState({
              postcomments: {
                ...this.state.postcomments,
                comment: e.target.value,
              },
            })
          }
        />

        <Form.Label>RAte here:</Form.Label>
        <Form.Control
          as="select"
          value={this.state.postcomments.rate}
          onChange={(e) =>
            this.setState({
              postcomments: {
                ...this.state.postcomments,
                rate: e.target.value,
              },
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <Button onClick={() => this.send()} type="submit" variant="success">
          Post
        </Button>
      </Form>
    );
  }
}
export default AddComment;
