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
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import $ from 'jquery';


export class MyGridList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        issues: []
    };

    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    $.get(this.props.source, function (result)  {
      this.setState({
        issues: result
      });
    }.bind(this));

  }

  _handleClick(tile) {
      this.props.handleClick(tile.title, tile.body);
  }


  render() {
    return (
        <GridList
        >
        {this.state.issues.map((tile) => {
          var boundClick = this._handleClick.bind(this, tile);
          return (

          <GridTile
            key={tile.id}
            title={tile.title}
            onClick={boundClick}
            subtitle={<span>by <b>{tile.user.login}</b></span>}
            actionIcon={<IconButton> <StarBorder color="white" /> </IconButton>}
          >
          <img src={'https://placeimg.com/320/200/tech?' + tile.id} />
          </GridTile>
        )})}
        </GridList>
      );
  }
}
