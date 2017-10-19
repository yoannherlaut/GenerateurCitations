import React from 'react';
import Citation from './Citation';
import citations from '../citations';

class App extends React.Component {

  state = {};

  ComponentWillMount(){
    this.genererCitation();
  }

  genererCitation = event => {
    const idArray = Object.keys(citations);
    const randomId = idArray[Math.floor(Math.random() * idArray.length)]

    if (this.state.citation === citations[randomId].citation) {
      this.genererCitation();
      return;
    }
    this.setState(citations[randomId]);
  };

  render(){
    return(
      <div>
        <Citation details={this.state}/>
        <button onClick={e => this.genererCitation(e)}>Une autre citation</button>
      </div>

    )
  }
}

export default App;
