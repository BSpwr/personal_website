import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './pages/home_page';
import Counter from './components/counter';
import Resume from './components/resume';

export default class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/counter' component={Counter} />
              <Route path='/resume' component={Resume} />
            </Switch>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
