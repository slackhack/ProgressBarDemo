var AppDispatcher=require('../dispatcher/AppDispatcher');
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var DemoAPI=require('../api/DemoAPI');

// state
var reportData=null;
var currentProgressBarIndex=0; //default to first
var currentDelta=0;

/**
 * Call API and load all accounts
 * @returns {*}
 */
function loadDetails()
{
   DemoAPI.getData(emitDetailsChange);
}

/**
 * receive result of API call
 * @param data
 */
function emitDetailsChange(data)
{
   reportData=data;
   DemoStore.emit('update');
}


/**
 *
 * @param index index in bars array from API
 */
function setCurrentProgressBar(index)
{
   currentProgressBarIndex=index;
   DemoStore.emit('activate');
   //do not emit anything - button handlers should check this value to see which chart to update
}

function applyDelta(delta)
{
   currentDelta=delta;
   DemoStore.emit('delta');
}

/**
 *
 */
var DemoStore=assign({}, EventEmitter.prototype, {

   addUpdateListener: function(callback)
   {
      this.on('update', callback);
   },

   removeUpdateListener: function(callback)
   {
      this.removeListener('update', callback);
   },

   addDeltaListener: function(callback)
   {
      this.on('delta', callback);
   },

   removeDeltaListener: function(callback)
   {
      this.removeListener('delta', callback);
   },

   addActivateListener: function(callback)
   {
      this.on('activate', callback);
   },

   removeActivateListener: function(callback)
   {
      this.removeListener('activate', callback);
   },

   /**
    * Used for Unit testing. Not ideal - need a better way
    * @param data
    */
   testEmitDetailsChange: function(data)
   {
      reportData=data;
      DemoStore.emit('update');
   },

   /**
    * List of all accounts from API
    * @returns {*}
    */
   getReportData: function()
   {
      return reportData;
   },

   /**
    * return index of current progress bar
    * @returns {number}
    */
   getCurrentProgressBarIndex: function()
   {
      return currentProgressBarIndex;
   },

   getCurrentDelta: function()
   {
      return currentDelta;
   }
});

/**
 * Process certain actions
 * @param action
 */
function handleAction(action)
{
   switch(action.type)
   {
      case 'update':
         loadDetails();
         break;

      case 'selection':
         setCurrentProgressBar(action.data);
         break;

      case 'delta':
         applyDelta(action.data);
         break;
   }
}

// register action handler for the actions we care about
DemoStore.dispatchToken=AppDispatcher.register(handleAction);

module.exports=DemoStore;