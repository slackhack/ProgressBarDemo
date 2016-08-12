var React=require('react');
var Button=require('./Button');
var ButtonGroup=require('react-bootstrap/lib/ButtonGroup');
var ButtonToolbar=require('react-bootstrap/lib/ButtonToolbar');
var DemoStore=require('../store/DemoStore');

var ButtonPanel=React.createClass({

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
      var buttons=null;
      if(this.state.progressData != null)
      {
         var i=0;
         var clickHandler=this.buttonClick;
         buttons=this.state.progressData.buttons.map(function(delta){
            return <Button key={i++} label={delta} delta={delta}/>;
         });
      }

      return (
         <ButtonToolbar>
            {buttons}
         </ButtonToolbar>
      );
   }
});

module.exports=ButtonPanel;