/**
 * Created by serge on 25/06/16.
 *
 * Basic Sales app demo
 */
var React=require('react');
var ReactDOM = require('react-dom');
var Application = require('./component/Application');

ReactDOM.render(<Application debug={false}/>, document.getElementById('demo-app'));

