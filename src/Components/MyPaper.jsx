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
        $(window).bind('postUpdate', function(event, title, body) {
            this.setState({
              body: body
            });
        }.bind(this));
      }

      render() {
        return (
            <Paper id="test"
              zDepth={1}
            >
            <div dangerouslySetInnerHTML={{__html: this.state.body}} />
            </Paper>
          );
      }
    }

MyPaper.defaultProps = {

}
