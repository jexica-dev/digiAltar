import "./App.css";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Layout from "./components/Layout/Layout.jsx";
import UserAltars from "./screens/UserAltars/UserAltars";
import Main from "./screens/Main/Main";


import { loginUser, registerUser, removeToken, verifyUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    try {
      const userData = await loginUser(loginData);
      setCurrentUser(userData);
      history.push('/myaltars');
    } catch (error) {
      return true ;
    }
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/myaltars');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
      <Layout user={currentUser} />
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin} handleLogout={handleLogout} />
        </Route>
        <Route path="/signup">
          <Signup handleRegister={handleRegister} />
        </Route>
        
        <Route path="/">
          <Main user={currentUser} handleLogout={handleLogout}/>
        </Route>
      </Switch>
      </DndProvider>
    </div>
  );
}

export default App;
