var AppDispatcher=require('../dispatcher/AppDispatcher');

var ButtonActionCreator={

   /**
    *
    * @param delta the offset to apply to currently selected progress bar
    */
   applyDelta: function(delta)
   {
      var action={
         type: 'delta',
         data: delta
      };

      AppDispatcher.dispatch(action);
   }
};

module.exports= ButtonActionCreator;