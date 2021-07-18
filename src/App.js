import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlexboxPage from './components/FlexboxPage';
import Body from './components/body';
import ScrollToTop from './components/ScrollToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Bimali Wickramasinghe</title>
            </Helmet>
      <ScrollToTop/>
      <FlexboxPage/>
      <Switch>
        <Route path='/' exact component={Body}/>
        <Route path='/body' component={Body}/>
        <Route path='/ill' component={Body}/>
      </Switch>

      </div>
  );
}

export default App;
