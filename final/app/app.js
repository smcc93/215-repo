function showPages() {
  var pageShowing = "homePage";

  $("nav a").click(function(event) {
    var buttonId = event.currentTarget.id;
    var pageId = buttonId + "Page";

    $("#" + pageShowing).addClass("hide");
    pageShowing = pageId;
    $("#" + pageShowing).removeClass("hide");
    if (pageShowing == "homePage") {
      $("nav a").removeClass("navBlack");
      $("nav a").addClass("navWhite");
    } else {
      $("nav a").removeClass("navWhite");
      $("nav a").addClass("navBlack");
    }
  });
}

$(document).ready(function() {
  showPages();
});
