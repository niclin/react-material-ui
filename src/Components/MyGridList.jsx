/*
 * 引入 React 程式庫
 */
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';


/*
 * 引入 Material UI 元件
 */
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';


export class MyGridList extends Component {
  render() {
    return (
        <GridList
        >
          <GridTile
            key="0"
            title="我的文章 1"
          >
          <img src="https://placeimg.com/320/200/tech" />
          </GridTile>
        </GridList>
      );
  }
}
