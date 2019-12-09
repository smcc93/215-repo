var tourData = [];

function tourPages() {
  $("div a").click(function(e) {
    e.preventDefault();
    var id = e.currentTarget.id;
    if (tourData[id]) {
      // $(".tours-hero").css(
      //   "background-image",
      //   "url( " + tourData[id].hero + ")"
      // );
      var tourString = `<div class="hero">
            <div class="header">${tourData[id].header}</div>
            <div class="price">${tourData[id].price}</div>
          </div>
          <div class="tourFlyer">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div> <div class="content">
          <div class="day">
            <h3>Day #1:</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div class="day">
            <h3>Day #2:</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div class="day">
            <h3>Day #3:</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div class="button">book now</div>
        </div>`;
      $(".tours-details").html(tourString);
    }
    // $("#homePage").addClass("hide");
    // $(".tours-main").addClass("hide");
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
