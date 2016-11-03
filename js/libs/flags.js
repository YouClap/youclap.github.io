$(document).ready(function(){
  $(".lang-flag").click(function(){
    $(".language-dropdown").toggleClass("open");
  });
  $("ul.lang-list li").click(function(){
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if($(this).hasClass('lang-usa')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-usa").removeClass("lang-esp").removeClass("lang-prt");
      $("#lang_selected").html("<p>USA</p>")
    }else if($(this).hasClass('lang-prt')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-prt").removeClass("lang-esp").removeClass("lang-usa");
    $("#lang_selected").html("<p>PRT</p>")
    }else{
      $(".language-dropdown").find(".lang-flag").addClass("lang-esp").removeClass("lang-usa").removeClass("lang-prt");
      $("#lang_selected").html("<p>ESP</p>")
    }
    $(".language-dropdown").removeClass("open");
  });
})