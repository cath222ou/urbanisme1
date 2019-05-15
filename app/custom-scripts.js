define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

    var map = app.map;

    // map.graphicsLayerIds.forEach(function(e){
    //   console.log(map.getLayer(e))
    // })

   // var affectation = map.getLayer('urbanisme_9286');
   // affectation.click(function(){
   //   console.log('allo')
   // })
   //  console.log(affectation)

    $('.searchGroup').addClass('searchExpanded');
    $('.searchGroup').removeClass('searchCollapsed');

    $('.accordion-header').on('click', function(){
        $('.searchGroup').addClass('searchExpanded');
        $('.searchGroup').removeClass('searchCollapsed');
    })

  });
});
