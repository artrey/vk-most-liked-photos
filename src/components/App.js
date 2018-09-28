import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <PageContainer />
        <UserContainer />
      </div>
    );
  }
}
