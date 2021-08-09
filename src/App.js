import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import './App.css';
import Contact from './contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
