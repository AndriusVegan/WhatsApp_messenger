import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import useState from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [{user}, dispatch] = useStateValue;
  return (
    <div className="app">
    {!user ? (
      <h1>
      <Login />
      </h1> 
    ) : (
    <div className="app__body">
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>
            <Route path="/">
              <Sidebar />
            </Route>
          </Switch>
        </Router>
      </div>
    )}  
    </div>
  );
}

export default App;
