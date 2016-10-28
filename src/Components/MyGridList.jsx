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
  }

  componentDidMount() {
    $.get(this.props.source, function (result)  {
      this.setState({
        issues: result
      });
    }.bind(this));

  }


  render() {
    return (
        <GridList
        >
        {this.state.issues.map((tile) => (

          <GridTile
            key={tile.id}
            title={tile.title}
            subtitle={<span>by <b>{tile.user.login}</b></span>}
            actionIcon={<IconButton> <StarBorder color="white" /> </IconButton>}
          >
          <img src={'https://placeimg.com/320/200/tech?' + tile.id} />
          </GridTile>
        ))}
        </GridList>
      );
  }
}
