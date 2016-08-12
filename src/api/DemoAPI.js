var DemoAPI={

   // hardcoded for now...
   host: 'http://pb-api.herokuapp.com/bars',

   /**
    * async call to backend service.
    * @param callback invoked with customer data
    */
   getData: function(callback)
   {
      this.fetchGet(this.host, callback);
   },


   /**
    * Asynchronous
    * common REST AJAX API functionality
    * @param full_url
    * @param responseCallback called with data when it is received - async
    */
   fetchGet: function(full_url,
                      responseCallback)
   {
      var myInit={
         method: 'GET',
         cache: 'default'
      };

      fetch(full_url, myInit)
         .then(function(response)
         {
            return response.json();
         })
         .then(function(data)
         {
            responseCallback(data);
            console.log("ajax call to " + full_url + " done.");
         });
   }
};


module.exports=DemoAPI;