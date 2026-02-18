import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Propp from './propp';
import Buttonss from './Buttonss';
import ConButton from './ConButton';
import PrgBar from './PrgBar';
import ColRow from './ColRow';
import Cardd from './Cardd';
import DropDownn from './DropDownn';
import Listgroupp from './Listgroupp';
import Alertt from './Alertt';
import Navbar from './Navbar';
import './Navbar.css';




function App() {
  return (
    <div>
        
        <Navbar/>
        <hr></hr>
        <hr></hr>
        <Profile/>
        <hr></hr>
        <hr></hr>
        <Cardd/>
        <hr></hr>
        <hr></hr>
        <DropDownn/>
        <hr></hr>
        <hr></hr>
        <Listgroupp/>
        <hr></hr>
        <hr></hr>
        <Alertt/>
        <hr></hr>
        <hr></hr>
        <Propp name="John" ca="Superman"/>
        <Propp name="Jane" ca="Batman"/>
        <Propp name="Bob" ca="Wonder Woman"/>
        <p>New data</p>
        <Buttonss/>
        <ConButton/>
        <PrgBar/>
        <hr></hr>
        <hr></hr>
        <ColRow/>
        <hr></hr>
        <hr></hr>
        <p>Old data</p>
    </div>
  );
}

export default App;
