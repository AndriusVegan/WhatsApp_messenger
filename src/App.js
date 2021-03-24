import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import firebase from "./firebase";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
