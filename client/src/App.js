import './App.css';
import { Switch, Route } from 'react-router';
import Login from './screens/Login/Login';


import Layout from './components/Layout/Layout.jsx';

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
