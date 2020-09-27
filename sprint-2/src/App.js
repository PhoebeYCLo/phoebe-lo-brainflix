import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagelayout from './Pagelayout.jsx';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';

const App = (props) => {
  return (
    <Pagelayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/:videoId" render={(routeProps) => {
          return <Home {...routeProps} />
        }} />
      </Switch>
    </Pagelayout>
  );
}

export default App;
