jest.dontMock('../src/component/ProgressBar.js');

var React = require('react');
var ReactDOM=require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ProgressBar = require('../src/component/ProgressBar.js');

describe('ProgressBar Percentage', function() {
   it('Checks percentage shown is correct', function() {

      var index = 0;
      var value = 50;
      var max = 110;

      var percentage = Math.round((value/max) * 100,0);

      var bar = TestUtils.renderIntoDocument(<ProgressBar index={index} key={index} value={value} max={max}/>);
      var barNode = ReactDOM.findDOMNode(bar);
      expect(barNode.textContent).toEqual(percentage + "%");
   });
});
