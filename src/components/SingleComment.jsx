import { ListGroup,Button } from "react-bootstrap"


const SingleComment = (props) => {
    
    return(<><ListGroup.Item key={props.pass._id}>{props.pass.comment}</ListGroup.Item>
            <Button variant='danger' >Delete</Button></>)
}
export default SingleComment