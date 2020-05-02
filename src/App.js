import React, { Component } from 'react';
import './App.scss';
import { GraphicsContainer } from './Components/Graphics/GraphicsContainer';
import { SideMenu } from './Components/SideMenu/SideMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actives: {
        heap: false,
        gnome: false,
      }
    }
  }

  handleClick = (type) => {
    const actives = this.state.actives;
    actives[type] = !actives[type];
    this.setState({ actives });
  }

  render() {
    return (
      <div className="App">
        <GraphicsContainer actives={this.state.actives} />
        <SideMenu actives={this.state.actives} chooseSort={this.handleClick.bind(this)} />
      </div>
    )
  }

}

export default App;
