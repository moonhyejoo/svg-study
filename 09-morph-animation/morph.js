
$(function() {
  
  // big guggie
  var horn = Snap('#horn'),
      shadow = Snap('#shadow'),
      body = Snap('#body'),
      body2 = Snap('#body_2'),
      eyewhite = Snap('#eye-white'),
      eyedark = Snap('#eye-dark'),
      reflection = Snap('#reflection'),
      fringe = Snap('#fringe'),
      horn1 = Snap('#horn_1'),
      arm = Snap('#arm'),
      hiddenSpot = Snap('#hidden-spot'),
      hiddenLeg = Snap('#hidden_leg'),
      hiddenTongue = Snap('#hidden-tounge');

  var $body = $('#body'),
      $arm = $('#arm'),
      $hiddenSpot = $('#hidden-spot'),
      $hiddenLeg = $('#hidden_leg'),
      $spot = $('#spot'),
      $spot1 = $('#spot_1'),
      $spot2 = $('#spot_2'),
      $reflection1 = $('#reflection_1'),
      $elbow = $('#elbow'),
      $wrapper = $('.wrapper'),
      $headerText = $('.wrapper h2'),
      $subHeader = $('.wrapper p');

      $body.css({'fill': '#EB4E28'});
      $arm.css({'fill': '#C54628'});
      $hiddenSpot.css({'fill': '#CE4027'});
      $hiddenLeg.css({'fill': '#CE4027'});

  //small guggie
  var shadow1 = Snap('#shadow_1'),
      tongue = Snap('#tongue'),
      fringe1 = Snap('#fringe_1'),
      leg = Snap('#leg'),
      body1 = Snap('#body_1'),
      spot3 = Snap('#spot_3'),
      arm1 = Snap('#arm_1'),
      eyewhite1 = Snap('#eye-white_1'),
      eyedark1 = Snap('#eye-dark_1'),
      reflection2 = Snap('#reflection_2'),
      horn2 = Snap('#horn_2'),
      horn3 = Snap('#horn_3');

  var $leg = $('#leg');

  // click triggers
  var bigGuy = $('#big');
  var speed = 500;
  var morph1 = true; //big
  var morph2 = false; //small

  bigGuy.on('click', function() {

    if(morph1){

      $reflection1.hide();
      $spot.hide();
      $spot1.hide()
      $spot2.hide()
      $elbow.hide();

      $headerText.animate({opacity:0}).queue(function(){
        $(this).text('Grow me!').dequeue()
      }).animate({opacity:1});  

      $subHeader.animate({opacity:0}).queue(function(){
        $(this).text('(click him again)').dequeue()
      }).animate({opacity:1});

      body.animate({d:"M90.7 413.1s22.7 5.5 20.3 27.6c-2.4 22.1-15.8 35.9-44.3 39.3 0 0-9.7 13.9-13.9 12.9s-4.4-12.7-4.4-12.7-10.2-2.4-14.3-5-4.1 2.7-1.3 2.4 5.4 1.7 3.3 3c-2 1.3-16.9 2-26.1-15.8s1.2-64.2 23.1-79.6 40.2-8.6 46.4-1.8c6.2 6.8 9.3 16.4 8.8 25.1l-6.8 4.1-.1 5.7c.2-.1 3.3 4.8 9.3-5.2z", fill: "#AD4128"}, speed, mina.easein);
      horn.animate({d:"M37.1 383.4s-1.8-5.6 0-7 5.6 4.7 5.6 4.7l-5.6 2.3z"}, speed, mina.easein);
      horn1.animate({d:"M38 387.9s1.2 8.5-7.8 9.5c0 0-9-10.6-9.1-12.7-.2-2.3 16.9 2.5 16.9 3.2z"}, speed, mina.easein);
      shadow.animate({d:"M62.5 492.8c-18.8 0-34.1-1-34.1-2.3s15.3-2.3 34.1-2.3 34.1 1 34.1 2.3-15.3 2.3-34.1 2.3z"}, speed, mina.easein);
      eyewhite.animate({d:"M84.3 397.9c0 11.8-9.8 21.4-22 21.4s-22-9.6-22-21.4c0-11.8 9.8-21.4 22-21.4s22 9.5 22 21.4z"}, speed, mina.easein);
      eyedark.animate({d:"M79.5 387.9c3.2 4.7 4.1 9.6 2 11s-6.3-1.3-9.4-6-4.1-9.6-2-11c2-1.3 6.3 1.4 9.4 6z"}, speed, mina.easein);
      spot3.animate({d:"M79.5 387.9c3.2 4.7 4.1 9.6 2 11s-6.3-1.3-9.4-6-4.1-9.6-2-11c2-1.3 6.3 1.4 9.4 6z"}, speed, mina.easein);
      arm.animate({d:"M35.2 471.7s-5.2-10.5-6.7-12.9c-1.5-2.4-.9-8.3 3-13s6.9-12 4.5-21.9c0 0 6.6 11.2-2.2 21.4-5.9 6.9-2.8 11.5-2.2 13.6s3.6 12.8 3.6 12.8z", fill: "#8D341F"}, speed, mina.easein);
      hiddenSpot.animate({d:"M37 397.3c-3.7 4.5-8.8 6.4-11.3 4.2-2.5-2.1-1.5-7.4 2.2-11.9s8.8-6.4 11.3-4.2 1.6 7.5-2.2 11.9z", fill: "#8D341F"}, speed, mina.easein);
      hiddenLeg.animate({d:"M73.5 478.9s-2.8 9.1-5.2 9.3c-2.4.2-5.9-8.5-5.9-8.5s6.8-2.6 11.1-.8", fill: "#8D341F"}, speed, mina.easein);
      fringe.animate({d:"M53.1 376.7c-.2.4.3-6.1 4.9-7.4 4.6-1.3 7.3 2.6 7.3 2.6s-7.5-3.6-12.2 4.8z"}, speed, mina.easein);
      reflection.animate({d:"M79.4 392.7c1.2 1.6 1.7 3.2 1.1 3.7-.6.4-2-.5-3.2-2.1-1.2-1.6-1.7-3.2-1.1-3.7.6-.4 2 .5 3.2 2.1z"}, speed, mina.easein);
      morph1 = false;
      morph2 = true;
    }else if(morph2){
      $reflection1.delay(speed).fadeIn(10);
      $spot.delay(speed).fadeIn(10);
      $spot1.delay(speed).fadeIn(10);
      $spot2.delay(speed).fadeIn(10);
      $elbow.delay(speed).fadeIn(10);

      $headerText.animate({opacity:0}).queue(function(){
        $(this).text('Shrink me!').dequeue()
      }).animate({opacity:1}); 

      $subHeader.animate({opacity:0}).queue(function(){
        $(this).text('(and again)').dequeue()
      }).animate({opacity:1});

      body.animate({d:"M166.3 237.8s-58.6-59-24.2-129.5 131.2-97 204.3-44.1 105.4 137 105.4 193.7c0 0 38 64.1 38 93.4s-22.8 57.7-37 73.1c-14.2 15.5-39.6 39.6-53.5 38-13.9-1.6-30-5.2-22.2-15.8 0 0 2.3-3.4 10.3-2.6 8.1.8 1-14.3-.8-11s-5.8 12.7-9.8 10.6c-4-2.1-5.8-11.6-2.9-19 0 0-5.5 6.4-8.7 6.8 0 0 7.4 55.4-3.9 60.3-11.3 4.8-25.1-1.9-47.4-35.4 0 0-25.5 5.5-32.2 5.5 0 0-15.1 31.8-25.5 31.4-10.3-.4-15.1-15.3-19.7-29.4 0 0-74.8-8.1-107.6-71.5s5.2-127.9 23.2-141.1c0 0 37.1 16.4 38.7-7.7l-24.5-5.7z", fill: "#EB4E28"}, speed, mina.easein);
      horn.animate({d:"M167.3 73.7s-5.3-24.1 0-30.6 28.6 9.7 28.6 9.7-19.3 10.9-28.6 20.9z"}, speed, mina.easein);
      horn1.animate({d:"M299.8 45.9s9.9 28.8 43.8 20.2c0 0 2.8-53.9-4.3-56.9s-39.5 36.7-39.5 36.7z"}, speed, mina.easein);
      shadow.animate({d:"M301.3 495c-35.9 0-65.1-1.5-65.1-3.3 0-1.8 29.1-3.3 65.1-3.3s65.1 1.5 65.1 3.3c0 1.8-29.1 3.3-65.1 3.3z"}, speed, mina.easein);
      eyewhite.animate({d:"M346.7 148.8c0 55.3-46.8 100.1-104.6 100.1s-104.6-44.8-104.6-100.1S184.3 48.7 242 48.7s104.7 44.8 104.7 100.1z"}, speed, mina.easein);
      eyedark.animate({d:"M227.1 236.8c-12.3 11.5-39.3 2.5-60.2-20s-27.9-50.1-15.5-61.5 39.3-2.5 60.2 20 27.9 50 15.5 61.5z"}, speed, mina.easein);
      arm.animate({d:"M373.8 424.7S384.9 384 390 376s7.1-26-6.2-41.9c-13.3-15.9-32.2-46.8-29.9-73.5 0 0-7.2 37.6 22.1 71.8 19.8 23 9.2 38.5 7.5 45.5-1.6 7.2-9.7 46.8-9.7 46.8z", fill: "#C54628"}, speed, mina.easein);
      hiddenSpot.animate({d:"M376 135.5s7.2-6.9 16 6.4-2.3 22.3-12 11-4-17.4-4-17.4z", fill: "#CE4027"}, speed, mina.easein);
      hiddenLeg.animate({d:"M414.2 137.3s-28 25.5-8.5 56.2 42.5 35.3 42.5 29.4c0-9.2-18.2-67.8-34-85.6z", fill: "#CE4027"}, speed, mina.easein);
      fringe.animate({d:"M200.1 38.3s30.8-16.9 66.2 5.6c0 .1-27.9-43.8-66.2-5.6z"}, speed, mina.easein);
      reflection.animate({d:"M230.3 201.4c-3.5 3.1-14.9-4.2-25.5-16.2s-16.4-24.2-12.9-27.3c3.5-3.1 14.9 4.2 25.5 16.2s16.4 24.2 12.9 27.3zM181.1 209.5c0 4.4-3.6 8.1-8.1 8.1s-8.1-3.6-8.1-8.1c0-4.4 3.6-8.1 8.1-8.1s8.1 3.6 8.1 8.1z"}, speed, mina.easein);
      morph1 = true;
      morph2 = false;

      morph1 = true;
      morph2 = false;
    }
    
  })
})


