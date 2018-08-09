$(document).ready(function(){
  $("input:radio[name=animal]").click(function(){

    var box = parseInt(($("input:radio[name=animal]:checked").val()));

    if (box === 1) {
    $(".hidden-start").hide();
    $(".snakes").show();

    } else if (box === 2) {
    $(".hidden-start").hide();
    $(".alligators").show();

    } else if (box === 3) {
    $(".hidden-start").hide();
    $(".harp-seal").show();
    }
  });
});
