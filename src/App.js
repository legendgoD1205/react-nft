import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from './theme';
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
  }
}
