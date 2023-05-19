// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");
var banner = document.getElementById("body-for-sticky");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        banner.classList.add("sticky-padding")
    } else {
        header.classList.remove("sticky");
        banner.classList.remove("sticky-padding")
    }
}