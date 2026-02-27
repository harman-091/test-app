import react, {Component} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
    render () {
        return (
            <Router>
                <div className='App'>
                    <ul className='App-header'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route exact path='/About' element={<About/>}></Route>
                        <Route exact path='/Contact' element={<Contact/>}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
export default App;