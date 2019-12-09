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
      $("nav").removeClass("navB");
      $("nav").addClass("navW");

      $("div").addClass(function(index, currentClass) {
        var newClass;
        if (currentClass === "logoB") {
          newClass = "logoW";
        }
        return newClass;
      });
      $("div").removeClass("logoB");
    } else {
      $("nav a").removeClass("navWhite");
      $("nav a").addClass("navBlack");
      $("nav").addClass("navB");
      $("nav").removeClass("navW");
      $("div").addClass(function(index, currentClass) {
        var newClass;
        if (currentClass === "logoW") {
          newClass = "logoB";
        }
        return newClass;
      });
      $("div").removeClass("logoW");
    }
  });
}

$(document).ready(function() {
  showPages();
});
