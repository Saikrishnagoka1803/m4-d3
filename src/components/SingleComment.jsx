import { ListGroup,Button } from "react-bootstrap"


const deleteComments = async(commentsId)=>{
    try {
        let resp = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + commentsId,
            {
            method:'DELETE',
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU1M2IzNTgxNzAwMTVjMjI2ZmEiLCJpYXQiOjE2MjYxMjIxMzEsImV4cCI6MTYyNzMzMTczMX0.DgE4r_8sbcNh_0XHWV4h5_ob2iiEEDUHY23N_4E-DKg"
              }
            }
          );
        if(resp.ok){
            alert('comment deleted')
        }
        else{
            alert('unsuccesful try again')
        }
    } catch (error) {
        console.log(error)
    }
}


const SingleComment = (props) => {
    
    return(<div ><ListGroup.Item key={props.pass._id} className='d-flex justify-content-between'>{props.pass.comment}
                <Button variant='danger' onClick={() => deleteComments(props.pass._id)}>Del</Button>
    </ListGroup.Item>
            </div>)
}
export default SingleComment