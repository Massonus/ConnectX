$(document).ready(function () {
  $(".accordion-title").click(function () {
    $(".accordion-content").slideUp();
    $(".accordion-title").removeClass("active");

    if (!$(this).next(".accordion-content").is(":visible")) {
      $(this).next(".accordion-content").slideDown();
      $(this).addClass("active");
    }
  });
});
