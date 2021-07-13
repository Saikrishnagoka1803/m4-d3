//import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/Navbar';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

import 'bootstrap/dist/css/bootstrap.min.css'
import horrors from './data/horror.json'

//import MuiAlert from "@material-ui/lab/Alert"

function App() {
  return(
    <>
    <MyNavbar/>
  <WarningSign text="Iam Warning Sign!!"/>
  <MyBadge text="warning Badge"/>
  <SingleBook data={horrors[140]}/>
  <BookList book={horrors}/>
  </>
  )
}
export default App;
