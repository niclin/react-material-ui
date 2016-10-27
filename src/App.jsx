/*
 * 引入 React 程式庫
 */
import React from 'react';
import { render } from 'react-dom';

/*
 * 引入 React Material UI 元件程式庫
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkbaseTheme from 'material-ui/styles/baseThemes/darkbaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme(darkbaseTheme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBar title="App" />
    </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('content')
);
