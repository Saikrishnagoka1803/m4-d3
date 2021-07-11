import { Component } from "react";
import { Container,Row} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
    
    state={
        searchText : ''
    }
    
    render()
    {
        return (
        <Container>
            <input type='text' 
            placeholder='search' 
            value={this.state.searchText}
            onChange={e => this.setState({
                searchText:e.target.value})} />
         
            <Row >
                {this.props.book.slice(0,50).filter(e=>e.title.toLowerCase().includes(this.state.searchText)).map(ele => (<SingleBook data={ele}/>))}
            </Row>
        </Container>
         )
}
}

export default BookList