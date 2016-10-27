/*
 * 引入 React 程式庫
 */
import React from 'react';
import { render } from 'react-dom';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export const MyAppBar = () => (
    <AppBar
        iconElementRight={
          <IconMenu
            iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
            }
          >
            <MenuItem primaryText="Help" />
          </IconMenu>
        }
        title="App" />

);
