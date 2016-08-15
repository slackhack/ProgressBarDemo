var React=require('react');
var BootstrapBar=require('react-bootstrap/lib/ProgressBar');
var DemoStore=require('../store/DemoStore');

/**
 * Setup a Single Progress Bar with colour coded range
 */
var ProgressBar=React.createClass({

   getInitialState: function()
   {
      return {
         active: false
      };

   },

   componentDidMount: function()
   {
      DemoStore.addActivateListener(this.onActivate);
   },

   componentWillUnmount: function()
   {
      DemoStore.removeActivateListener(this.onActivate);
   },

   /**
    * We may be active
    */
   onActivate: function()
   {
      var newState=false;
      if(this.props.index == DemoStore.getCurrentProgressBarIndex())
         newState=true;

      this.setState({
         active: newState
      });
   },

   render: function()
   {
      var style="success";
      if(this.props.value >= this.props.max)
         style="danger";
      else if((this.props.max - this.props.value) < 30)
         style="warning";

      var percentage=Math.round((this.props.value / this.props.max) * 100.0, 0);

      if(this.state.active)
         return (
            <BootstrapBar striped active bsStyle={style} now={this.props.value} min={0} max={this.props.max}
                          label={`${percentage}%`}/>
         );
      else
         return (
            <BootstrapBar bsStyle={style} now={this.props.value} min={0} max={this.props.max} label={`${percentage}%`}/>
         );
   }
});

module.exports=ProgressBar;