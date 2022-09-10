import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';
import { testData } from './dbData';

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData, 
    };
  }
  // this
  // render -- required
  render() {
    return (
      <div className="App">
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

// function App({title}) {
//   return (
//     <div className="header">
//       {title}
//     </div>
//   );
// }

export default App;
