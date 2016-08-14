/**
 * Entry point for Progress Bar demo.
 */
var React=require('react');
var ReactDOM = require('react-dom');
var Application = require('./component/Application');

ReactDOM.render(<Application debug={false}/>, document.getElementById('demo-app'));

