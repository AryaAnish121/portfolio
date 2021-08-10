import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import Projects from './project/Projects';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
