"use strict";
var React=require('react');
var Button=require('./Button');
var ButtonGroup=require('react-bootstrap/lib/ButtonGroup');
var ButtonToolbar=require('react-bootstrap/lib/ButtonToolbar');
var DemoStore=require('../store/DemoStore');

/**
 * Container for all dynamically generated buttons
 */
var ButtonPanel=React.createClass({

   getInitialState: function()
   {
      return {
         progressData: {"buttons":[],"bars":[],"limit":0}
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
      var i=0;
      var buttons=this.state.progressData.buttons.map(function(delta)
      {
         return <Button key={i++} label={delta} delta={delta}/>;
      });

      return (
         <ButtonToolbar>
            {buttons}
         </ButtonToolbar>
      );
   }
});

module.exports=ButtonPanel;