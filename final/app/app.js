var tourData = [];

function tourPages() {
  $("div a").click(function(e) {
    e.preventDefault();
    var id = e.currentTarget.id;
    if (tourData[id]) {
      var tourString = `<div class="hero">
            <div class="header">${tourData[id].header}</div>
            <div class="price">${tourData[id].price}</div>
          </div>
          <div class="tourFlyer">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>`;
      $(".tours-details").html(tourString);
    }
  });
}

function getData() {
  $.getJSON("data/data.json", function(data) {
    tourData = data;
    tourPages();
  });
}

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

$(document).ready(function() {
  getData();
});
