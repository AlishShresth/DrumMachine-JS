function play(id) {
  var audio = document.getElementById(id);
  audio.play();
  $("#display").text(
    $("#" + id)
      .parent()
      .attr("id")
  );
}

document.addEventListener("keydown", function (e) {
  $("#" + e.key.toUpperCase())
    .parent()
    .addClass("playing");
  play(e.key.toUpperCase());
  setTimeout(function () {
    $("#" + e.key.toUpperCase())
      .parent()
      .removeClass("playing");
  }, 100);
});
