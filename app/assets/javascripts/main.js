$(document).ready(function(){
  "use strict"
  var project_download = $('.project_download'),
      download = $('.download');

  project_download.on('click', function(event){
      event.preventDefault;
      event.stopImmediatePropagation;
    if(!project_download.hasClass('active')){
      project_download.addClass('active');
      download.addClass('active');
    }else{
      project_download.removeClass('active');
      download.removeClass('active');
    };

  });


});