import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import RockPicker from '../RockPicker/RockPicker'
class App extends React.Component{

 

  componentDidMount(){
    console.log( 'in componentDidMount, props:', this.props );
  } // end componentDidMount

  render() {
    console.log( this.props );
    return (
      <div className="App">
        <header className="App-header">
          <h2>This App Rocks</h2>
          <p>Rocks: { this.props.reduxState }</p>
        </header>
        <RockPicker />

      </div>
    ); // end return
  } //end render
} // end component

const putReduxStateOnProps = ( reduxState ) => ( { reduxState } );

export default connect( putReduxStateOnProps )(App);
