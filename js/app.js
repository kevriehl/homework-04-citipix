$(function(){
  

  //on click have it perform the function that changes the background
  $("#submit-btn").click(handleBackgroundChange);

  // Create the overarching function that performs the task required
  function handleBackgroundChange(event){
    // implement the prevent default function
    event.preventDefault();
    // grab the text in the input field and store it in a variable
    var city = $("#city-type").val();
    // create if statements to determine what happens for each city name
    // make sure to control to make sure your inputs are not case sensitive
    if (city.toUpperCase() === "NEW YORK CITY" || city.toUpperCase() === "NYC" || city.toUpperCase() === "NEW YORK") {
      $("body").attr("class", "nyc");
    } else if (city.toUpperCase() === "SAN FRANCISCO" || city.toUpperCase() === "SF" || city.toUpperCase() === "BAY AREA") {
      $("body").attr("class", "sf");
    } else if (city.toUpperCase() === "LOS ANGELES" || city.toUpperCase() === "LA" || city.toUpperCase() === "LAX") {
      $("body").attr("class", "la");
    } else if (city.toUpperCase() === "AUSTIN" || city.toUpperCase() === "ATX") {
      $("body").attr("class", "austin");
    } else if (city.toUpperCase() === "SYDNEY" || city.toUpperCase() === "SYD") {
      $("body").attr("class", "sydney");
    }
    // clear the field at the end of the function so the user can easily
    // enter in another city without having to backspace
    $("#city-type").val("");
  }   

});