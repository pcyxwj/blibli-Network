/*目录的显示：当指向目录或者目录的下拉列表时会显示*/
$(function() {
  $("#mulu,#xialamulu").bind("mouseover",function() {
    $("#xialamulu").show();
  }).bind("mouseout",function () {
    $("#xialamulu").hide();
  });
})

/*目录的颜色:鼠标悬浮在上面会变成黑色*/
$(function () {
  $(".xialamululiebiao").bind("mouseover", function () {
    $(this).css({backgroundColor:"black",
      color:"white"});
  }).bind("mouseout", function () {
    $(this).css({backgroundColor:"white",
      color:"black"});
  });
})

/*目录的目录的显示,以及位置*/
$(function() {
  e = $(this).next();
  $(".xialamululiebiao").bind("mouseover", function () {
    $(this).next().show();
    $(this).next().animate({width: "260px"}, "slow");
  }).bind("mouseout", function () {
    $(this).next().animate({width: "0px"}, "fast");
    $(this).next().hide();
  }).bind("mousemove",function () {
    a = $(this).offset();
    $(this).next().offset(a);
    $(this).next().css("left","220px");
  });
})


/*当指向目录的目录时相应的目录也要变色*/
$(function () {
  $(".xialaliebiao").bind("mouseover",function () {
    $(this).show();
    $(this).css({width:"260px",
      backgroundColor:"black"});
    $(this).prev().css({backgroundColor:"black",
      color:"white"});
  }).bind("mouseout",function () {
    $(this).hide();
    $(this).css({width:"0px",
      backgroundColor:"black"});
    $(this).prev().css({backgroundColor:"white",
      color:"black"});
  });
})

/*调整预定区的抖动*/
$(function () {
  $("#shoubanqua").css("top","88.6667px");
})
