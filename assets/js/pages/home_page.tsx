import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Navbar from '../components/navbar';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Navbar path={this.props.location.pathname} />
        <div className='container'>Nut</div>
      </div>
    );
  }
}
