/**
 * Created by serge on 25/06/16.
 */
var React=require('react');
var UpdateActionCreator=require('../action/UpdateActionCreator');
var ButtonActionCreator=require('../action/ButtonActionCreator');
var ProgressPanel=require('./ProgressPanel');
var ProgressSelection=require('./ProgressSelection');
var ButtonPanel=require('./ButtonPanel');
var Grid=require('react-bootstrap/lib/Grid');
var Row=require('react-bootstrap/lib/Row');
var Col=require('react-bootstrap/lib/Col');

var Application=React.createClass({

   componentDidMount: function()
   {
      //load initial values from API here on startup
      if (!this.props.debug)
         UpdateActionCreator.getProgressBarData();
   },


   handleProgressSelection: function(eventKey)
   {
      UpdateActionCreator.setSelectedProgressBar(eventKey);
   },

   /**
    * @returns {XML}
    */
   render: function()
   {
      return (<Grid>
         <Row><h2>Progress Bars Demo</h2></Row>
         <Row><h5>By Serge Merzliakov</h5></Row>
         <Row>
            <ProgressSelection selectionHandler={this.handleProgressSelection}/>
         </Row>
         <Row>
            <ProgressPanel/>
         </Row>
         <Row>
            <ButtonPanel/>
         </Row>
      </Grid>);
   }
});

module.exports=Application;

