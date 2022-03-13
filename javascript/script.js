$(document).ready(function(){
  $('#brand').hover(function(){
    $('#delani').css("display","block")
  },
    function(){
      $('#delani').css("display","none")
    });
  });
  
  // mouse

// $('#mouse-toggle').click(function(){
//   $('#mouse').slideToggle("fast");
// })

$('#clickable1').click(function(){
  $("#text1").show(function(){
    $("#text1").hide(slow);
  })
  
});

$('#clickable2').click(function(){
  $("#text2").show(function(){
    $("#text2").hide(slow);
  })
  
});

$('#clickable3').click(function(){
  $("#text3").show(function(){
    $("#text3").hide(slow);
  })
  
});

// $('#brand').hover(function(){
//   $('#mouse').slideup();
//   $('#mouse').slidedown();
