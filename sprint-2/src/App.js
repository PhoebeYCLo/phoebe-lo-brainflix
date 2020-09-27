import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pagelayout from './Pagelayout.jsx';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import VideoPage from './components/VideoPage/VideoPage';

const App = (props) => {
  return (
    <Pagelayout>
      <Switch>
        {/* <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/:videoId" render={(routeProps) => {
          return <Home {...routeProps} />
        }} /> */}
        
        <Route path="/" exact component={VideoPage} />
        <Route path="/upload" component={Upload} />
        <Route path="/videos/:id" render={(routeProps) => {
          return <VideoPage {...routeProps} />
        }} />
      </Switch>
    </Pagelayout>
  );
}

export default App;
