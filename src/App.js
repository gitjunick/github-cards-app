import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

class App extends React.Component {
  // constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData, 
  //   };
  // }

  state = {
    profiles: [],
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }

  // this
  // render -- required
  render() {
    return (
      <div className="App">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
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
