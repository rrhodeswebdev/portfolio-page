let instance = new TypeIt(".type-it", {
  speed: 100
})
  .type("Hi.")
  .break()
  .pause(1000)
  .type("I am Ryan.")
  .break()
  .pause(1000)
  .type("I make solutions.");

$("#head-icon").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    1000
  );
});

$("#nav-about").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    1000
  );
});

$("#nav-projects").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top
    },
    1000
  );
});

$("#nav-skills").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#skills").offset().top
    },
    1000
  );
});
