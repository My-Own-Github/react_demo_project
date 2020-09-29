import React from 'react';
import './App.css';
import EmployesListPage from './employesListPage';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <MenuPage /> */}
        {/* <Route path='/' exact component={HomePage}></Route> */}
        <Route path="/">
          <Redirect to={'/employesList'} />
        </Route>
        <Route path='/employesList' component={EmployesListPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
