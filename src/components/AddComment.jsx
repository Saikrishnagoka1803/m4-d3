import { Component } from "react";
import { Form,Button} from "react-bootstrap";

class AddComment extends Component {
  state = {
    postcomments: {
      comment: "",
      rate: 1,
      elementId: this.props.uniq,
    },
  };

  const send = async(e) =>{
    e.preventdefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.uniq,
        {
            method:'POST',
            body: JSON.stringify(this.state.postcomments),
          headers: {
              'content-type': 'application/json',
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjYxMjIxMzEsImV4cCI6MTYyNzMzMTczMX0.DgE4r_8sbcNh_0XHWV4h5_ob2iiEEDUHY23N_4E-DKg",
          },
        }
      );
      if(response.ok){
          alert('Comment Added Successfully')
      }
      else{
          alert('Oops Sorry!!')
      }
    } catch (error) {
      
    }
}

  render() {
    return (
      <Form onSubmit={this.send} className="mt-2">
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
        <Button type='submit'  variant='success'>Add</Button>
      </Form>
    );
  }
}
export default AddComment;
