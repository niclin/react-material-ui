/*
 * 引入 React 程式庫
 */
import React from 'react';
import { render } from 'react-dom';

/*
 * 引入 React Material UI 元件程式庫
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MyAppBar } from './Components/MyAppBar';
import { MyGridList } from './Components/MyGridList';
import { MyPaper } from './Components/MyPaper';

import $ from 'jquery';

const muiTheme = getMuiTheme();

const handleClick =(title, body) => {
  $(window).trigger('postUpdate', [title, body]);
};

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <MyAppBar />
        <MyPaper />
        <MyGridList
          handleClick={handleClick}
          source="https://api.github.com/repos/niclin/blog/issues"
          cellHeight={200}
          />
      </div>
  </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('content')
);
