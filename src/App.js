import logo from './logo.svg';
import './App.css';
import BreadCrumps from './Components/BreadCrumps';
import Tabular from './Components/Tabular';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import Sidemenu from './Components/Sidemenu';

function App() {
  return (
    <div className="App">
      <div>
      <Sidemenu />
      </div>
      <div>
      <Navbar />
      <BreadCrumps />
      <Tabular />
      <Pagination />
      </div>
    </div>
  );
}

export default App;
