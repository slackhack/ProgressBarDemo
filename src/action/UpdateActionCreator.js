var AppDispatcher=require('../dispatcher/AppDispatcher');

var UpdateActionCreator={

   /**
    * Change selected Progress Bar
    * @param index
    */
   setSelectedProgressBar: function(index)
   {
      var action={
         type: 'selection',
         data: index
      };
      AppDispatcher.dispatch(action);
   },


   getProgressBarData: function()
   {
      var action={
         type: 'update',
         data: 'progress' //future data may include other kinds of updates - a bit of overkill, I know
      };

      AppDispatcher.dispatch(action);
   }

};

module.exports=UpdateActionCreator;