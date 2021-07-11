//import { Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'


const WarningSign = function (props) {
  return (
    <Alert className= {'mt-4'} variant="warning">
      <Alert.Heading>{props.text}</Alert.Heading>
      
    </Alert>
  );
};

export default WarningSign;
