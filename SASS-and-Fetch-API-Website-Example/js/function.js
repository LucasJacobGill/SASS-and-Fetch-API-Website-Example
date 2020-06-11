//JS Variables
var buttonEl = document.querySelector('.menu-icon');
var lineEl = document.querySelector('#line-small');
var dribbbleEl = document.querySelector('.socicon-dr');
var behanceEl = document.querySelector('.socicon-be');
var instaEl = document.querySelector('.socicon-in');
var workEl = document.querySelector('#work-link');
var profileEl = document.querySelector('#profile-link');
var contactEl = document.querySelector('#contact-link');
var prevEl = document.querySelector('#dark-bg');
var nextEl = document.querySelector('#white-bg');

//Menu Icon Button Animation
function animateButton(scale, duration, elasticity) {
  anime.remove(buttonEl);
  anime({
    targets: buttonEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterButton() { animateButton(1.2, 600, 40) };
function leaveButton() { animateButton(1.0, 400, 20) };

buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false);

function animateLine(translateX) {
  anime.remove(lineEl);
  anime({
    targets: lineEl,
    translateX: translateX,
    scaleX: 0.7,
    easing: 'easeOutSine'
  });
}

function enterLine() { animateLine(5, 0.7) };
function leaveLine() { animateLine(0, 1) }

buttonEl.addEventListener('mouseenter', enterLine, false);
buttonEl.addEventListener('mouseleave', leaveLine, false);

//Social Links SVG Animations
function animateDribbble(scale, duration, elasticity) {
  anime.remove(dribbbleEl);
  anime({
    targets: dribbbleEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterDribbble() { animateDribbble(1.1, 600, 40) };
function leaveDribbble() { animateDribbble(1.0, 400, 20) };

dribbbleEl.addEventListener('mouseenter', enterDribbble, false);
dribbbleEl.addEventListener('mouseleave', leaveDribbble, false);

function animateBehance(scale, duration, elasticity) {
  anime.remove(behanceEl);
  anime({
    targets: behanceEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterBehance() { animateBehance(1.1, 600, 40) };
function leaveBehance() { animateBehance(1.0, 400, 20) };

behanceEl.addEventListener('mouseenter', enterBehance, false);
behanceEl.addEventListener('mouseleave', leaveBehance, false);

function animateInsta(scale, duration, elasticity) {
  anime.remove(instaEl);
  anime({
    targets: instaEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterInsta() { animateInsta(1.1, 600, 40) };
function leaveInsta() { animateInsta(1.0, 400, 20) };

instaEl.addEventListener('mouseenter', enterInsta, false);
instaEl.addEventListener('mouseleave', leaveInsta, false);

//Navbar Hover Animations
function animateWork(scale, duration, elasticity) {
  anime.remove(workEl);
  anime({
    targets: workEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterWork() { animateWork(1.1, 600, 40) };
function leaveWork() { animateWork(1.0, 400, 20) };

workEl.addEventListener('mouseenter', enterWork, false);
workEl.addEventListener('mouseleave', leaveWork, false);

function animateProfile(scale, duration, elasticity) {
  anime.remove(profileEl);
  anime({
    targets: profileEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterProfile() { animateProfile(1.1, 600, 40) };
function leaveProfile() { animateProfile(1.0, 400, 20) };

profileEl.addEventListener('mouseenter', enterProfile, false);
profileEl.addEventListener('mouseleave', leaveProfile, false);

function animateContact(scale, duration, elasticity) {
  anime.remove(contactEl);
  anime({
    targets: contactEl,
    scale: scale,
    duration: duration,
    easing: 'spring(1, 75, 60, 50)'
  });
}

function enterContact() { animateContact(1.1, 600, 40) };
function leaveContact() { animateContact(1.0, 400, 20) };

contactEl.addEventListener('mouseenter', enterContact, false);
contactEl.addEventListener('mouseleave', leaveContact, false);

//Work Navigation Hover Animations
function animatePrev(scale, duration, translateX) {
  anime.remove(prevEl);
  anime({
    targets: prevEl,
    scale: scale,
    duration: duration,
    translateX: translateX,
    easing: 'easeOutExpo'
  });
}

function enterPrev() { animatePrev(1.2, 600, -8) };
function leavePrev() { animatePrev(1.0, 400, 0) };

prevEl.addEventListener('mouseenter', enterPrev, false);
prevEl.addEventListener('mouseleave', leavePrev, false);

function animateNext(scale, duration) {
  anime.remove(nextEl);
  anime({
    targets: nextEl,
    scale: scale,
    duration: duration,
    easing: 'easeOutExpo'
  });
}

function enterNext() { animateNext(1.2, 600) };
function leaveNext() { animateNext(1.0, 400) };

nextEl.addEventListener('mouseenter', enterNext, false);
nextEl.addEventListener('mouseleave', leaveNext, false);
