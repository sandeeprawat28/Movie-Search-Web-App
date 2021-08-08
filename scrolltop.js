//Get the button
var button = document.getElementById("Btn");

// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

//scrollfunction code
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}