import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './component/Landing';
import Navbar from './component/Navbar';
import Edit from './component/Edit';
import Add from './component/Add';
import store from './Store'
import Home from './component/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Navbar/>
              <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/user" component={Landing} />
              </Switch>
            </div>
      </Router>
      </Provider>
  );
}

export default App;
