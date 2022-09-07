
// BURGER TOGGLE
document.addEventListener('DOMContentLoaded', nav);
function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const flyout = document.querySelector('.flyout');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        flyout.classList.toggle('show');

    })
}

//SCROLL TOGGLE
// const navFixed = document.querySelector('nav');
// navFixed.addEventListener('click', showNav);


// function hideNav(){
//     navFixed.classList.toggle('scroll-down');
//     console.log("fired");
// }

// function showNav(){
//     navFixed.classList.toggle('scroll-up');
// }

// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= 0) {
//       navFixed.classList.remove(scrollUp);
//       return;
//     }
   
//     if (currentScroll > lastScroll && !navFixed.classList.contains(scrollDown)) {
//       // down
//       navFixed.classList.remove(scrollUp);
//       navFixed.classList.add(scrollDown);
//     } else if (
//       currentScroll < lastScroll &&
//       navFixed.classList.contains(scrollDown)
//     ) {
//       // up
//       navFixed.classList.remove(scrollDown);
//       navFixed.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll;
//   });