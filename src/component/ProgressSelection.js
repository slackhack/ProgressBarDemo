var React=require('react');
var ProgressBar=require('./ProgressBar');
var DropdownButton=require('react-bootstrap/lib/DropdownButton');
var MenuItem=require('react-bootstrap/lib/MenuItem');
var DemoStore=require('../store/DemoStore');

/**
 * Dropdown menu to select which progress bar to control
 */
var ProgressSelection=React.createClass({

   getInitialState: function()
   {
      return {
         progressData: null
      };
   },

   componentDidMount: function()
   {
      DemoStore.addUpdateListener(this.onProgressBarUpdate);
   },

   componentWillUnmount: function()
   {
      DemoStore.removeUpdateListener(this.onProgressBarUpdate);
   },

   /**
    * progress bar data updated from API, save state and pass onto
    * children for rendering
    */
   onProgressBarUpdate: function()
   {
      this.setState({
         progressData: DemoStore.getReportData()
      });
   },

   /**
    *
    * @returns {XML}
    */
   render: function()
   {
      var progressBars=null;
      if(this.state.progressData != null)
      {
         var i = 0;
         var clickHandler=this.props.selectionHandler;
         progressBars=this.state.progressData.bars.map(function(value)
         {
            return <MenuItem key={i} onSelect={clickHandler} eventKey={i}>Progress Bar {++i}</MenuItem>;
         });
      }

      return (
         <DropdownButton bsStyle="primary" title="Select Progress Bar" key={1} id="progressSelector">
            {progressBars}
         </DropdownButton>
      );
   }
});

module.exports=ProgressSelection;