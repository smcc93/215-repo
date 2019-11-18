var homeContent = "<h1>Home</h1>";
var aboutContent = "<h1>About</h1><p>can add other stuff</p>";
var productsContent = "<h1>Products</h1>";
var contactContent = "<h1>Contact</h1>";
var staffContent = "<h1>Staff</h1>";

// function buttonPressed(buttonId) {
//   console.log("pressed " + buttonId);
// }

function addListener() {
  var sectionShowing = "homeSection";
  //   var sectionToHide = "";
  $("#" + sectionShowing).html(homeContent);

  $("nav a").click(function(event) {
    var buttonId = event.currentTarget.id;
    var sectionId = buttonId + "Section";
    var currentContent = buttonId + "Content";

    // $("#" + sectionShowing).css("display", "none");
    $("#" + sectionShowing).attr("class", "hide");
    sectionShowing = sectionId;
    $("#" + sectionShowing).html(eval(currentContent));
    // $("#" + sectionShowing).css("display", "block");
    $("#" + sectionShowing).attr("class", "show");

    // $("section").html(buttonId);
    // buttonPressed(buttonId);
  });
  //   console.log("Hello there " + firstName + " " + lastname);
}

$(document).ready(function() {
  addListener();
  //   alert("document is ready");
  //   addListener("My Name is Earl", "IDK");
});
