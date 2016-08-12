var React=require('react');
var BootstrapButton=require('react-bootstrap/lib/Button');
var ButtonActionCreator=require('../action/ButtonActionCreator');

/**
 * click handler is passed in from parent
 */
var Button=React.createClass({


   handleClick: function()
   {
      ButtonActionCreator.applyDelta(this.props.delta);
   },

   render: function()
   {
      return (
         <BootstrapButton bsStyle="info" onClick={this.handleClick}>{this.props.label}</BootstrapButton>
      );
   }
});

module.exports=Button;