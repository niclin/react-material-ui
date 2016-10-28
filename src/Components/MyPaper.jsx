/*
 * 引入 React 程式庫
 */
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

/*
 * 引入 Material UI 元件
 */

 import Paper from 'material-ui/Paper';

 /*
 * 引入 Jquery 程式庫
 */

 import $ from 'jquery';


 export class MyPaper extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        body: ''
      };
 }
      componentDidMount() {

      }

      render() {
        return (
            <Paper
              zDepth={1}
            >
            {this.state.body}
            Hello  Paper
            </Paper>
          );
      }
    }

MyPaper.defaultProps = {

}
