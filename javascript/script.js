
$(document).ready(function () {
  $("#brand").hover(
    function () {
      $("#delani").css("display", "block");
    },
    function () {
      $("#delani").css("display", "none");
    }
  );
});

// what we do
$("#clickable1").click(function () {
  $("#text1").show(function () {
     $("#text1").hide(3000);
  });
});

$("#clickable2").click(function () {
  $("#text2").show(function () {
     $("#text2").hide(7000);
  });
});

$("#clickable3").click(function () {
  $("#text3").show(function () {
     $("#text3").hide(7000);
  });
});

// projects
$(".proj-1").hover(
  function () {
    $(".name1-overlay").css("display", "block");
  },
  function () {
    $(".name1-overlay").css("display", "none");
  }
);

$(".proj-2").hover(
  function () {
    $(".name2-overlay").css("display", "block");
  },
  function () {
    $(".name2-overlay").css("display", "none");
  }
);
$(".proj-3").hover(
  function () {
    $(".name3-overlay").css("display", "block");
  },
  function () {
    $(".name3-overlay").css("display", "none");
  }
);
$(".proj-4").hover(
  function () {
    $(".name4-overlay").css("display", "block");
  },
  function () {
    $(".name4-overlay").css("display", "none");
  }
);
$(".proj-5").hover(
  function () {
    $(".name5-overlay").css("display", "block");
  },
  function () {
    $(".name5-overlay").css("display", "none");
  }
);
$(".proj-6").hover(
  function () {
    $(".name6-overlay").css("display", "block");
  },
  function () {
    $(".name6-overlay").css("display", "none");
  }
);
$(".proj-7").hover(
  function () {
    $(".name7-overlay").css("display", "block");
  },
  function () {
    $(".name7-overlay").css("display", "none");
  }
);
$(".proj-8").hover(
  function () {
    $(".name8-overlay").css("display", "block");
  },
  function () {
    $(".name8-overlay").css("display", "none");
  }
);

$("button#submit").click(function(){
  $("p#msg").css("display","block");
})

