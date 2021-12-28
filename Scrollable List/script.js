const button = document.querySelector("#button");
const frame = document.querySelector("frame");
button.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (window.pageYOffset > 6500) {

        button.style.display = "block";

    } else {
        button.style.display = "none";
    }
}