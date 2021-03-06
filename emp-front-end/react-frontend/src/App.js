import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div className="container">
<Router>
     
      <div>
        <HeaderComponent/>
      </div>

      <switch>
      <Route path = "/" exact component = {ListEmployeeComponent}></Route>
      <Route path = "/employees" exact component = {ListEmployeeComponent}></Route>
      <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
      <Route path = "/update-employee/:id" component = {UpdateEmployee}></Route>
      <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
      </switch>

      <div>
        <FooterComponent/>
      </div>
    
  
</Router>
      
    </div>
  );
}

export default App;
