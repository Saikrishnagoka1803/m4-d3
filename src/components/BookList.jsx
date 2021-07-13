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
            <input className='mt-3 p-3 ml-3' type='text' key={this.props.book._id}
            placeholder='search with title names'  
            value={this.state.searchText}
            onChange={e => this.setState({
                searchText:e.target.value})} />
         
            <Row >
                {this.props.book.slice(0,50).filter(e=>e.title.toLowerCase().includes(this.state.searchText)).map(ele => (<SingleBook data={ele}  />))}
            </Row>
        </Container>
         )
}
}

export default BookList