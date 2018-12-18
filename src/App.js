import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import CountdownTimer from './CountdownTimer';
import './App.css';

class App extends Component {
  state = { date: moment() }

  onChange = date => this.setState({ date: moment(date) })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div> Choose a date: </div>
          <DatePicker value={this.state.date.toDate()} onChange={this.onChange} clearIcon={null} />
          <CountdownTimer date={this.state.date} />
        </header>
      </div>
    );
  }
}

export default App;
