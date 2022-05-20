  $(document).ready(function() {
    $(".info1").hide();
    $(".info2").hide();
    $(".info3").hide();
    $(".info4").hide();

    $(".infoShow1").click(function() {
      $(".info1").slideToggle();
    });
    $(".infoShow2").click(function() {
      $(".info2").slideToggle();
    });
    $(".infoShow3").click(function() {
      $(".info3").slideToggle();
    });
    $(".infoShow4").click(function() {
      $(".info4").slideToggle();
    });
    $(".cartAdd").click(function() {
      alert("Item added to cart!");
    });
    $(".nav").click(function() {
      $("#menu").slideToggle();
    });
    $("form").submit(function() {
      var first_name = $("#fname").val();
      var email = $("#email").val();
      var mes = $("#messa").val();

      if ($.isNumeric(first_name)) {
        alert("Please enter a valid first name.");
      }

      else if (first_name == "") {
        alert("Please enter your first name.");
      }
      if (email == "") {
        alert("Please enter your e-mail")
      }
      // check if id messa is empty
      if ( mes == 0 ) {
        alert("Please enter a message");
      }
      return false;
    });
  });

