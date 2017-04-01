$(document).ready(function() {
  $('.readmore').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });
  $('.readless').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  });

 

$('.viewmore1').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click1').slideDown();
    $('.viewmore1').hide();
    $('.viewless1').show();
    $('.c2').hide('slow');
    $('.c3').hide('slow');
  });
  $('.viewless1').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click1').slideUp();
    $('.viewless1').hide();
    $('.viewmore1').show();
    $('.c2').show('slow');
    $('.c3').show('slow');
  });

  $('.viewmore2').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click2').slideDown();
    $('.viewmore2').hide();
    $('.viewless2').show();
    $('.c1').hide('slow');
    $('.c3').hide('slow');
  });
  $('.viewless2').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click2').slideUp();
    $('.viewless2').hide();
    $('.viewmore2').show();
    $('.c1').show('slow');
    $('.c3').show('slow');
  });

  $('.viewmore3').on('click', function(event){
        event.preventDefault();
    $('#show-this-on-click3').slideDown();
    $('.viewmore3').hide();
    $('.viewless3').show();
    $('.c1').hide('slow');
    $('.c2').hide('slow');
  });
  $('.viewless3').on('click', function(event){
        event.preventDefault();
        $('#show-this-on-click3').slideUp();
    $('.viewless3').hide();
    $('.viewmore3').show();
    $('.c1').show('slow');
    $('.c2').show('slow');
  });


    $('.back').click(function(){
      parent.history.back();
      return false;
    });

  var chart = new CanvasJS.Chart("chartContainer",
    {
      theme: "theme2",
      title:{
        text: "Marathon world record progression"
      },
      animationEnabled: true,
      axisX: {
        valueFormatString: "YYYY",
        interval:2,
        intervalType: "year"
        
      },
      axisY:{
        includeZero: false
        
      },
      data: [
      {        
        type: "line",
        //lineThickness: 3,        
        dataPoints: [
        { x: new Date(1908, 07, 24), y: 2.5518 },
        { x: new Date(1909, 01, 1), y: 2.5245 },
        { x: new Date(1909, 02, 12), y: 2.4652 },
        { x: new Date(1909, 05, 8), y: 2.4606 },
        { x: new Date(1909, 05, 26), y: 2.4231 },
        { x: new Date(1909, 08, 31), y: 2.4034 },
        { x: new Date(1913, 05, 12), y: 2.3816 },
        { x: new Date(1913, 05, 31), y: 2.3606 },
        { x: new Date(1920, 08, 22), y: 2.3235 },
        { x: new Date(1925, 10, 12), y: 2.2901 },
        { x: new Date(1935, 03, 31), y: 2.2749 },
        { x: new Date(1935, 04, 3), y: 2.2644 },
        
        ]
      }
      
      
      ]
    });

    chart.render();

$(window).scroll(function() {
        if ($('body').scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
     
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })




  });
// $(function() {
//   // on hamburger click
//   $('#hamburger').on('click', function() {
//     // show nav
//     $('header nav').slideToggle();
//   });