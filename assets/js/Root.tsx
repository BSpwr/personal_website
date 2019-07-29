import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Navbar';
import HomePage from './pages';
import Counter from './components/Counter';

export default class Root extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <div className='container'>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/counter' component={Counter} />
            </Switch>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
