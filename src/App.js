import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  // constructor
  // this
  // render -- required
  render() {
    return (
      <div>
        <div className="header">
        {this.props.title}
        </div>
        <Card />
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
