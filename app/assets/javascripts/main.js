$(document).ready(function(){
  "use strict"
  var project_download = $('.project_download'),
      download = $('.download'),
      button_screenshot = $('.button_screen'),
      button_art = $('.button_art'),
      art = $('.art'),
      screenshot = $('.screenshot'),
      lib  = $('ad-thumbs-lib'),
      slider = $('.ad-thumbs').find('ul');


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

  button_screenshot.on('click', function(){
    art.removeClass('active');
    slider.html('');
    slider.append(screenshot.children().clone());
    screenshot.addClass('active');
    slider.children().find('a').removeClass('ad-active');
    var galleries = $('.ad-gallery').adGallery();
  });

  button_art.on('click', function(){
    screenshot.removeClass('active');
    slider.html('');
    slider.append(art.children().clone());
    art.addClass('active');
    var galleries = $('.ad-gallery').adGallery();
  });
  // screenshot.on('click', function(){
  //   image_gallery.on('click', function(){
  //     console.log('ad');
  //     var mainImage = $(this).attr('src');
  //     display.attr({src: mainImage});
  //     return false;
  //   });
  //   if(!screenshot.hasClass('active')){
  //     screenshot.addClass('active'); //change button to active
  //     slider.html('');
  //     slider.append(slide_screenshot.clone());
  //     art.removeClass('active');
  //   }else{
  //     screenshot.removeClass('active');
  //     slider.html('');
  //     slider.append(slide_art.clone());
  //     art.addClass('active');
  //   }
  // });
  // art.on('click', function(){
  //   image_gallery.on('click', function(){
  //     console.log('ad');
  //     var mainImage = $(this).attr('src');
  //     display.attr({src: mainImage});
  //     return false;
  //   });
  //   if(!art.hasClass('active')){
  //     art.addClass('active');
  //     slider.html('');
  //     slider.append(slide_art.clone());
  //     screenshot.removeClass('active');
  //   }else{
  //     art.removeClass('active');
  //     slider.html('');
  //     slider.append(slide_screenshot.clone());
  //     screenshot.addClass('active');
  //     }
  // });

});