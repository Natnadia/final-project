
window.onscroll = function() { stickyHeader() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky)  {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#9999FF';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});


