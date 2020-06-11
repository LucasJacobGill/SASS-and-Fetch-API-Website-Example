// Timeline with default parameters
var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 800
});

// Children
tl
.add({
    targets: '.nav-wrapper',
    opacity: [0, 1],
    width: ['0px', '1400px']
})
.add({
  targets: '.logo',
  width: ['0px', '340px']
}, '-=400')
.add({
  targets: '#logotype, nav a',
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(70)
}, '-=300')
.add({
  targets: '.text-section',
  opacity: [0, 1],
  translateX: [-100, 0]
}, '-=1000')
.add({
  targets: '.image-section',
  opacity: [0, 1],
  translateY: [100, 0]
}, '-=700')
.add({
  targets: '.social-links a ',
  opacity: [0, 1],
  translateX: [50, 0],
  delay: anime.stagger(70)
}, '-=500')
.add({
  targets: '.social-links p',
  opacity: [0, 1],
  translateX: [50, 0],
  delay: anime.stagger(70)
}, '-=1000')
.add({
  targets: '.menu-icon .line',
  opacity: [0, 1],
  translateX: [50, 0],
  delay: anime.stagger(70)
}, '-=1000')
.add({
  targets: '.work-navigation div',
  opacity: [0, 1],
  height: ['0px', '100px'],
  delay: anime.stagger(200)
}, '-=500')
.add({
  targets: '.page-counter',
  opacity: [0, 1],
  translateY: [70, 0]
}, '-=1000')
.add({
  targets: '.page-counter div',
  opacity: [0, 1],
  translateY: [70, 0],
  delay: anime.stagger(70)
}, '-=500')
