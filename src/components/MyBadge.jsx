import { Badge } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const MyBadge = (props) => {
    return( <Badge variant="warning">{props.text}</Badge> )
}
export default MyBadge