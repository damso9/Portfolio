const navIcon = document.querySelector(".my-icon");
const mobileNav = document.querySelector(".mobile-nav");
const faBar = document.querySelector(".bar1");
const faTimes = document.querySelector(".bar2");

let showIcon = true

navIcon.onclick = (e) => {
  navIcon.classList.toggle('animate__rotateIn')
  console.log("heyyy");
  mobileNav.classList.toggle("show");
  mobileNav.classList.add(`animate__headShake`);
  if (showIcon) {
    console.log(showIcon)
    faBar.hidden = true;
    console.log(faTimes.hidden)
    faTimes.hidden = false;

  } else {
    console.log(showIcon)
    faBar.hidden = false;
    faTimes.hidden = true;
  }
  showIcon = !showIcon;
  console.log(showIcon)
};
