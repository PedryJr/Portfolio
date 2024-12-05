const navbarLinks = document.querySelectorAll(".navbar a");
const slider = document.querySelector(".slider");
const title = document.querySelector(".titleName");
const header = document.querySelector(".header");

let navLinkWidth = (window.innerWidth / 4) * 0.99;
let headerHeight = 0;

function Start() {

    navLinkWidth = (window.innerWidth / 4) * 0.99;
    slider.style.transform = `translateX(${window.innerWidth / 2}px)`;
    Update = setInterval(Update, 5);


}

function Update() {

    navLinkWidth = (window.innerWidth / 4) * 0.99;
    headerHeight = header.style.height;

}

document.addEventListener("DOMContentLoaded", () => {

    navbarLinks.forEach((link) =>
    {
        link.addEventListener("mouseenter", (e) =>
        {

            const hoverRect = e.target.getBoundingClientRect();

            slider.style.transform = `translateX(calc(${hoverRect.x}px + ${hoverRect.width / 2}px - ${navLinkWidth / 2}px)) translateZ(-2px)`;
            slider.style.opacity = "0.5";
            slider.style.width = `${navLinkWidth}px`;

            title.style.opacity = "0";

            if (link.id == "page1L") {
                slider.style.backgroundImage = "url('Assets/Images/MeIcon.png')";
            } else if (link.id == "page2L") {
                slider.style.backgroundImage = "url('Assets/Images/CodeIcon.PNG')";
            } else if (link.id == "page3L") {
                slider.style.backgroundImage = "url('Assets/Images/Battlesquares.png')";
            } else if (link.id == "page4L") {
                slider.style.backgroundImage = "url('Assets/Images/ToolsIcon.png')";
            }

            slider.style.backgroundColor = "rgba(0,0,0,0)";
            slider.style.height = headerHeight;
            slider.style.backgroundPosition = "center";
            slider.style.backgroundRepeat = "no-repeat";
            slider.style.backgroundSize = "cover";

        });

        link.addEventListener("mouseleave", (e) =>
        {
            const hoverRect = e.target.getBoundingClientRect();
            slider.style.transform = `translateX(calc(${hoverRect.x}px + ${hoverRect.width / 2}px))`;
            slider.style.opacity = "0";
            slider.style.width = `${0}px`;

            title.style.opacity = "1";
        });

    });

});
