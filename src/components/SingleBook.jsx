import { Component } from "react";
import { Card,Button} from "react-bootstrap";

import {Col} from "react-bootstrap";


class SingleBook extends Component{
  state={
    Selected: false
  }
  render(){
      return (
        <Col lg={3} >
    <div className='mt-4 px-2 mx-2'>   
      <Card onClick={e=>this.setState({Selected: !this.state.Selected})} 
      style={{ width: "18rem"},{border:this.state.Selected?'3px solid orange': 'none'}}>
        <Card.Img variant="top" src={this.props.data.img} style={{height:"18rem"}}/>
        <Card.Body style={{height: "12rem"}}>
          <Card.Title>{this.props.data.title}</Card.Title>
           <Button variant="success">Click</Button>
        </Card.Body>
      </Card>
    </div>
    </Col>
  );
      }

};

export default SingleBook
