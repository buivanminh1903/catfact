$(document).ready(function () {
  $.get("https://catfact.ninja/fact", function (data, status) {
    $("#fact").text(data.fact);
    $("#myDIV").hide();
  }).fail(function () {
    alert("woops");
  });

  $.get("https://api.thecatapi.com/v1/images/search", function (data, status) {
    document.body.style.backgroundImage = "url(" + data[0].url + ")";
  });
});
