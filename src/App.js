import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-title">Место для фото</p>
        <p>It's me: {this.props.username}</p>
        <p>
          У тебя {this.props.photos.length} за {this.props.year} год
        </p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    username: store.user.name,
    photos: store.page.photos,
    year: store.page.year,
  };
};

export default connect(mapStateToProps)(App);
