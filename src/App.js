import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
            {/* <Login/> */}
          <Route path="/home">
            <Home/>
          </Route>
         {/* <Route path='/detail/:id' component={Detail}/> */}
         <Route path='/detail/:id' >

         <Detail/>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
