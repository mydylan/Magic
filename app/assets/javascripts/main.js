$(document).ready(function(){
  "use strict"
  var project_download = $('.project_download'),
      download = $('.download'),
      screenshot = $('.button_screen'),
      art = $('.button_art'),
      slide_screenshot = $('.slide_screenshot').children(),
      slide_art = $('.slide_art').children(),
      slider = $('.slider'),
      display = $('.screen'),
      ad_gallery  = $('.ad_gallery'),
      image_gallery = $('.gallery');


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

  screenshot.on('click', function(){
    image_gallery.on('click', function(){
      console.log('ad');
      var mainImage = $(this).attr('src');
      display.attr({src: mainImage});
      return false;
    });
    if(!screenshot.hasClass('active')){
      screenshot.addClass('active'); //change button to active
      slider.html('');
      slider.append(slide_screenshot.clone());
      art.removeClass('active');
    }else{
      screenshot.removeClass('active');
      slider.html('');
      slider.append(slide_art.clone());
      art.addClass('active');
    }
  });
  art.on('click', function(){
    image_gallery.on('click', function(){
      console.log('ad');
      var mainImage = $(this).attr('src');
      display.attr({src: mainImage});
      return false;
    });
    if(!art.hasClass('active')){
      art.addClass('active');
      slider.html('');
      slider.append(slide_art.clone());
      screenshot.removeClass('active');
    }else{
      art.removeClass('active');
      slider.html('');
      slider.append(slide_screenshot.clone());
      screenshot.addClass('active');
      }
  });
  // GALLERY
  $(function(){
    ad_gallery.adGallery();
  });

});