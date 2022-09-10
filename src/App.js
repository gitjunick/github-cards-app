import React from 'react';
import './App.css';
import CardList from './components/CardList';

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
        <CardList />
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
