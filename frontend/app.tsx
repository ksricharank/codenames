import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Game } from '~/ui/game';
import { Lobby } from '~/ui/lobby';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gameID: null };
    if (document.location.hash) {
      this.state.gameID = document.location.hash.slice(1);
    }
    if (window.selectedGameID) {
      this.state.gameID = window.selectedGameID;
    }
  }

  render() {
    let pane;
    if (this.state.gameID) {
      pane = <Game gameID={this.state.gameID} />;
    } else {
      pane = <Lobby defaultGameID={window.autogeneratedGameID} />;
    }

    return (
      <div id="application">
        <div id="topbar">
          <a href={'http://' + window.location.host}>
            <h1>BabyCode!</h1>
          </a>
        </div>
        <div id="topbar2">
          <a href={'http://' + window.location.host}>
            <h2>Sumaithri and Sricharan's Baby Gender Reveal</h2>
          </a>
        </div>
        {pane}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', event => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
