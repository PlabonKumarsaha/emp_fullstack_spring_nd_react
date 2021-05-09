import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="container">
<Router>
      <div className="container">
      <div>
        <HeaderComponent/>
      </div>

      <switch>
      <Route path = "/" exact component = {ListEmployeeComponent}></Route>
      <Route path = "/employees" exact component = {ListEmployeeComponent}></Route>
      <Route path = "/" exact component = {ListEmployeeComponent}></Route>
      
      </switch>

      <div>
        <FooterComponent/>
      </div>
      </div>
  
</Router>
      
    </div>
  );
}

export default App;
