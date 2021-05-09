import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="container">

      <div>
        <HeaderComponent/>
      </div>
      <ListEmployeeComponent />

      <div>
        <FooterComponent/>
      </div>

      
    </div>
  );
}

export default App;
