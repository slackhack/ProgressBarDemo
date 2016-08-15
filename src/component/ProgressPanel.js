var React=require('react');
var ProgressBar=require('./ProgressBar');
var Panel=require('react-bootstrap/lib/Panel');
var DemoStore=require('../store/DemoStore');

/**
 * Container for all progress bars
 */
var ProgressPanel=React.createClass({

   getInitialState: function()
   {
      return {
         progressData: {"buttons":[],"bars":[],"limit":0}
      };
   },

   componentDidMount: function()
   {
      DemoStore.addUpdateListener(this.onProgressBarUpdate);
      DemoStore.addDeltaListener(this.onDeltaUpdate);
   },

   componentWillUnmount: function()
   {
      DemoStore.removeUpdateListener(this.onProgressBarUpdate);
      DemoStore.removeDeltaListener(this.onDeltaUpdate);
   },

   /**
    * Called on delta action, which is fired by a button click
    */
   onDeltaUpdate: function()
   {
      var delta=DemoStore.getCurrentDelta();
      var i=DemoStore.getCurrentProgressBarIndex();
      var value=this.state.progressData.bars[i];
      value+=delta;
      if(value < 0)
         value=0;
      this.state.progressData.bars[i]=value;

      this.setState({
         progressData: this.state.progressData
      });
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
      var maxValue=this.state.progressData.limit;
      var progressBars=this.state.progressData.bars.map(function(value)
      {
         return <ProgressBar index={i} key={i++} value={value} max={maxValue}/>;
      });

      return (
         <Panel>
            {progressBars}
         </Panel>
      );
   }
});

module.exports=ProgressPanel;