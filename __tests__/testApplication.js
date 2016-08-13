//jest.dontMock('../src/component/Application.js');

var React = require('react');
var ReactDOM=require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Application = require('../src/component/Application.js');
var DemoStore = require('../src/store/DemoStore.js');
var AppDispatcher = require('../src/dispatcher/AppDispatcher.js');

describe('ProgressPanel Setup', function() {
   it('Checks creation of correct number of progress bars', function() {

      //mock up a call to the API
      var data = {"buttons":[24,37,-50,-20],"bars":[57,74,69],"limit":120};

      //create the progress panel
      var application = TestUtils.renderIntoDocument(<Application debug={true} />);

      //force a state update in the ProgressPanel, which will create the contents
      DemoStore.testEmitDetailsChange(data);
      //var barNode = ReactDOM.findDOMNode(progressPanel);

      // Check correct number of progress bars
      var progressBars = TestUtils.scryRenderedDOMComponentsWithClass(application, 'progress-bar');
      expect(data.bars.length).toEqual(progressBars.length);

      // Check correct number of buttons
      var buttons = TestUtils.scryRenderedDOMComponentsWithClass(application, 'btn-info');
      expect(data.buttons.length).toEqual(buttons.length);

   });
});
