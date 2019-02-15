import React from 'react';
import SongList from './SongList';
import { Title } from './css/element.index';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Title>
            Redux-CSS
          </Title><hr/>
          <SongList/>
      </React.Fragment>
    );
  }
}

