jest.dontMock('../src/component/ProgressBar.js');

var React = require('react');
var ReactDOM=require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ProgressBar = require('../src/component/ProgressBar.js');

describe('ProgressBar Percentage', function() {
   it('Checks percentage shown is correct', function() {

      var index = 0;
      var value = 50;
      var max = 100;

      var bar = TestUtils.renderIntoDocument(<ProgressBar index={index} key={index} value={value} max={max}/>);
      const barNode = ReactDOM.findDOMNode(bar);

      console.log(barNode.textContent);
      expect(barNode.textContent).toEqual(value + "%");
   });
});
